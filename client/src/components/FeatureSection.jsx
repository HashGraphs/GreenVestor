import featureImg from "../assets/svg/feature-image.svg";
import { featureSource } from "../helpers/featureSource";
import Feature from "./Feature";

const FeatureSection = () => {
  return (
    <section className="bg-[#F5F5F5] flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-12 text-center ">
        Our amazing features helpful for your business
      </h1>
      <article className="flex flex-col md:flex-row">
        <img src={featureImg} alt="" className="hidden md:block w-[30%]" />
        <div className="flex justify-center w-[100%] md:w-[70%] ">
          <div className="grid grid-cols-1 md:grid-cols-2 content-center justify-items-center items-center gap-4 md:p-4">
            {featureSource.map((element) => {
              return (
                <Feature
                  key={element.id}
                  title={element.title}
                  subtitle={element.subtitle}
                />
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default FeatureSection;