import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/SplashScreen.css";
import logo from "../assets/Videos/Logo-2.mp4";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        navigate("/auth");
      }, 1000); // Wait for exit animation to complete
    }, 10000); // Show video for 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  // const handleVideoEnd = () => {
  //   setIsVisible(false);
  //   setTimeout(() => {
  //     navigate("/auth");
  //   }, 1000);
  // };

  return (
    <div className={`splash-screen ${isVisible ? "enter-animation" : "exit-animation"}`}>
      <video className="splash-video" autoPlay muted 
      // onEnded={handleVideoEnd}
      >
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
