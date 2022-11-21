import { Link, useParams } from "react-router-dom";
import { cities } from "../../citiesData";

const CitiesSee = () => {
  const { cityname } = useParams();

  return (
    <div>
      {/* see */}
      {cities.map((city) =>
        city.name === cityname ? (
          <>
            <div
              key={city.id}
              className="bg-cover bg-center text-white sticky top-0"
              style={{
                backgroundImage: `url(${city.catogories.see.bg})`,
              }}
            >
              <div className="w-[654px] h-[1080px] flex flex-col justify-center pl-[120px] bg-gradient-to-r from-[#252525]">
                <h1 className="text-8xl">See</h1>
                <p className="mt-[30px] mb-[60px]">{city.catogories.see.p}</p>
                <Link to={`/cities/getmore/see-${city.name}`}>
                  <button className="bg-main-bg flex justify-center items-center rounded-xl w-[100px] h-[40px] hover:bg-[#2a2a2a] ease-in-out duration-300 ">
                    Get more
                  </button>
                </Link>
              </div>
            </div>
            {/* Touch */}
            <div
              className=" bg-cover bg-center text-white flex justify-end sticky top-0"
              style={{
                backgroundImage: `url(${city.catogories.touch.bg})`,
              }}
            >
              <div className="w-[654px] h-[1080px] flex flex-col justify-center pr-[120px] bg-gradient-to-l from-[#252525]">
                <h1 className="text-8xl">Touch</h1>
                <p className="mt-[30px] mb-[60px]">{city.catogories.touch.p}</p>
                <Link to={`/cities/getmore/touch-${city.name}`}>
                  <button className="bg-main-bg flex justify-center items-center rounded-xl w-[100px] h-[40px] hover:bg-[#2a2a2a] ease-in-out duration-300 ">
                    Get more
                  </button>
                </Link>
              </div>
            </div>
            {/* Taste */}
            <div
              className="bg-cover bg-center text-white sticky top-0 "
              style={{
                backgroundImage: `url(${city.catogories.taste.bg})`,
              }}
            >
              <div className="w-[654px] h-[1080px] flex flex-col justify-center pl-[120px] bg-gradient-to-r from-[#252525]">
                <h1 className="text-8xl">Taste</h1>
                <p className="mt-[30px] mb-[60px]">{city.catogories.taste.p}</p>
                <Link to={`/cities/getmore/taste-${city.name}`}>
                  <button className="bg-main-bg flex justify-center items-center rounded-xl w-[100px] h-[40px] hover:bg-[#2a2a2a] ease-in-out duration-300 ">
                    Get more
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : null
      )}
    </div>
  );
};

export default CitiesSee;
