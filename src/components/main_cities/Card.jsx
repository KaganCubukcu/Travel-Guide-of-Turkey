import mainCities from "./mainCities.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="my-[45px]">
      <div className="gap-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {mainCities.map((cities) => (
          <Link to={`/cities/${cities.name}`}>
            <div
              key={cities.id}
              className="w-[255px] h-[350px] mr-10 mb-5 bg-cover bg-center rounded-3xl cursor-pointer flex items-center hover:opacity-100 ease-in-out duration-300 hover:scale-110"
              style={{
                backgroundImage: `url(${cities.background})`,
              }}
            >
              <p className="transform w-[239px] h-[239px] -rotate-90 text-white font-bold text-3xl">
                {cities.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="grid  text-white justify-items-end items-center cursor-pointer mr-10">
        <Link to="/All-cities">
          <p>More Cities </p>
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
