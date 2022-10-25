import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="bg-black">
      {/* Rengi Değişecek */}
      <div className="pt-[116px] container mx-auto ">
        <h3 className="text-6xl	text-white">Türkiye experiences</h3>
        <p className="text-white pt-[45px] max-w-[852px]">
          Türkiye is home to infinite locations that are beyond your wildest
          dreams! Full of ancient sites, unique beauty, and unparalleled
          destinations, visiting Türkiye is an unforgettable experience.
        </p>
        <div className="flex">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Experience;
