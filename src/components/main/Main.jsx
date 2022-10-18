import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div className="bg-black">
      <div className="pt-[116px] container mx-auto">
        <h3 className="text-7xl	text-white">Where to next?</h3>
        <p className="text-white pt-[45px] max-w-[852px]">
          The Maiden’s Tower, Cappadocia’s fairy chimneys, or Sumela Monastery?
          There are so many places to see in Türkiye! Traveling in these magical
          lands, you will wish your trip could go on forever!
        </p>
      </div>
      <div className="flex ">
        <Card />
      </div>
    </div>
  );
};

export default Main;
