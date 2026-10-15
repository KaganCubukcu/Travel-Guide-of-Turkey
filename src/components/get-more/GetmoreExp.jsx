import { useParams } from "react-router-dom";
import allData from "../../data/allData.json";
import GetmoreLayout from "./GetmoreLayout";

const GetmoreExp = () => {
  const { experienceName } = useParams();

  const getmoreData = allData.travelExperiences.details;
  const data = getmoreData.find((item) => item.id === experienceName);

  if (!data) {
    return <div>Not Found</div>;
  }

  return (
    <GetmoreLayout
      backgroundImage={data.backgroundImage}
      heading={data.title}
      tagline={data.subtitle}
      content={data.content}
    />
  );
};

export default GetmoreExp;
