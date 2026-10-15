import { useParams } from "react-router-dom";
import { experiences } from "../../data/experiences";
import Slider from "./Slider";

const ExperienceLanding = () => {
  const { experienceName } = useParams();
  const experience = experiences.find(({ URL }) => URL === experienceName);

  if (!experience) {
    return null;
  }

  const { name, p, slides } = experience;

  return (
    <div className="text-white w-full">
      <div className="flex flex-col container mx-auto px-4 pt-28 pb-16 gap-10 lg:flex-row lg:items-center lg:min-h-screen lg:pt-16">
        <div className="flex flex-col justify-center w-full lg:w-5/12">
          <h1 className="text-5xl lg:text-7xl font-bold">{name}</h1>
          <p className="pt-8 text-lg leading-relaxed text-gray-300">{p}</p>
        </div>
        <div className="w-full lg:w-7/12">
          <Slider images={slides} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceLanding;
