/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../CSS/VideoCard.css";
import { Link } from "react-router-dom";

const VideoCard = ({ categories }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown toggle

  const togglePlayPause = (id, videoRef) => {
    if (playingVideoId === id) {
      videoRef.current.pause();
      setPlayingVideoId(null);
    } else {
      if (playingVideoId !== null) {
        const previousVideo = document.querySelector(
          `[data-id="${playingVideoId}"]`
        );
        if (previousVideo) {
          previousVideo.pause();
        }
      }
      videoRef.current.play();
      setPlayingVideoId(id);
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="video-card-grid">
      {categories.map((cat) => {
        const videoRef = React.createRef(); // Using useRef for video elements

        return (
          <div key={cat.id} className="video-card">
            <video
              ref={videoRef}
              src={cat.videoSrc}
              className="video-card__video"
              controls={false}
              muted
              data-id={cat.id}
            />
            <div className="video-card__content">
              <h3 className="video-card__title">{cat.title}</h3>
              <div className="video-card__buttons">
                <button
                  className="btn"
                  onClick={() => togglePlayPause(cat.id, videoRef)}
                >
                  <div className="text-container">
                    <span className="text">
                      {playingVideoId === cat.id ? "Pause" : "Play"}
                    </span>
                    <span className="text">
                      {playingVideoId === cat.id ? "Pause" : "Play"}
                    </span>
                  </div>
                </button>
                {/* Dropdown Menu */}
                {cat.id === 14 ? (
                  <div id="dropdown" className="dropdown">
                    <button
                      className={`dropdown-toggle ${
                        dropdownOpen ? "open" : ""
                      }`}
                      onClick={handleDropdownToggle}
                    >
                      <span>Word</span>
                      <i className="fa-solid fa-caret-down"></i>
                    </button>

                    <ul className={`menu ${dropdownOpen ? "open" : ""}`}>
                      {cat.words.map((w) => (
                        <li className="menu-item" key={w.id}>
                          <Link to={w.clickEvent}>{w.word}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <button className="btn" onClick={cat.clickEvent}>
                    <div className="text-container">
                      <span className="text">Click Here</span>
                      <span className="text">Click Here</span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCard;
