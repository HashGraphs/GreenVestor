import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
// address payable bidowner;
// string companyName;
// string contact;
// string goodsDealsWith;
// string tenderOwnerName;
// uint bidsTenderIndex;
// statuschoices choice;
// string goodsDescription;

const DisplayTenderAllocation = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [color, setColor] = useState(true);

  return (
    <div className="w-[94%] mx-auto my-10">
    <Banner/>
      <h1 className=" text-3xl font-extrabold">Tender Allocation</h1>

      <div className="w-full">
        <table className="bg-white min-w-max w-full table-auto my-10">
          <thead className="border-b border-gray-200 hover:bg-gray-100">
            <tr className="bg-white text-gray-500 text-sm leading-normal rounded-lg">
              <th className="py-3 px-6 text-left">Company Name</th>
              <th className="py-3 px-6 text-left">Contacts</th>
              <th className="py-3 px-6 text-left">Tender Description</th>
              <th className="py-3 px-6 text-center">Tenderee</th>
            </tr>
          </thead>

          <tbody className="text-[#130026]  text-sm font-light">
            {props.bids.map((tender, index) => (
              <>
                {tender.choice == 1 ? (
                  <>
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
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
                            {tender.contact}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-josefin font-normal">
                            {tender.goodsDescription}
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
                    </tr>
                  </>
                ) : (
                  ``
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DisplayTenderAllocation;