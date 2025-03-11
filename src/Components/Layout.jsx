import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { TbPlugConnectedX } from "react-icons/tb";
// import { FaSquare } from "react-icons/fa";
import { PiPlugsConnected } from "react-icons/pi";
import { GiVintageRobot } from "react-icons/gi";
// import EmergencyStop from "./EmergencyStop";
import ScrollProgress from "./ScrollProgress";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import env from "../env";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  // const [isEmModalOpen, setIsEmModalOpen] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState(false);

  useEffect(() => {
    async function getConnection() {
      try {
        // Check MQTT connection status
        const response = await fetch(
          `${process.env.MQTT_API}/mqtt/connected`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setConnectionStatus(data.message === "1"); // Set boolean based on message
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setConnectionStatus(false); // Fallback to false on error
      }
    }
    getConnection(); // Initial call
    const intervalId = setInterval(getConnection, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId); // Cleanup;

  }, []);

  // const toggleEmModal = () => {
  //   setIsEmModalOpen((prev) => !prev);
  // };

  const setInitial = async () => {
    await fetch(`${import.meta.env.VITE_API}/mqtt/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "2",
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));
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
          {connectionStatus ? (
            <PiPlugsConnected className="l-connected l-btn-container" data-tooltip-id="tooltip-connected"/>
          ) : (
            <TbPlugConnectedX className="l-disconnected l-btn-container" data-tooltip-id="tooltip-disconnected" />
          )}
        </div>
        <div>
          <button className="initial" onClick={setInitial}>
            <GiVintageRobot className="l-btn-container set-initial" data-tooltip-id="tooltip-initial" />
          </button>
        </div>

        {/* Tooltips */}
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-disconnected']"
          content="Disconnected"
        />
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-connected']"
          content="Connected"
        />
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-initial']"
          content="Set Initial"
        />

        {/* {isEmModalOpen && (
          <EmergencyStop isOpen={isEmModalOpen} onClose={toggleEmModal} />
        )} */}
      </div>
    </>
  );
};

export default Layout;
