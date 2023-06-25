import React from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const HelpCenter = () => {
  return (
    <div className="flex flex-col items-center space-y-4 text-white text-center text-sm bg-[#39425C] px-4 py-6 rounded-md">
      <div className="mt-[-40px] bg-white h-10 w-10 rounded-full flex items-center justify-center">
        <BsFillQuestionCircleFill color="#4762F0" />
      </div>

      <p className="font-bold">Help Center</p>
      <p className="text-gray-400">Having trouble in TenderSpace? Please contact us for more question</p>
      <button className="px-4 py-2 font-josefin text-white bg-button-color rounded-md shadow-md hover:shadow-lg">
        Go To Help Center
      </button>
    </div>
  );
};

export default HelpCenter;