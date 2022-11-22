import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CitiesInfo from "./pages/CitiesInfo";
import Experience from "./pages/Experience";
import Footer from "./components/footer/Footer";
import GetmoreExpPage from "./pages/GetmoreExpPage";
import GetmoreCityPage from "./pages/GetmoreCityPage";
import Allcities from "./pages/Allcities";
import Allexperience from "./pages/Allexperience";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/All-cities" element={<Allcities />} />
        <Route path="/All-experiences" element={<Allexperience />} />
        <Route path="/cities/:cityname" element={<CitiesInfo />} />
        <Route path="/experience/:experienceName" element={<Experience />} />
        <Route
          path="/experience/getmore/:experienceName"
          element={<GetmoreExpPage />}
        />
        <Route path="/cities/getmore/:cityName" element={<GetmoreCityPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
