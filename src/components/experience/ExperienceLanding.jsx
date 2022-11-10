import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { experiences } from "../../experienceData";
const ExperienceLanding = () => {
  const { experienceName } = useParams();

  return (
    <div className="text-white w-full h-[1080px]">
      {experiences.map(({ URL, name, id, p, slides }) =>
        URL === experienceName ? (
          <div key={id} className="flex container mx-auto pt-[60px] h-full">
            <div className="flex flex-col justify-center w-1/4">
              <h1 className="text-8xl">{name}</h1>
              <p className="pt-10">{p}</p>
            </div>
            <div className="flex justify-center items-center w-3/4 ml-[144px]">
              <Carousel
                showArrows={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
              >
                <div>
                  <img src={slides[0]} alt="" />
                </div>
                <div>
                  <img src={slides[1]} alt="" />
                </div>
                <div>
                  <img src={slides[2]} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ExperienceLanding;
