import React from "react";
import "./SplashScreen.css";
import logo from "./assets/Videos/Logo.mp4";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/home");
  };
  return (
    <div className="splash-screen">
      <video className="splash-video" autoPlay muted onEnded={handleVideoEnd}>
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
