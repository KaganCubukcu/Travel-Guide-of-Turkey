import Card from "./Card";

const Gastro = () => {
  return (
    <div className="bg-main-bg">
      <div className="pt-[116px] container mx-auto ">
        <h3 className="text-6xl	text-white">
          A wonderland <br />
          of tastes
        </h3>
        <p className="text-white pt-[45px] max-w-[852px]">
          Türkiye is home to the freshest and tastiest fruits and vegetables
          since it enjoys a temperate climate with all four seasons. The food
          here is mind-blowing! It is a true culinary paradise!
        </p>
        <div className="flex">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Gastro;
