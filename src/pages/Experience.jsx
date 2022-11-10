import React from "react";
import ExperienceLanding from "../components/experience/ExperienceLanding";
import Experiences from "../components/experience/Experiences";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Experience = () => {
  return (
    <div className="bg-main-bg pt-3 ">
      <Navbar />
      <ExperienceLanding />
      <Experiences />
      <Footer />
    </div>
  );
};

export default Experience;
