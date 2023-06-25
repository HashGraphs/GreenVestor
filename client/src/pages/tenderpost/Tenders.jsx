import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";

import { BiderAbi } from "../../abi/bidercontract_abi";

import { useNavigate } from "react-router-dom";
import { TenderHiveContractAddress } from "../../contractAddress/address";


const Tenders = () => {
  let ref = useRef(null);
  let getformdiv = useRef(null);
  let btnapprove = useRef(null);
  //let Tenders =[];
  const [Tenders, setTenders] = useState([]);
  
  const [tenderslength, setLength] = useState(0);
  const web3ModalRef = useRef();
  const [walletconnect, setWalletConnect] = useState(false);
  const [address, setaddress] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  //const [accountBalance,setAccountBalance] = useState(null);
  //postTender to the contract

  //  document.querySelector(".btnPost")
  //  .addEventListener("click", async (e) =>
  const btnPosts = async () => {
    const params = [companyName, description, deadline,contact, email, amount];

    try {
      const signer = await getProviderOrSigner(true);
      const tenderContract = new Contract(TenderHiveContractAddress, BiderAbi, signer);
      const results = await tenderContract.writeTenderDetails(...params);
      // .send({from: address})
      alert("add results successful");
      alert(`🎉 You successfully added "${params[0]}".`);
    } catch (error) {
      alert("the error is", error);
      console.log(error);
    }
    
    // getAllTenders()
  };

  const getUserAddress = async () => {
    const signer = await getProviderOrSigner(true);
    const accounts = await signer.getAddress();
    setaddress(accounts);
  };
  const navigate = useNavigate();

  const getProviderOrSigner = async (needSigner = false) => {
    //connect metamask
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    //check if user is connected to hedera
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 296) {
      window.alert("Change network to hedera Testnet");
      throw new Error("Change network To hedera Testnet ");
    }
    
    //if need signer for transactions
    if (needSigner) {
      const signer = web3Provider.getSigner();
       const accounts = await signer.getAddress();
      setaddress(accounts);
      return signer;
    }
    return web3Provider;
  };
  const DectectWindow = async () => {
    try {
      await getProviderOrSigner();
      await getUserAddress();
      alert("set account");
      setWalletConnect(true);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  //main array of tender details objects state
  //const[tenders, setTenders] = useState(getDatafromLS());

  //input field states
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  // //Form submit event
  const handleAddTender = (e) => {
    //prevent page refresh
    e.preventDefault();

    // //creating an object
    // let tender={
    //     companyName,
    //     description,
    //     deadline,
    //     contact,
    //     email,
    //     amount
    // }
    // setTenders([...tenders, tender]);
    setCompanyName("");
    setDescription("");
    setDeadline("");
    setContact("");
    setEmail("");
    setAmount("");
  };
  

  const openForm = () => {
    getformdiv.current.style.display = "block";
  };
  const closeForm = () => {
    getformdiv.current.style.display = "none";
  };

  //delete tender from local storage
  // const deleteTender=(contact)=>{
  //     const filteredTenders=tenders.filter((element, index)=>{
  //         return element.contact !== contact
  //     })
  //     setTenders(filteredTenders);
  // }
  //saving data to local storage

  // useEffect(()=>{
  //     localStorage.setItem('tenders', JSON.stringify(tenders));
  // }, [tenders])
  //load content on reload
  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "hedera",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider: false,
    });
    //getTotalTendersLength();
    // getAllTenders();
    getProviderOrSigner();
    //renderProducts();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [walletconnect, tenderslength]);

  return (
    <>
      <div className="flex">
        
        <div className="mx-auto w-[95%] my-10">
          <div ref={getformdiv} className="">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="font-jakarta text-3xl font-extrabold">
                  Advertise Tender
                </h1>
                <p className="py-4 pr-4 font-josefin">
                  Connect wallet to fill the form below.
                </p>
              </div>

              {/* <div>
                <button
                  onClick={DectectWindow}
                  className="px-4 py-2 font-josefin text-white bg-primary-color rounded-full shadow-md hover:shadow-lg"
                >
                  Connect Wallet
                </button>
              </div> */}
            </div>

            <div className="bg-white w-7/12 shadow-sm my-4 p-10 rounded-md">
              <div className="my-6">
                <form
                  onSubmit={handleAddTender}
                  className="flex space-x-24"
                >
                  <div className="space-y-4">
                    <div className="w-full">
                      <label className="font-josefin">Company Name</label>
                      <br />
                      <input
                        className="py-3 pr-24 pl-4 border-2 rounded-lg"
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Name..."
                        required
                        onChange={(e) => setCompanyName(e.target.value)}
                        value={companyName}
                      />
                    </div>

                    <div>
                      <label className="font-josefin pt-2">
                        Tender Description
                      </label>
                      <br />
                      <input
                        className="py-3 pr-24 pl-4 border-2 rounded-lg"
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Tender description..."
                        required
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                      />
                    </div>

                    <div>
                      <label className="font-josefin">DeadLine</label>
                      <br />
                      <input
                        className="py-3 px-4 border-2 rounded-lg"
                        type="date"
                        id="deadline"
                        name="deadline"
                        required
                        onChange={(e) => setDeadline(e.target.value)}
                        value={deadline}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="font-josefin">Contact</label>
                      <br />
                      <input
                        className="py-3 pr-24 pl-4 border-2 rounded-lg"
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="0792271915"
                        required
                        onChange={(e) => setContact(e.target.value)}
                        value={contact}
                      />
                    </div>

                    <div>
                      <label className="font-josefin">Email</label>
                      <br />
                      <input
                        className="py-3 pr-24 pl-4 border-2 rounded-lg"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="stansmith@gmail.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>

                    <div>
                      <label className="font-josefin">Amount</label>
                      <br />
                      <input
                        className="py-3 pr-24 pl-4 border-2 rounded-lg"
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="1,300,000"
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                      />
                    </div>

                    <div className="flex justify-between my-4">
                      <button
                        className="px-10 py-2 border-2 border-secondary-color text-gray-300 rounded-md mb-2 font-josefin"
                        onClick={() => navigate("/Tenders")}
                      >
                        Close
                      </button>
                      <button
                        className="px-10 py-2 bg-button-color text-[#fff] rounded-md shadow-md mb-2 font-josefin"
                        onClick={() => {
                          btnPosts();
                        }}
                        type="submit"
                        value="Submit"
                      >
                        Post Tender
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tenders;