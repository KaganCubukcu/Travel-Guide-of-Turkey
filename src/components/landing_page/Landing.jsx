import React from "react";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  return (
    <div className="bg-landing bg-cover h-screen pt-3">
      <Navbar />
      <div className="flex justify-center pt-[215px] flex-col items-center">
        <h1 className="text-white text-9xl pt-[115px] font-bold md:text-5xl">
          TÜRKİYE
        </h1>
        <h2 className="text-white  pt-5 md:text-2xl lg:text-6xl">
          The <span className="italic">new</span> dawn of journey
        </h2>
      </div>
    </div>
  );
};

export default Landing;
