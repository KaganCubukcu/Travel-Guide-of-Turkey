import gastros from "./gastros.json";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-5 grid grid-cols-4">
        {gastros.map((gastro) => (
          <div
            key={gastro.id}
            className="w-[350px] h-[460px] mr-10 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center"
            style={{ backgroundImage: `url(${gastro.background})` }}
          >
            <p className="transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
              {gastro.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;