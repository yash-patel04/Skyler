import { useEffect, useState } from "react";
import logo from "./assets/Images/S.png";
import "./Sidebar.css";
import { FaRobot } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.body.classList.toggle("active", isActive);

    return () => {
      document.body.classList.remove("active");
    };
  }, [isActive]);
  return (
    <>
      <nav>
        <div className="sidebar-header">
          <a className="logo-wrapper">
            <img src={logo} alt="Logo" />
            <h2 className="hidden">Skyler</h2>
          </a>
          <button className="toggle-btn">
            <RiArrowRightDoubleLine className="icons" onClick={toggleSidebar} />
          </button>
        </div>

        <div className="sidebar-links">
          <Link to="/home" className="link">
            <FiHome className="icons" />
            <span className="hidden">Home</span>
          </Link>
          <Link to="/actions" className="link">
            <FaRobot className="icons" />
            <span className="hidden">Actions</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
