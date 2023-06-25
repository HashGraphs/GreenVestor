import map from "../assets/svg/map.svg";

const MapSection = () => {
  return (
    <section className="bg-[#F5F5F5] flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-12 mb-5 text-center ">
        Users around the world
      </h1>
      <img src={map} alt="" />
      <hr className="w-[90%] my-5" />
    </section>
  );
};

export default MapSection;