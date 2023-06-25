import logo from "../assets/svg/tender-filecoin-logo.svg";

const Footer = () => {
  return (
    <section className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-around text-primarygreen text-lg text-white p-3 sm:p-10 ">
      <div className="flex flex-col w-full sm:w-[50%]">
        <div className="flex items-center mb-2">
          <img src={logo} alt="tender-filecoin-logo" />
          <h3 className="font-bold text-xl ml-2">TenderHive</h3>
        </div>
        <p className="text-sm ">
        TenderHive is a blockchain based application that makes it easy to
          advertise and apply for tenders with the highest level of
          transparency.
        </p>
        <span className="flex my-3 ">
          <span className="bg-white hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] rounded-full mr-2">
            <i className="bx bxl-facebook-circle p-3 rounded-full hover:text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-transparent bg-clip-text "></i>
          </span>
          <span className="bg-white hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] rounded-full mx-2">
            <i className="bx bxl-twitter p-3 rounded-full hover:text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-transparent bg-clip-text "></i>
          </span>
          <span className="bg-white hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] rounded-full mx-2">
            <i className="bx bxl-instagram p-3 rounded-full hover:text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-transparent bg-clip-text "></i>
          </span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-[100%]">
        <div className="my-2">
          <h3 className="font-bold mb-3">About Us</h3>
          <h4 className="text-sm my-1 text-[#ffffffa1]">Home</h4>
          <h4 className="text-sm my-1 text-[#ffffffa1]">Features</h4>
          <h4 className="text-sm my-1 text-[#ffffffa1]">Contact Us</h4>
        </div>
        <div className="my-2">
          <h3 className="font-bold mb-3">Community</h3>
          <h4 className="text-sm my-1 text-[#ffffffa1]">Twitter</h4>
          <h4 className="text-sm my-1 text-[#ffffffa1]">Discord</h4>
          <h4 className="text-sm my-1 text-[#ffffffa1]">Telegram</h4>
        </div>
        <div className="my-2">
          <h3 className="font-bold mb-3">Contact Us</h3>
          <h4 className="text-sm my-1 text-[#ffffffa1]">+254 701 707 772</h4>
          <h4 className="text-sm my-1 text-[#ffffffa1]"> TenderHive@gmail.com</h4>
        </div>
      </div>
    </div>
    <hr />
    <footer className="text-white">
      &copy;Copyright 2023, All Rights Reserved by  TenderHive
    </footer>
    </section>
  );
};

export default Footer;