import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import Web3Modal from "web3modal";

import { providers, Contract } from "ethers";

import Web3 from "web3";


import { BiderAbi } from "../../abi/bidercontract_abi";
import DisplayMyTenders from "./DisplayMyTenders";
import { TenderHiveContractAddress } from "../../contractAddress/address";

const AllMyTenders = () => {
   
  const [Tenders, setTenders] = useState([]);
  
  const [tenderslength, setLength] = useState(0);
  const [userAccount,setUserAccount] = useState(null);
  const Web3ModalRef = useRef();
  const Approve = () => {
    alert("yooh");
  };
  //Todo get all information
  const getAllTenders = useCallback(async () => {
    try {
      let _tenders = [];
      const provider = await getProviderOrSigner();
      const TenderContracts = new Contract(
        TenderHiveContractAddress,
        BiderAbi,
        provider
      );
      
      const tenders = await TenderContracts.readTenderDetails();
      const tenderstotal = await TenderContracts.tenderTotals();
      console.log("tender total is", tenderstotal.toString());
      console.log("my tenders only", tenders);
      tenders?.forEach((element) => {
        _tenders.push(element);
      });
      setTenders(_tenders);
    } catch (error) {
      console.log("the error is my tenders",error);
    }
  }, []);
  // //getAllTenders
  // const getAllTenders = useCallback(async () => {
  //   let _tenders = [];
  //   const provider = await getProviderOrSigner();
  //   const TenderContracts = new Contract(
  //     TenderOwnerAddress,
  //     BiderAbi,
  //     provider
  //   );

  //   const tenderLength = await TenderContracts.tenderTotals();

  //   for (let i = 0; i < tenderLength; i++) {
  //     let _tender = new Promise(async (resolve, reject) => {
  //       let t = await TenderContracts.readTenderDetails(i);
  //       resolve({
  //         owners: t[0],
  //         companyNames: t[1],
  //         tenderDescriptions: t[2],
  //         deadlineDates: t[3],
  //         contactEmails: t[4],
  //         tenderAmounts: t[5],
  //         tenderindexs: t[6],
  //       });
  //       reject(new Error("Will this be ignored?")); // ignored
  //     });
  //     _tenders.push(_tender);
  //   }
  //   const tenderss = await Promise.all(_tenders);
  //   setTenders(tenderss);
  //   //renderProducts();

  //   //add function to render tenders
  // }, []);
  //provide sgner or provider
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    // const web3 = new Web3(provider)
    // const accounts = web3.currentProvider.selectedAddress;
   
    // setUserAccount(accounts);
  //  console.log("account",accounts)
    // check if network is fantomTestnet
    const { chainId } = await web3Provider.getNetwork();
     const signer = web3Provider.getSigner();
     
   
    
    const accounts = await signer.getAddress();
     setUserAccount(accounts);
     console.log("chain idssss",chainId)
    if (chainId !== 296) {
      window.alert("Change network to hedera Testnet");
      throw new Error("Change network to hedera Testnet ");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  useEffect(() => {
    Web3ModalRef.current = new Web3Modal({
      network: "hedera",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider: false,
    });
    //getTotalTendersLength();
    getAllTenders();
    //renderProducts();
  }, [tenderslength]);

  return (
    <div>
      <main className="">
        
        <DisplayMyTenders tenders={Tenders} userAccount={userAccount} approve={Approve} />
      </main>
    </div>
  );
};
export default AllMyTenders;