import React from "react";
import mainCities from "./mainCities.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-3 grid grid-cols-5">
        {mainCities.map((cities) => (
          <div
            key={cities.id}
            className="w-[255px] h-[350px] mr-10 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center"
            style={{ backgroundImage: `url(${cities.background})` }}
          >
            <p className="transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
              {cities.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid  text-white justify-items-end items-center cursor-pointer">
        <p>More Cities </p>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="w-6 h-6 cursor-pointer  ml-2"
        />
      </div>
    </div>
  );
};

export default Card;
