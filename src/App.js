import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CitiesInfo from "./pages/CitiesInfo";
import Experience from "./pages/Experience";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities/:cityname" element={<CitiesInfo />} />
        <Route path="/experience/:experienceName" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
