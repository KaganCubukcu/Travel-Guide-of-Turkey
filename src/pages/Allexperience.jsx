import React from "react";
import { Link } from "react-router-dom";
import experiences from "../components/main_experiences/mainExp.json";
import Navbar from "../components/navbar/Navbar";

const Allexperience = () => {
  return (
    <div className="bg-main-bg w-full h-[1080px] ">
      <Navbar />
      <div className="grid grid-cols-5 container mx-auto pt-10">
        {experiences.map((experience) => (
          <Link to={`/experience/${experience.name.replace(/\s/g, "")}`}>
            <div
              key={experience.id}
              className="w-[255px] h-[350px] mr-10 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center hover:opacity-100 ease-in-out duration-300 hover:scale-110"
              style={{ backgroundImage: `url(${experience.background})` }}
            >
              <p className="transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
                {experience.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Allexperience;
