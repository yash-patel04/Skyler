import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { TbPlugConnectedX } from "react-icons/tb";
import { FaSquare } from "react-icons/fa";
import { PiPlugsConnected } from "react-icons/pi";
import EmergencyStop from "./EmergencyStop";
import ScrollProgress from "./ScrollProgress";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [isEmModalOpen, setIsEmModalOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(false);

  useEffect(() => {
    async function getConnection() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}/mqtt/connected`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConnectionStatus(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    }
    getConnection();
  });

  const toggleEmModal = () => {
    setIsEmModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="layout">
        <div>
          <Sidebar isOpen={isActive} setIsOpen={setIsActive} />
        </div>
        <ScrollProgress />
        <div className={`${isActive === true ? "open" : "close"}`}>
          <Outlet />
        </div>
        <div className="connection">
          {connectionStatus.message === 1 ? (
            <PiPlugsConnected className="l-connected l-btn-container" />
          ) : (
            <TbPlugConnectedX className="l-disconnected l-btn-container" />
          )}
        </div>
        <div>
          <button className="em-stop" onClick={toggleEmModal}>
            <FaSquare className="l-btn-container stop" />
          </button>
        </div>
        {isEmModalOpen && (
          <EmergencyStop isOpen={isEmModalOpen} onClose={toggleEmModal} />
        )}
      </div>
    </>
  );
};

export default Layout;
