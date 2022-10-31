import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CitiesInfo from "./pages/CitiesInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities/:cityname" element={<CitiesInfo />} />
      </Routes>
    </>
  );
}

export default App;
