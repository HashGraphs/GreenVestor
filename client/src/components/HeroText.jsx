import { Link } from "react-router-dom";
import appExample from "../assets/svg/landingimage.svg";

const  HeroText = () => {
  return (
    <section className="flex flex-col items-center">
      <article className=" flex flex-col items-center text-white my-3 h-[400px] md:h-[300px] justify-around">
        <div className="text-5xl font-bold text-center pt-10">
         Openness fosters trust and transparency in{" "}
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf5817] to-[#f8b51a]">
            procurement of services
          </div>
        </div>
        <h3 className="text-base text-[#fafafab5] w-[95%] xsm:w-[75%] md:w-[60%] text-center">
        TenderHive is a blockchain based application that makes it easy to
          advertise and apply for tenders with the highest level of
          transparency.
        </h3>
        <Link to="/AvailableTenders" className="pb-10">
          <button className="rounded-sm border  bg-gradient-to-r from-[#b8d94b] to-[#BB2BFF] border-none px-10 py-3  my-2">
            Get Started
          </button>
        </Link>
      </article>
      <div className="w-1/2">
        <img
          src={appExample}
          alt="application-example"
          className="w-full "
        />
      </div>
    </section>
  );
};

export default HeroText;