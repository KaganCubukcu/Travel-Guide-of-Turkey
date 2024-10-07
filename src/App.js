import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import CitiesInfo from "./pages/CitiesInfo";
import Experience from "./pages/Experience";
import GetmoreExpPage from "./pages/GetmoreExpPage";
import GetmoreCityPage from "./pages/GetmoreCityPage";
import Allcities from "./pages/Allcities";
import Allexperience from "./pages/Allexperience";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/All-cities", element: <Allcities /> },
  { path: "/All-experiences", element: <Allexperience /> },
  { path: "/cities/:cityname", element: <CitiesInfo /> },
  { path: "/experience/:experienceName", element: <Experience /> },
  { path: "/experience/getmore/:experienceName", element: <GetmoreExpPage /> },
  { path: "/cities/getmore/:cityName", element: <GetmoreCityPage /> },
  { path: "/404", element: <NotFound /> },
  { path: "*", element: <Navigate to="/404" replace /> },
];

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
