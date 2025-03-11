import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { GiVintageRobot } from "react-icons/gi";
import ScrollProgress from "./ScrollProgress";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);

  const setInitial = async () => {
    await fetch(`${import.meta.env.VITE_API}/mqtt/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "1",
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
        <div>
          <button className="initial" onClick={setInitial}>
            <GiVintageRobot className="l-btn-container set-initial" data-tooltip-id="tooltip-initial" />
          </button>
        </div>

        {/* Tooltips */}
        <Tooltip
          anchorSelect="[data-tooltip-id='tooltip-initial']"
          content="Set Initial"
        />

      </div>
    </>
  );
};

export default Layout;
