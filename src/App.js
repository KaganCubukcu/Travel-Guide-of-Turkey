import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CitiesInfo from "./pages/CitiesInfo";
import Experience from "./pages/Experience";
import Footer from "./components/footer/Footer";
import Getmorepage from "./pages/Getmorepage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities/:cityname" element={<CitiesInfo />} />
        <Route path="/experience/:experienceName" element={<Experience />} />
        <Route
          path="/experience/getmore/:experienceName"
          element={<Getmorepage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
