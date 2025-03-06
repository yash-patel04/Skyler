import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SplashScreen.css";
import logo from "../assets/Videos/Logo-2.mp4";

const SplashScreen = () => {
  const [isEntering, setIsEntering] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/auth");
    }, 1000);
  };

  return (
    <div
      className={`splash-screen ${isEntering ? "enter-animation" : ""} ${isExiting ? "exit-animation" : ""
        }`}
    >
      <video className="splash-video" autoPlay muted onEnded={handleVideoEnd}>
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
