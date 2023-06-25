import React, { useState, useEffect } from "react";


const DisplayMyTenders = (props) => {
   const [nothavetender, setNotHaveTender] = useState(false);

   useEffect(() => {
     const filteredTenders = props.tenders.filter(
       (tender) => tender.owner.toString().toLowerCase() === props.userAccount.toString().toLowerCase()
       
     );
     setNotHaveTender(filteredTenders.length === 0);
     window.scrollTo({ top: 0, left: 0, behavior: "auto" });
   }, [props.tenders, props.userAccount]);
   

  return (
    <div className="">
      <div className="w-[94%] mx-auto my-10">
        <div>
          <h1 className=" text-3xl font-extrabold">My Tenders</h1>

          <table className="bg-white min-w-max w-full table-auto my-10">
            <thead className="border-b border-gray-200 hover:bg-gray-100">
              <tr className="bg-white text-gray-500 text-sm leading-normal rounded-lg">
                <th className="py-3 px-6 text-left">Company Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone Number</th>
                <th className="py-3 px-6 text-left">Tender Description</th>
                <th className="py-3 px-6 text-left">Deadline Date</th>
                <th className="py-3 px-6 text-left">Tender Amount</th>
                <th className="py-3 px-6 text-left">Tender Status</th>
              </tr>
            </thead>
            <tbody className="text-[#130026]  text-sm font-light">
              {props.tenders.map((tender, index) => (
                <>
               
                  {tender.owner.toString().toLowerCase() === props.userAccount.toString().toLowerCase() && (
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
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-josefin font-normal">
                            {/* {tender.tenderAmount / 1} */}
                            {new Date(tender.deadlineDate).getTime() <=
                            new Date().getTime() ? (
                              <button className="bg-rose-300 text-rose-800 py-2 px-4 rounded-lg">
                                Inactive
                              </button>
                            ) : (
                              <button className="bg-green-200 text-green-800 py-2 px-4 rounded-lg">
                                Active
                              </button>
                            )}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
          {nothavetender && (
            <h1>User {props.userAccount} doesn't have any Tenders</h1>
          )}
        </div>
      </div>
    </div>
  );
};


export default DisplayMyTenders;