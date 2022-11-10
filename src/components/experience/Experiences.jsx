import { useParams } from "react-router-dom";
import { experiences } from "../../experienceData";
import SectionLeft from "./SectionLeft";

const Experiences = () => {
  const { experienceName } = useParams();

  const findURL = (exp) => {
    return exp.URL === experienceName;
  };

  const data = experiences.find(findURL);

  return (
    <>
      {data.categories.map((x, i) => {
        console.log(x.name);
        return <SectionLeft key={data.id} name={x.name} bg={x.bg} p={x.p} />;
      })}
    </>
  );
};

export default Experiences;
