import React from "react";
import turkeyLogo from "../../assets/turkiye-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container sm:mx-auto md:px-6 lg:mx-auto h-16 text-white flex justify-between items-center absolute inset-0 z-40">
      <div className="flex gap-4 md:gap-10">
        <Link to="/All-cities" className="text-sm md:text-base">
          Cities
        </Link>
        <Link to="/All-experiences" className="text-sm md:text-base">
          Experiences
        </Link>
      </div>
      <Link to="/">
        <div className="cursor-pointer w-40">
          <img src={turkeyLogo} alt="turkey-logo" className={`h-8 md:h-12`} />
        </div>
      </Link>
      <div className="flex gap-4 md:gap-10 items-center content-end text-base md:text-xl">
        <div className="cursor-pointer" onClick={handleScroll}>
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Navbar;
