const Feature = ({ title, subtitle }) => {
    return (
      <article className="bg-white rounded-md text-black p-4 w-[95%] md:w-[100%]  h-[200px] flex flex-col justify-around ">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </article>
    );
  };
  
  export default Feature;