import React, { useState, useEffect } from "react";
import turkeyLogo from "../../assets/turkiye-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollChange = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange);
    return () => {
      window.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <div
      className={`container sm:mx-auto md:px-6 lg:mx-auto h-16 text-white flex justify-between items-center sticky top-0 z-40  ${
        scrolled ? "border-b-2 border-white bg-[#252525] text-white" : ""
      }`}
    >
      <div className="flex gap-4 md:gap-10 ">
        <Link to="/All-cities" className="text-sm md:text-base">
          Cities
        </Link>
        <Link to="/All-experiences" className="text-sm md:text-base">
          Experiences
        </Link>
      </div>
      <Link to="/">
        <div className="cursor-pointer mr-[70px] md:mr-[150px] ">
          <img src={turkeyLogo} alt="turkey-logo" className={`h-8 md:h-12`} />
        </div>
      </Link>
      <div className="flex gap-4 md:gap-10 h-[56px] md:h-[76px] items-center content-end text-base md:text-xl">
        <div className="cursor-pointer" onClick={handleScroll}>
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Navbar;
