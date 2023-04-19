import { useParams } from "react-router-dom";
import getmoreCityJson from "../../getmoreCitiesData.json";

const GetmoreCity = () => {
  const getmoreData = getmoreCityJson.getmore.map((data) => {
    return data;
  });

  const { cityName } = useParams();
  const findID = (city) => {
    return city.id === cityName;
  };
  const data = getmoreData.find(findID);
  return (
    <div className="text-white">
      <div
        className="w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${data.background})`,
        }}
      ></div>
      <div className="w-full -mt-20 bg-gradient-to-r from-[#252525] flex flex-col">
        <div className="container mx-auto">
          <h1 className=" text-5xl pt-5">{data.h1}</h1>
          <h4 className=" text-2xl mt-5 mb-5">{data.h4}</h4>
        </div>
        <div className="container mx-auto pr-4 md:pr-96 pb-10">
          {data.categories.map((x, i) => {
            return (
              <p key={i} className="mt-3">
                {x.p}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetmoreCity;
