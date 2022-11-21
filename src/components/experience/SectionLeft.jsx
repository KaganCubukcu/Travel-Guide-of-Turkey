import { Link } from "react-router-dom";

const SectionLeft = (props) => {
  return (
    <div
      key={props.id}
      className="bg-cover bg-center text-white sticky top-0"
      style={{
        backgroundImage: `url(${props.bg})`,
      }}
    >
      <div className="w-[654px] h-[1080px] flex flex-col justify-center pl-[120px] bg-gradient-to-r from-[#252525]">
        <h1 className="text-8xl">{props.name}</h1>
        <p className="mt-[30px] mb-[60px]">{props.p}</p>
        <Link to={`/experience/getmore/${props.name.replace(/\s/g, "")}`}>
          <button className="bg-main-bg flex justify-center items-center rounded-xl w-[100px] h-[40px] hover:bg-[#2a2a2a] ease-in-out duration-300 ">
            Get more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SectionLeft;
