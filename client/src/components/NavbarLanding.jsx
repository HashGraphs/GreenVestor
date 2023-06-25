import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/hederasvg.svg";

const NavbarLanding = () => {
  const [showMenu, setShowMenu] = useState(false);

  // handle toggle menu
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section className="text-white">
      <nav className="flex justify-between md:justify-around items-center px-3 pt-3 ">
        <div className="flex items-center">
          <img className="w-10"  src={logo} alt="tender-hedera-logo" />
          <h3 className="font-bold text-xl ml-2">TenderHive</h3>
        </div>

        {/* desktop menu */}
        <ul className="hidden md:flex">
          <li className="mx-8 list-none">Home</li>
          <li className="mx-8 list-none">Features</li>
          <li className="mx-8 list-none">Contact Us</li>
        </ul>

        <Link to="/AvailableTenders">
          <button className="hidden md:block rounded-sm border bg-[#252E4D] border-none px-10 py-3 my-2">
            Get Started
          </button>
        </Link>

        {showMenu ? (
          <i
            className="block md:hidden bx bx-x bx-md"
            onClick={handleToggle}
          ></i>
        ) : (
          <i
            className="block md:hidden bx bx-menu bx-md"
            onClick={handleToggle}
          ></i>
        )}
      </nav>
      {/* Mobile Menu */}
      {showMenu ? (
        <ul className="absolute flex flex-col md:hidden h-screen w-screen bg-[#12141D] ">
          <li className="m-3 list-none">Home</li>
          <li className="m-3 list-none">Features</li>
          <li className="m-3 list-none">Contact Us</li>
        </ul>
      ) : null}
    </section>
  );
};

export default NavbarLanding;