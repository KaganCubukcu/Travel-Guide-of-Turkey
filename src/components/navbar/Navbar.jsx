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
    <div className="container mx-auto h-16 text-white flex justify-between items-center sticky top-2 z-40 ">
      <div className="flex gap-10">
        <Link to="/All-cities">Cities</Link>
        <Link to="/All-experiences">Experiences</Link>
      </div>

      <Link to="/">
        <div className="cursor-pointer mr-[150px] ">
          <img src={turkeyLogo} alt="turkey-logo" />
        </div>
      </Link>
      <div className="flex gap-10 h-[76px] items-center content-end text-xl">
        <div className="cursor-pointer" onClick={handleScroll}>
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Navbar;
