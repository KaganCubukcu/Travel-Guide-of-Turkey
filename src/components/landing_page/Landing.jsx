import React from "react";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  return (
    <div className="bg-landing bg-cover h-screen pt-3">
      <Navbar />
      <div className="flex justify-center pt-16 flex-col items-center h-screen">
        <h1 className="text-white text-4xl md:text-5xl lg:text-9xl font-bold text-center px-4">
          TÜRKİYE
        </h1>
        <h2 className="text-white pt-5 text-2xl md:text-3xl lg:text-6xl text-center">
          The <span className="italic">new</span> dawn of journey
        </h2>
      </div>
    </div>
  );
};

export default Landing;
