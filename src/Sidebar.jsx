import React, { useEffect } from "react";
import logo from "./assets/Images/S.png";
import "./Sidebar.css";
import { FaRobot } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { TbPhotoVideo } from "react-icons/tb";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  useEffect(() => {
    const sidebarBtn = document.querySelector(".toggle-btn");
    sidebarBtn.addEventListener("click", () => {
      document.body.classList.toggle("active");
    });

    return () => {
      sidebarBtn.removeEventListener("click", () => {
        document.body.classList.toggle("active");
      });
    };
  }, []);
  return (
    <>
      <nav>
        <div class="sidebar-header">
          <a class="logo-wrapper">
            <img src={logo} alt="Logo" />
            <h2 class="hidden">Skyler</h2>
          </a>
          <button class="toggle-btn">
            <RiArrowRightDoubleLine className="icons"/>
          </button>
        </div>

        <div class="sidebar-links">
          <Link to="/home" class="link active">
            <FiHome className="icons"/>
            <span class="hidden">Home</span>
          </Link>
          <Link to="/actions" class="link">
            <FaRobot className="icons"/>
            <span class="hidden">Actions</span>
          </Link>
          <Link to="/assets" class="link">
            <TbPhotoVideo className="icons"/>
            <span class="hidden">Images/Videos</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
