/* eslint-disable react/prop-types */
import { useEffect } from "react";
import logo from "../assets/Images/S.png";
import "../CSS/Sidebar.css";
import { FaRobot } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("active", isOpen);

    return () => {
      document.body.classList.remove("active");
    };
  }, [isOpen]);
  return (
    <>
      <nav>
        <div className="sidebar-header">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" />
            <h2 className="hidden">Skyler</h2>
          </div>
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
