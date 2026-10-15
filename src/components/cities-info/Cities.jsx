import { useParams } from "react-router-dom";
import { cities } from "../../data/cities";
import ImageSection from "../section/ImageSection";

const SECTIONS = [
  { key: "see", title: "See", align: "left" },
  { key: "touch", title: "Touch", align: "right" },
  { key: "taste", title: "Taste", align: "left" },
];

const Cities = () => {
  const { cityname } = useParams();
  const city = cities.find(({ name }) => name === cityname);

  if (!city) {
    return null;
  }

  return (
    <div>
      {SECTIONS.map(({ key, title, align }) => (
        <ImageSection
          key={key}
          title={title}
          description={city.categories[key].description}
          image={city.categories[key].backgroundImage}
          to={`/cities/getmore/${key}-${city.name}`}
          align={align}
        />
      ))}
    </div>
  );
};

export default Cities;
