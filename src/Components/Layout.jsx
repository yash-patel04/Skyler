// import MainScreen from "./MainScreen";
import Sidebar from "./Sidebar";
import "../CSS/Layout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="layout">
        <div>
          <Sidebar isOpen={isActive} setIsOpen={setIsActive} />
        </div>
        <div className={`${isActive === true ? "open" : "close"}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
