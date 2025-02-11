import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Connection from "./Connection";
import { TbPlugConnectedX } from "react-icons/tb";
import { FaSquare } from "react-icons/fa";
import EmergencyStop from "./EmergencyStop";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEmModalOpen, setIsEmModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleEmModal = () => {
    setIsEmModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="layout">
        <div>
          <Sidebar isOpen={isActive} setIsOpen={setIsActive} />
        </div>
        <div className={`${isActive === true ? "open" : "close"}`}>
          <Outlet />
        </div>
        <div>
          <button className="connection" onClick={toggleModal}>
            <TbPlugConnectedX className="connect" />
          </button>
        </div>
        <div>
          <button className="em-stop" onClick={toggleEmModal}>
            <FaSquare className="stop" />
          </button>
        </div>
        {isModalOpen && (
          <Connection isOpen={isModalOpen} onClose={toggleModal} />
        )}
        {isEmModalOpen && (
          <EmergencyStop isOpen={isEmModalOpen} onClose={toggleEmModal} />
        )}
      </div>
    </>
  );
};

export default Layout;
