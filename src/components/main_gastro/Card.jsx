import { Link } from "react-router-dom";
import gastros from "./gastros.json";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {gastros.map((gastro) => (
          <Link to={`/experience/getmore/${gastro.name.replace(/\s/g, "")}`}>
            <div
              key={gastro.id}
              className="w-[200px] h-[280px] lg:w-[220px] h-[310px] mr-5 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center hover:opacity-100 ease-in-out duration-300 hover:scale-110"
              style={{ backgroundImage: `url(${gastro.background})` }}
            >
              <p className="transform w-[184px] h-[184px] -rotate-90 text-white font-bold text-2xl">
                {gastro.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
