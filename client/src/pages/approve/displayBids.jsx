import React, { useState, useEffect } from "react";


const DisplayBids = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [color, setColor] = useState(true);

  return (
    <div className="w-[95%] mx-auto my-10">
      <div className="w-full">
        <table className="bg-white min-w-max w-full table-auto my-10">
          <thead className="border-b border-gray-200 hover:bg-gray-100">
            <tr className="bg-white text-gray-500 text-sm leading-normal rounded-lg">
              <th className="py-3 px-6 text-left font-josefin">Company Name</th>
              <th className="py-3 px-6 text-left">Goods or Services</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Tenderer</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="text-[#130026]  text-sm font-light">
            {props.bids.map((tender, index) => (
              <>
                {tender.choice === 0 ? (
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
                          <b className="font-josefin font-semibold">
                            Documents:{" "}
                          </b>
                          <a
                            className="font-josefin font-normal pl-2 hover:underline"
                            href={tender.goodsDealsWith}
                            target="_blank"
                          >
                            Link
                          </a>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          {tender.choice == 0 && (
                            <p
                              className="py-2 px-5 bg-orange/20 rounded-full font-josefin font-normal"
                              style={{ color: color ? "orange" : "green" }}
                            >
                              Pending
                            </p>
                          )}
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

                      <td className="py-3 px-2 text-center">
                        <div className="flex item-center justify-center">
                          <button
                            className="px-6 py-2  font-normal text-white bg-button-color rounded-md"
                            onClick={() => props.approve(index)}
                          >
                            Approve
                          </button>
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
export default DisplayBids;