import React from "react";

const Card = () => {
  return (
    <div className="mt-[45px]">
      <div className="w-[255px] h-[350px] ml-10 bg-[url('/src/assets/cards/kusadasi.jpg')] bg-cover rounded-3xl cursor-pointer flex items-center">
        <p className="transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl ">
          Kuşadası
        </p>
      </div>
    </div>
  );
};

export default Card;
