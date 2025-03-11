/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "../CSS/VideoCard.css";

const VideoCard = ({ categories }) => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

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

  const click = async (num) => {
    await fetch(`${import.meta.env.VITE_API}/mqtt/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: num,
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));

  };

  return (
    <>
      <div className="video-card-grid">
        {categories.map((cat) => (
          <div key={cat._id} className="video-card">
            <video
              ref={(el) => (videoRefs.current[cat._id] = el)}
              src={cat.videoSrc}
              className="video-card__video"
              controls={false}
              muted
              data-id={cat._id}
            />
            <div className="video-card__content">
              <h3 className="video-card__title">{cat.title}</h3>
              <div className="video-card__buttons">
                <button
                  className="btn"
                  onClick={() => togglePlayPause(cat._id)}
                >
                  <div className="text-container">
                    <span className="text">
                      {playingVideoId === cat._id ? "Pause" : "Play"}
                    </span>
                    <span className="text">
                      {playingVideoId === cat._id ? "Pause" : "Play"}
                    </span>
                  </div>
                </button>
                <button
                  className="btn"
                  onClick={() => click(cat.clickEvent)}
                >
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
    </>
  );
};

export default VideoCard;
