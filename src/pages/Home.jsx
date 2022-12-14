import Landing from "../components/landing_page/Landing";
import Main from "../components/main_cities/Main";
import Experience from "../components/main_experiences/Experience";
import Gastro from "../components/main_gastro/Gastro";

const Home = () => {
  return (
    <>
      <Landing />
      <Main />
      <Experience />
      <Gastro />
    </>
  );
};

export default Home;
