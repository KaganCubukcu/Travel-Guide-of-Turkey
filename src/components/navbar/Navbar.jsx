import turkeyLogo from "../../assets/turkiye-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container mx-auto h-16 text-white flex justify-between items-center ">
      <Link to="/">
        <div className="cursor-pointer">
          <img src={turkeyLogo} alt="turkey-logo" />
        </div>
      </Link>
      <div className="flex gap-10 h-[76px] items-center content-end text-xl">
        <Link to="/about">
          <div className="cursor-pointer">About us</div>
        </Link>
        <Link to="/contacts">
          <div className="cursor-pointer">Contacts</div>
        </Link>
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
