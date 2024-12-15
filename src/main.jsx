import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Home from "./Home";
import Layout from "./Layout";
import Actions from "./Actions";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/actions" element={<Actions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
