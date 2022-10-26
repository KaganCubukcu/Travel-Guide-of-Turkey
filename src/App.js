import Footer from "./components/footer/Footer";
import Landing from "./components/landing_page/Landing";
import Main from "./components/main_cities/Main";
import Experience from "./components/main_experiences/Experience";
import Gastro from "./components/main_gastro/Gastro";
import Region from "./components/main_region/Region";

function App() {
  return (
    <div>
      <Landing />
      <Main />
      <Experience />
      <Region />
      <Gastro />
      <Footer />
    </div>
  );
}

export default App;
