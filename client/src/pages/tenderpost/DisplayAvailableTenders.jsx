import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";


const DisplayTenders = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-[94%]  mx-auto my-10">
      <Banner/>
        <div>
          <h1 className=" text-3xl font-extrabold">Listed Tenders</h1>

          <table className="bg-white w-full table-auto my-10">
            <thead className="border-b border-gray-200 hover:bg-gray-100">
              <tr className="bg-white text-gray-500 text-sm leading-normal rounded-lg">
                <th className="py-3 px-6 text-left">Company Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone Number</th>
                <th className="py-3 px-6 text-left">Tender Description</th>
                <th className="py-3 px-6 text-left">Deadline Date</th>
                <th className="py-3 px-6 text-left">Tender Amount</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#130026]  text-sm font-light">
              {props.tenders.map((tender, index) => (
                <>
                  <tr
                    key={index}
                    className="border-b border-gray-200  hover:bg-gray-100"
                  >
                    <td className="py-3 px-2 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-medium font-josefin">
                          {tender.companyName}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left ">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.email}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                        {tender.contactEmail}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.tenderDescription}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.deadlineDate}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {Number(tender.tenderAmount)}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <div className="flex item-center justify-center">
                        <button
                          className="px-6 py-2 font-normal text-white bg-button-color rounded-md "
                          onClick={() =>
                            navigate("/BiderForm", { state: { id: index } })
                          }
                          id="btn-bid"
                        >
                          BID
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//     const navigate = useNavigate();

//     return tenders.map(tender => (

//         <div className='tenderCard' key ={tender.contact}>
//             <div className='tenderCardHeader' id='tenderCardHeader'>

//                         <p><RiBuilding2Fill/><b> {tender.companyName}</b></p>
//                         <p>{tender.description}</p>
//                         <h4>{tender.amount}</h4>

//             </div>
//             <div className='tenderCard-middle' id='tendercard-middle'>
//                 <h5><GiRotaryPhone/>&nbsp;{tender.contact}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.deadline} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.email}</h5>
//             </div>
//             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
//                 <button className='btn-bid' id='btn-bid' onClick={ () =>navigate("/BiderForm")}>BID</button>
//                 <button className='btn-aprove'>Approve</button>
//                 <button className="deletebtn" onClick={()=> deleteTender(tender.contact)}><BsTrash/></button>
//             </div>

//         </div>

//      ))

//   }
export default DisplayTenders;