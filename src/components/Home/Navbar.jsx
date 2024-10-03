// components/Navbar.js
import React from "react";
import logo from "../../assets/tth_logo-removebg.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-center md:justify-between px-4 w-full h-[clamp(56px,y5.6vw,86px)]">
      <div className="hidden md:flex ">
        <img src={logo} className="w-36 h-28" alt="" />
      </div>
      <button className="px-8 min-w-[168px] rounded h-[38px] md:flex hidden  items-center justify-center bg-transparent border border-white text-white md:hover:bg-white md:hover:text-black active:bg-white active:text-black duration-75 transform scale-[1] active:scale-[0.95]">
        <p className="font-bold uppercase text-sm-lt font-primary">
          Get started
        </p>
      </button>
    </nav>
  );
}

export default Navbar;
