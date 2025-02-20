import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Connection from "./Connection";
import { TbPlugConnectedX } from "react-icons/tb";
import { FaSquare } from "react-icons/fa";
import { PiPlugsConnected } from "react-icons/pi";
import EmergencyStop from "./EmergencyStop";
import ScrollProgress from "./ScrollProgress";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [isEmModalOpen, setIsEmModalOpen] = useState(false);
  const [isConnect, setIsConnect] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(false);

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
        <div>
          <button className="connection" onClick={() => setIsConnect(true)}>
            {connectionStatus ? (
              <PiPlugsConnected className="l-connected l-btn-container" />
            ) : (
              <TbPlugConnectedX className="l-disconnected l-btn-container" />
            )}
          </button>
        </div>
        <div>
          <button className="em-stop" onClick={toggleEmModal}>
            <FaSquare className="l-btn-container stop" />
          </button>
        </div>
        {isConnect && (
          <Connection
            isOpen={isConnect}
            onClose={() => setIsConnect(false)}
            onConnectionChange={setConnectionStatus}
            connectionStatus={connectionStatus}
          />
        )}
        {isEmModalOpen && (
          <EmergencyStop isOpen={isEmModalOpen} onClose={toggleEmModal} />
        )}
      </div>
    </>
  );
};

export default Layout;
