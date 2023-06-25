import React from 'react';


const Banner = () => {
  return (
    <div className="bg-bannerImg h-full rounded-lg bg-cover bg-center bg-no-repeat w-full mb-10">
      <div className="w-2/3 px-6 py-4 space-y-4 ">
        <p className="font-bold text-3xl text-white">
          Bringing trust and transparency to procurement of services
        </p>
        <p className="text-white">
          blockchain based application that makes it easy to advertise and apply
          for tenders with the highest level of transparency.
        </p>
        <button className="px-4 py-2 text-button-color bg-white rounded-md shadow-md hover:shadow-lg">
          Find Out Now
        </button>
      </div>
    </div>
  );
}

export default Banner