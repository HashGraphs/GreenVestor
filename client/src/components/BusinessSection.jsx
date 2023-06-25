import { businessSource } from "../helpers/businessSource";
import Business from "./Business";


const BusinessSection = () => {
  return (
    <section className="bg-[#EFEFFF] flex flex-col justify-center items-center h-full md:h-auto">
      <div className="w-4/5 mx-auto ">
        <h1 className="text-3xl font-bold mt-12 mb-3 text-center ">
          Explore the businesses
        </h1>
        <h3 className="my-5 text-center">
          We make it easy to work with professional, creative experts from
          around the world
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[95%] mb-20 ">
          {businessSource.map((element) => {
            return <Business image={element.image} title={element.title} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;