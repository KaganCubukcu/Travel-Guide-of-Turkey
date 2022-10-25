import React from "react";
import mainExperience from "./mainExp.json";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-3 grid grid-cols-5">
        {mainExperience.map((exprience) => (
          <div
            key={exprience.id}
            className="w-[255px] h-[350px] mr-10 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center"
            style={{ backgroundImage: `url(${exprience.background})` }}
          >
            <p className="transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
              {exprience.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
