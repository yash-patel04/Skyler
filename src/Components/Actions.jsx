import VideoCard from "./VideoCard";
import "../CSS/Actions.css";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Actions = () => {
  const [actions, setActions] = useState([]);

  // const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  useEffect(() => {
    // if (token == null) {
    //   navigate("/auth");
    //   return;
    // }
    async function getActions() {
      try {
        const response = await fetch(`http://localhost:4000/api/get`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setActions(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    }
    getActions();
  }, []);

  return (
    <div className="video-card-container">
      {actions.map((act) => (
        <div key={act.id} className="video-heading">
          <h2>{act.category_name}</h2>
          <VideoCard key={act.id} categories={act.categories} />
        </div>
      ))}
    </div>
  );
};

export default Actions;
