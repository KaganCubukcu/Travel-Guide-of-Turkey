import React from "react";
import { Navigate, useParams } from "react-router-dom";
import CitiesLanding from "../components/cities-info/CitiesLanding";
import Cities from "../components/cities-info/Cities";
import { cities } from "../data/cities";

const CitiesInfo = () => {
  const { cityname } = useParams();

  if (!cities.some((city) => city.name === cityname)) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-black">
      <CitiesLanding />
      <Cities />
    </div>
  );
};

export default CitiesInfo;
