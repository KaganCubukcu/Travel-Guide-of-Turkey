import React from "react";
import allData from "../data/allData.json";
import Card from "../components/card/Card";

const Allexperience = () => {
  return (
    <div className="bg-black w-full h-full">
      <div className="container mx-auto pt-24">
        <Card
          items={allData.travelExperiences.categories}
          linkPrefix="/experience"
          gridCols="grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        />
      </div>
    </div>
  );
};

export default Allexperience;
