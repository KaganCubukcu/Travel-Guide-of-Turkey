import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { cities } from "../../citiesData";

const CitiesLanding = () => {
  const { cityname } = useParams();

  return (
    <div className="text-white w-full h-[1080px]">
      {cities.map(({ name, id, p, video }) =>
        name === cityname ? (
          <div
            key={id}
            className="flex container mx-auto pt-60 sm:flex-col
          lg:flex-row"
          >
            <div className="w-[654px] flex flex-col justify-center">
              <h1 className="text-8xl">{name}</h1>
              <p className="pt-10">{p}</p>
            </div>
            <div className="md:mx-auto lg:ml-[130px]">
              <ReactPlayer
                url={video}
                muted
                className=" md:w-[300px] lg:w-[1000px]
                "
                height={731}
              />
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CitiesLanding;
