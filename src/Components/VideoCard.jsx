/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "../CSS/VideoCard.css";
import Words from "./Words";

const VideoCard = ({ categories }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const videoRefs = useRef({});

  const togglePlayPause = (id) => {
    const videoRef = videoRefs.current[id];
    if (playingVideoId === id) {
      videoRef.pause();
      setPlayingVideoId(null);
    } else {
      if (playingVideoId !== null) {
        const previousVideo = videoRefs.current[playingVideoId];
        if (previousVideo) {
          previousVideo.pause();
        }
      }
      videoRef.play();
      setPlayingVideoId(id);
    }
  };

  const click = (id) => {
    if (id === 14) {
      toggleModal();
    } else {
      alert(id);
    }
  };

  return (
    <>
      <div className="video-card-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="video-card">
            <video
              ref={(el) => (videoRefs.current[cat.id] = el)}
              src={cat.videoSrc}
              className="video-card__video"
              controls={false}
              muted
              data-id={cat.id}
            />
            <div className="video-card__content">
              <h3 className="video-card__title">{cat.title}</h3>
              <div className="video-card__buttons">
                <button className="btn" onClick={() => togglePlayPause(cat.id)}>
                  <div className="text-container">
                    <span className="text">
                      {playingVideoId === cat.id ? "Pause" : "Play"}
                    </span>
                    <span className="text">
                      {playingVideoId === cat.id ? "Pause" : "Play"}
                    </span>
                  </div>
                </button>
                <button className="btn" onClick={() => click(cat.id)}>
                  <div className="text-container">
                    <span className="text">{cat.btnName}</span>
                    <span className="text">{cat.btnName}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && <Words isOpen={isModalOpen} onClose={toggleModal} />}
    </>
  );
};

export default VideoCard;
