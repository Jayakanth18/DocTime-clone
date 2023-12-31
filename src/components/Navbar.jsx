import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleNavBtn = () => {
    setIsMobile((previousValue) => !previousValue);
  };
  return (
    <>
      <div>
        <nav
          className=" text-md mx-auto mt-1 hidden max-w-[1240px] items-center  justify-evenly p-2 font-poppin font-semibold text-gray-700 
        md:flex md:space-x-4"
        >
          <img src={logo} alt="logo" className="h-14 cursor-pointer" />
          <a href="#" className=" duration-100 ease-in-out hover:text-blue-500">
            Consulation
          </a>
          <a href="#" className=" duration-100 ease-in-out hover:text-blue-500">
            Health Plans
          </a>
          <a href="#" className=" duration-100 ease-in-out hover:text-blue-500">
            Order Medicine
          </a>
          <a href="#" className=" duration-100 ease-in-out hover:text-blue-500">
            Home Diagnostics
          </a>
          <a href="#" className=" duration-100 ease-in-out hover:text-blue-500">
            Employee & NGOs
          </a>
          <a href="#" className=" duration-100 ease-in-out hover:text-blue-500">
            For Doctors
          </a>
          <button className="ml-10 rounded-full bg-blue-500 px-4 py-1.5 text-white ease-in-out hover:bg-blue-600">
            Login
          </button>
        </nav>
        {/* mobile design */}
        <nav
          onClick={handleNavBtn}
          className="m-4 flex cursor-pointer items-center justify-between md:hidden"
        >
          <img src={logo} alt="logo" className="h-[38px] " />
          {isMobile ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </nav>
        <div
          onClick={handleNavBtn}
          className={
            isMobile
              ? "duration-30000 flex flex-col items-start p-3 font-poppin font-medium text-gray-500 ease-in-out"
              : "fixed top-[100%] "
          }
        >
          <a href="#" className="p-3 hover:text-blue-500">
            Consulation
          </a>
          <a href="#" className="p-3 hover:text-blue-500">
            Health Plans
          </a>
          <a href="#" className="p-3 hover:text-blue-500">
            Order Medicine
          </a>
          <a href="#" className="p-3 hover:text-blue-500">
            Home Diagnostics
          </a>
          <a href="#" className="p-3 hover:text-blue-500">
            Employee & NGOs
          </a>
          <a href="#" className="p-3 hover:text-blue-500">
            For Doctors
          </a>
          <button className="w-full border border-slate-100 bg-gray-50 p-4 font-poppin font-medium text-blue-500">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
