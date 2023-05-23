import React from "react";
import CitiesLanding from "../components/cities_info/CitiesLanding";
import Cities from "../components/cities_info/Cities";
import Navbar from "../components/navbar/Navbar";
const CitiesInfo = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <CitiesLanding />
      <Cities />
    </div>
  );
};

export default CitiesInfo;
