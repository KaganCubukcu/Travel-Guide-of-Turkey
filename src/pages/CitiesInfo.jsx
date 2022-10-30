import React from "react";
import CitiesLanding from "../components/cities_info/CitiesLanding";
import Cities from "../components/cities_info/Cities";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const CitiesInfo = () => {
  return (
    <div className="bg-main-bg pt-3 ">
      <Navbar />
      <CitiesLanding />
      <Cities />
      <Footer />
    </div>
  );
};

export default CitiesInfo;
