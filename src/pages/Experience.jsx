import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ExperienceLanding from "../components/experience/ExperienceLanding";
import Experiences from "../components/experience/Experiences";
import { experiences } from "../data/experiences";

const Experience = () => {
  const { experienceName } = useParams();

  if (!experiences.some((experience) => experience.URL === experienceName)) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-black">
      <ExperienceLanding />
      <Experiences />
    </div>
  );
};

export default Experience;
