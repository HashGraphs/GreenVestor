import React from "react";
import { BiderAbi } from "../../abi/bidercontract_abi";
import Web3Modal from "web3modal";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SiBitcoincash } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Web3 from "../../web3-storage/web3";
import { Web3Storage, getFilesFromPath } from "web3.storage";
import { TenderHiveContractAddress } from "../../contractAddress/address";


import {providers, Contract } from "ethers";
//let token = import.meta.env.VITE_token;

const BiderForm = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJFRjRiMTdhYzY1MjgzNEYxQTBkMTQxNTUwOTRlYTdiYTMzRWEyOWIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzcyMzA1NTE0NTMsIm5hbWUiOiJ0ZW5kZXJzcGFjZSJ9.CwbHkp79KAwCjQTpRmlRJWSWKa10VBSJLLv4eMrmVJs";
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const location = useLocation();
  const documenturl = location.state?.documenturl;

  const { id } = state; // Read values passed on state
  
  const Web3ModalRef = useRef();
  const [biderCompanyName, setBiderCompanyName] = useState("");
  const [biderCompanyRegistrationNumber, setBiderCompanyRegistrationNumber] =
    useState("");
  const [biderContact, setBiderContact] = useState("");
  const [_tenderIndex, settenderIndex] = useState("");
  const [bidertypeOfGoods, setTypeOfGoods] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //provide sgner or provider
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await Web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    // check if network is polygon hermez
    const { chainId } = await web3Provider.getNetwork();
    
    if (chainId !== 296) {
      window.alert("Change network to hedera Testnet");
      throw new Error("Change network to hedera Testnet");
    }
    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  //call the metamask on page reload
  useEffect(() => {
    Web3ModalRef.current = new Web3Modal({
      network: "hedera",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider: false,
    });
    getProviderOrSigner();
    settenderIndex(id);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
  //btnsubmit to submit the biders tender details
  const btnsubmit = async (e) => {
    e.preventDefault();
    const params = [
      _tenderIndex,
      biderCompanyName,
      biderContact,
      bidertypeOfGoods,
    ];

    try {
      const signer = await getProviderOrSigner(true);
      const BiderContract = new Contract(
        TenderHiveContractAddress,
        BiderAbi,
        signer
      );
      const results = await BiderContract.writeBiderDetails(...params);

      alert("BidSuccessful ");
    } catch (error) {
      alert(error);
    }
  };
  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const files = form[0].files;

  //   if (!files || files.length === 0) {
  //     return alert("No files selected");
  //   }

  //   const file = files[0];
  //   const storage = new Web3Storage({ token })

  //   console.log(`Uploading ${files.length} files`)
  //   const cid = await storage.put(files)
  //   console.log('Content added with CID:', "https://"+cid+".ipfs.w3s.link/"+`${file.name}`)
  //   const linkurl = "https://"+cid+".ipfs.w3s.link/"+`${file.name}`;
  //   setTypeOfGoods(linkurl);
  //   // if(linkurl != null){
  //   //   navigate("/BiderForm", { state: { documenturl: linkurl } })
  //   // }
  //   // setUrl(urlfromfilecoin);

  // }
  // //Form submit event
  const handleAddTender = async (event) => {
    //prevent page refresh

    event.preventDefault();
    try {
      setIsLoading(true);
      const form = event.target;
      const files = form[0].files;

      if (!files || files.length === 0) {
        return alert("No files selected");
      }

      const file = files[0];
      const storage = new Web3Storage({ token });

      console.log(`Uploading ${files.length} files`);
      const cid = await storage.put(files);
      console.log(
        "Content added with CID:",
        "https://" + cid + ".ipfs.w3s.link/" + `${file.name}`
      );
      const linkurl = "https://" + cid + ".ipfs.w3s.link/" + `${file.name}`;

      setTypeOfGoods(linkurl);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }

    // console.log("set doc url", bidertypeOfGoods);

    // // //creating an object
    // // let tender={
    // //     companyName,
    // //     description,
    // //     deadline,
    // //     contact,
    // //     email,
    // //     amount
    // // }
    // // setTenders([...tenders, tender]);
    // // setBiderCompanyName("");
    // // setBiderContact("");
    // // setTypeOfGoods("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setBiderCompanyName("");
    setBiderContact("");
    setBiderCompanyRegistrationNumber("");
    // setTypeOfGoods("");
  }
  return (
    <div className="flex">
      <div className="mx-auto w-[95%] my-10">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="font-jakarta text-3xl font-extrabold">
                Bid For Tender
              </h1>
              <p className="py-4 pr-4 font-josefin">
                Connect wallet to fill in the form below to bid for the tender.
              </p>
            </div>

            {/* <div>
              <button className="px-4 py-2 font-josefin text-white bg-primary-color rounded-full shadow-md hover:shadow-lg">
                Connect Wallet
              </button>
            </div> */}
          </div>

          <div className="bg-white w-1/3 shadow-sm my-4 p-10 rounded-md">
            <div>
              <form onSubmit={handleAddTender}>
                <div className="space-y-5">
                  <label className="font-josefin pb-6">
                    Upload Company Documents
                  </label>
                  <br />
                  {isLoading ? (
                    <p className="text-green-500">Uploading...</p>
                  ) : (
                    ""
                  )}
                </div>
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  className="border-2 py-3 pl-3 rounded-md"
                />
                <button className="button" type="submit">
                  Upload file
                </button>
              </form>
            </div>
            <div className="my-6 w-full">
              <form
                onSubmit={handleSubmit}
                className="flex justify-between w-11/12 mx-auto"
              >
                <div className="space-y-4">
                  <div className="w-full">
                    <label className="font-josefin">Company Name</label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="company"
                      name="biderCompanyName"
                      placeholder="Company Name..."
                      required
                      onChange={(e) => setBiderCompanyName(e.target.value)}
                      value={biderCompanyName}
                    />
                  </div>

                  <div>
                    <label className="font-josefin pt-2">
                      Company Registration Number
                    </label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="biderCompanyRegistrationNumber"
                      name="description"
                      placeholder="SL002900"
                      required
                      onChange={(e) =>
                        setBiderCompanyRegistrationNumber(e.target.value)
                      }
                      value={biderCompanyRegistrationNumber}
                    />
                  </div>

                  <div>
                    <label className="font-josefin">Contact</label>
                    <br />
                    <input
                      className="py-3 px-4 border-2 rounded-lg"
                      type="text"
                      id="deadline"
                      name="deadline"
                      placeholder="0792271915"
                      required
                      onChange={(e) => setBiderContact(e.target.value)}
                      value={biderContact}
                    />
                  </div>

                  <div className="flex justify-between my-4">
                    <button
                      className="px-10 py-2 border-2 border-secondary-color text-gray-300 rounded-md mb-2 font-josefin"
                      onClick={() => navigate("/TenderStatus")}
                    >
                      Close
                    </button>
                    <button
                      className="px-10 py-2 bg-button-color text-[#fff] rounded-md shadow-md mb-2 font-josefin"
                      onClick={btnsubmit}
                      type="submit"
                      value="Submit"
                    >
                      Bid Tender
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BiderForm;