import { useParams } from "react-router-dom";
import allData from "../../data/allData.json";
import GetmoreLayout from "./GetmoreLayout";

const GetmoreCity = () => {
  const { cityName } = useParams();

  const getmoreData = allData.destinations.cityDetails;
  const data = getmoreData.find((item) => item.id === cityName);

  if (!data) {
    return <div>Not Found</div>;
  }

  return (
    <GetmoreLayout
      backgroundImage={data.backgroundImage}
      eyebrow={data.title}
      heading={data.subtitle}
      content={data.content}
    />
  );
};

export default GetmoreCity;
