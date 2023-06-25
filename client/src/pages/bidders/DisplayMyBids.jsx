import React, { useState, useEffect } from "react";

const DisplayBidsTenders = (props) => {
   const [nothavetender, setNotHaveTender] = useState(false);

   useEffect(() => {
     const filteredTenders = props.tenders.filter(
       (tender) => tender.bidowner.toString().toLowerCase() == props.userAccount.toString().toLowerCase()
     );
     setNotHaveTender(filteredTenders.length === 0);
     window.scrollTo({ top: 0, left: 0, behavior: "auto" });
   }, [props.tenders, props.userAccount]);


  const [color, setColor] = useState(true);
  
  return (
    <div className="">
      <div className="w-[94%] mx-auto my-10">
        <div>
          <h1 className=" text-3xl font-extrabold">My bids</h1>

          <table className="bg-white min-w-max w-full table-auto my-10">
            <thead className="border-b border-gray-200 hover:bg-gray-100">
              <tr className="bg-white text-gray-500 text-sm leading-normal rounded-lg">
                <th className="py-3 px-6 text-left">Company Name</th>
                <th className="py-3 px-6 text-left">Contact</th>
                <th className="py-3 px-6 text-left">Tender Owner</th>
                <th className="py-3 px-6 text-left">Tender Documents</th>
                <th className="py-3 px-6 text-left">Status</th>
                {/* <th className="py-3 px-6 text-left">Tender Amount</th> */}
              </tr>
            </thead>
            <tbody className="text-[#130026]  text-sm font-light">
              {props.tenders.map((tender, index) => (
                <>
                  <tr
                    key={tender.companyName + index}
                    className="border-b border-gray-200  hover:bg-gray-100"
                  >
                    {tender.bidowner.toString().toLowerCase() ==
                      props.userAccount.toString().toLowerCase() && (
                      <>
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
                              {tender.contact}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-left">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-josefin font-normal">
                              {tender.tenderOwnerName}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-left">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <a
                              href={tender.goodsDealsWith}
                              target="_blank"
                              className="font-josefin underline"
                            >
                              Show Document
                            </a>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-left">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-josefin font-normal">
                              {tender.choice == 1 ? (
                                <button
                                  className="py-2 px-5 bg-green/20 rounded-full font-josefin font-normal"
                                  style={{ color: color ? "green" : "orange" }}
                                >
                                  Approved
                                </button>
                              ) : (
                                <button
                                  className="py-2 px-5 bg-orange/20 rounded-full font-josefin font-normal"
                                  style={{ color: color ? "orange" : "green" }}
                                >
                                  Pending
                                </button>
                              )}
                            </span>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          {nothavetender && (
            <h1>User {props.userAccount} doesn't have any Bids</h1>
          )}
        </div>
      </div>
    </div>
  );
};


export default DisplayBidsTenders;