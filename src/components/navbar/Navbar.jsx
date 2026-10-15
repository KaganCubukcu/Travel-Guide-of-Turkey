import React, { useState } from "react";
import turkeyLogo from "../../assets/turkiye-logo.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  src={turkeyLogo}
                  alt="turkey-logo"
                  className={`h-8 md:h-12`}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/All-cities"
                className="border-transparent text-gray-300 hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Cities
              </Link>
              <Link
                to="/All-experiences"
                className="border-transparent text-gray-300 hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Experiences
              </Link>
              <button
                onClick={handleScroll}
                className="border-transparent text-gray-300 hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contacts
              </button>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/All-cities"
              className="border-transparent text-gray-300 hover:bg-white/10 hover:border-white hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Cities
            </Link>
            <Link
              to="/All-experiences"
              className="border-transparent text-gray-300 hover:bg-white/10 hover:border-white hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Experiences
            </Link>
            <button
              onClick={handleScroll}
              className="border-transparent text-gray-300 hover:bg-white/10 hover:border-white hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left"
            >
              Contacts
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
