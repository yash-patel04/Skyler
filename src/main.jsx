import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import Actions from "./Actions";
import Assets from "./Assets";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/actions" element={<Actions/>}/>
          <Route path="/assets" element={<Assets/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
