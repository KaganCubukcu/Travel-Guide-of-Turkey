import { useParams } from "react-router-dom";
import { experiences } from "../../data/experiences";
import ImageSection from "../section/ImageSection";

const Experiences = () => {
  const { experienceName } = useParams();
  const data = experiences.find(({ URL }) => URL === experienceName);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.categories.map(({ name, bg, p }) => (
        <ImageSection
          key={name}
          title={name}
          description={p}
          image={bg}
          to={`/experience/getmore/${name.replace(/\s/g, "")}`}
        />
      ))}
    </>
  );
};

export default Experiences;
