import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import SplashScreen from "./SplashScreen";
import Home from "./Home";
import Actions from "./Actions";
import Auth from "./Auth";

const GlobalBehavior= () => {
  useEffect(() => {
    // Disable text selection globally
    document.body.style.userSelect = "none";

    // Prevent copying
    const handleCopy = (event) => {
      event.preventDefault();
      alert("Copying is not allowed on this website.");
    };

    // Add event listener
    document.addEventListener("copy", handleCopy);

    // Cleanup function
    return () => {
      document.body.style.userSelect = ""; // Reset text selection
      document.removeEventListener("copy", handleCopy);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/client" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="actions" element={<Actions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default GlobalBehavior;
