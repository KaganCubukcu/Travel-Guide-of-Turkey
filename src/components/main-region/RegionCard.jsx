import React from "react";
import Card from "../card/Card";
import allData from "../../data/allData.json";

const RegionCard = () => {
  return (
    <>
      <Card
        items={allData.destinations.regions.slice(0, 4)}
        linkPrefix="/regions"
        gridCols="grid-cols-4"
      />
      <Card
        items={allData.destinations.regions.slice(-3)}
        linkPrefix="/regions"
        gridCols="flex items-center justify-evenly"
      />
    </>
  );
};

export default RegionCard;
