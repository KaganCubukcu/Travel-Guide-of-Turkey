import React from "react";
import Navbar from "../navbar/Navbar";

const Landing = () => {
  return (
    <div className="bg-landing bg-cover  h-screen">
      <Navbar />
      <div className="flex justify-center pt-[215px] flex-col items-center">
        <h1 className="text-white text-9xl pt-[115px] font-bold">TÜRKİYE</h1>
        <h2 className="text-white text-6xl pt-5">
          The <span className="italic">new</span> dawn of journey
        </h2>
      </div>
    </div>
  );
};

export default Landing;
