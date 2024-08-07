import React from "react";
import Navbar from "../navbar/Navbar";
import { Carousel } from "react-responsive-carousel";
const Landing = () => {
  const handleScroll = () => {
    const element = document.getElementById("main-section");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="h-screen relative">
      <img src="https://cdn.goturkiye.com/goturkiye/1920x1080-74.jpg" alt="landing1" className="absolute inset-0 object-cover w-full h-full z-0" />
      <Navbar />
      <div className="flex justify-center flex-col items-center h-screen z-10 absolute inset-0">
        <h1 className="text-white text-3xl md:text-4xl lg:text-8xl font-bold text-center px-4">
          TÜRKİYE
        </h1>
        <h2 className="text-white pt-5 text-xl md:text-2xl lg:text-5xl text-center">
          The <span className="italic">new</span> dawn of journey
        </h2>
        <div className="absolute bottom-10">
          <button
            className="rounded-full border border-white p-3 hover:bg-white hover:text-black text-white transition duration-300"
            onClick={handleScroll}
          >
            Scroll Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
