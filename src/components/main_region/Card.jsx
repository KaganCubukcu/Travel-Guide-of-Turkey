import regions from "./regions.json";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-3 grid grid-cols-4">
        {regions.slice(0, 4).map((region) => (
          <div
            key={region.id}
            className="w-[350px] h-[233px] mr-10 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center hover:opacity-100 ease-in-out duration-300 hover:scale-110"
            style={{ backgroundImage: `url(${region.background})` }}
          >
            <p className="mb-5 transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
              {region.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-evenly">
        {regions.slice(-3).map((region) => (
          <div
            key={region.id}
            className="w-[350px] h-[233px] mr-10 my-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center hover:opacity-100 ease-in-out duration-300 hover:scale-110"
            style={{ backgroundImage: `url(${region.background})` }}
          >
            <p className="mb-5 transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
              {region.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
