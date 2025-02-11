/* eslint-disable react/prop-types */
import { useEffect } from "react";
import logo from "../assets/Images/S-2.png";
import "../CSS/Sidebar.css";
import { FaRobot } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { TbReportAnalytics } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
        {/* Logo-Header */}
        <div className="sidebar-header">
          <div className="logo-wrapper">
            <img src={logo} alt="Logo" />
            <h2 className="hidden">Skyler</h2>
          </div>
          <button className="toggle-btn">
            <RiArrowRightDoubleLine className="icons" onClick={toggleSidebar} />
          </button>
        </div>

        {/* Sidebar-Links */}
        <div className="sidebar-links">
          <Link
            to="/client/home"
            className="link"
            data-tooltip-id="tooltip-home"
          >
            <FiHome className="icons" />
            <span className="hidden">Home</span>
          </Link>
          <Link
            to="/client/actions"
            className="link"
            data-tooltip-id="tooltip-actions"
          >
            <FaRobot className="icons" />
            <span className="hidden">Actions</span>
          </Link>
          <Link
            to="/client/log&Report"
            className="link"
            data-tooltip-id="tooltip-log"
          >
            <TbReportAnalytics className="icons" />
            <span className="hidden">Log & Report</span>
          </Link>
        </div>

        {/* Tooltips */}
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-home']"
          content="Go to Home"
        />
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-actions']"
          content="View Actions"
        />
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-log']"
          content="View Logs & Reports"
        />

        {/* Copyright */}
        <div className="copyright">
          {!isOpen ? (
            <p>&copy; Skyler</p>
          ) : (
            <p> &copy; 2025 Skyler. All rights reserved.</p>
          )}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
