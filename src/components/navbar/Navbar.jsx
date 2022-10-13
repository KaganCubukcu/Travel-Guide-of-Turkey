import React from "react";
import turkeyLogo from "../../assets/turkiye-logo 1.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto bg-red-500 h-16 text-white flex justify-between items-center">
      <div className="mt-2">
        <img src={turkeyLogo} alt="turkey-logo" />
      </div>
      <div className="flex">
        <div>About us</div>
        <div>Contacts</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
