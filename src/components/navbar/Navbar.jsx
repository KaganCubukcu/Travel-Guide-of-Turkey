import React from "react";
import turkeyLogo from "../../assets/turkiye-logo 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="container mx-auto h-16 pt-5 text-white flex justify-between items-center ">
      <div className="cursor-pointer">
        <img src={turkeyLogo} alt="turkey-logo" />
      </div>
      <div className="flex gap-10 h-[76px] items-center content-end text-2xl">
        <div className="cursor-pointer">About us</div>
        <div className="cursor-pointer">Contacts</div>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-6 h-6 cursor-pointer"
        />
        <FontAwesomeIcon icon={faBars} className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
