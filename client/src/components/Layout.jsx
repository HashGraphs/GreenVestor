// import React from 'react'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { useStateContext } from "../contexts/ContextProvider";
 import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const Layout = ({ children }) => {
  const { activeMenu } = useStateContext();

  return (
    <>
      <div className="flex relative">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          ></TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar  bg-primary-color ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 ">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "  bg-gray-100 min-h-screen md:ml-72 w-full  "
              : "bg-main-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg  navbar w-full ">
            <Navbar />
          </div>
          <div >{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;