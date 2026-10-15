import { Link } from "react-router-dom";

const ImageSection = ({ title, description, image, to, align = "left" }) => {
  const isRight = align === "right";

  return (
    <section
      className={`bg-cover bg-center text-white sticky top-0 min-h-screen flex ${
        isRight ? "justify-end" : ""
      }`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className={`w-full md:w-[654px] min-h-screen flex flex-col justify-center px-6 py-20 ${
          isRight
            ? "md:pl-10 md:pr-[120px] bg-gradient-to-l"
            : "md:pl-[120px] md:pr-10 bg-gradient-to-r"
        } from-black/85 via-black/50 to-transparent`}
      >
        <h2 className="text-4xl md:text-8xl">{title}</h2>
        <p className="mt-5 mb-10 md:mt-[30px] md:mb-[60px] text-lg leading-relaxed">
          {description}
        </p>
        <Link
          to={to}
          className="self-start px-6 h-10 flex items-center rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black ease-in-out duration-300"
        >
          Get more
        </Link>
      </div>
    </section>
  );
};

export default ImageSection;
