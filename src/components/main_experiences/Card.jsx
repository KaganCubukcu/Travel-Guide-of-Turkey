import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import mainExperience from "./mainExp.json";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-3 grid grid-cols-5">
        {mainExperience.map((experience) => (
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
      <div className="grid  text-white justify-items-end items-center cursor-pointer mr-10">
        <Link to="/All-experiences">
          <p>More Experiences </p>
        </Link>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="w-6 h-6 cursor-pointer  ml-2"
        />
      </div>
    </div>
  );
};

export default Card;
