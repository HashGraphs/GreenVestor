import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/images/LogoTenderSafi.svg";


const NavbarHome = (props) => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setShowMenu(!showMenu);
  };

  let activeLink =
    "self-center font-josefin text-secondary-color hover:opacity-80 w-[100%] min-w-[100px] text-base";
  let normalLink =
    "self-center font-josefin hover:text-secondary-color w-[100%] min-w-[100px] text-base";

 

  return (
    <div className="w-full py-10 shadow-md">
      <div className="flex justify-between items-center mx-2 sm:mx-16">
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        <div className="block sm:hidden">
          <i className="bx bx-menu bx-md text-black" onClick={toggleMenu}></i>
        </div>
        <div
          className="absolute top-0 sm:block p-5 sm:p-0 min-w-[200px] w-[100%]"
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <nav>
            <i className="bx bx-x bx-sm text-black" onClick={toggleMenu}></i>
            <ul className=" flex flex-col gap-4 sm:flex-row justify-around font-josefin text-base md:text-lg text-black w-auto ">
              <li>
                <NavLink
                  to={"/AvailableTenders"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Available Tenders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Tenders"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Post Tenders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/TenderAllocation"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                   Tender Allocation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/TenderStatus"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Application Status
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to={"/Tokens"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Buy Token
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="hidden sm:block">
          <nav>
            <ul className=" flex flex-col gap-6 sm:flex-row justify-around font-josefin text-base md:text-lg text-black w-auto">
              <li>
                <NavLink
                  to={"/AvailableTenders"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Available Tenders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/Tenders"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Post Tenders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/TenderAllocation"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Tender Allocation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/TenderStatus"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Application Status
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to={"/Tokens"}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Buy Token
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="hidden sm:block">
          <button
            className="rounded-full self-center font-josefin bg-secondary-color px-4 py-2"
            id=""
            onClick={() => navigate("/approve")}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;