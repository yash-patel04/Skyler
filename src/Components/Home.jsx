import { useEffect } from "react";
import About from "./About";
import Welcome from "./Welcome";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token == null) {
      navigate("/auth");
      return;
    }
  },[]);

  return (
    <>
      <Welcome />
      <About />
    </>
  );
};

export default HomeScreen;
