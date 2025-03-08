import VideoCard from "./VideoCard";
import "../CSS/Actions.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Actions = () => {
  const [actions, setActions] = useState([]);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token == null) {
      navigate("/auth");
      return;
    }
    async function getActions() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}/get`);
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
    const interval = setInterval(() => {
      getActions();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="video-card-container">
      {actions.map((act) => (
        <div key={act._id} className="video-heading">
          <div className="category_name">{act.category_name}</div>
          <VideoCard key={act._id} categories={act.categories} />
        </div>
      ))}
    </div>
  );
};

export default Actions;
