import { useRef, useState } from "react";
import "../CSS/VideoCard.css";

const VideoCard = ({
  // eslint-disable-next-line react/prop-types
  videoSrc,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  buttonLabel,
  // eslint-disable-next-line react/prop-types
  onButtonClick,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      console.log(videoRef);
      videoRef.current.pause();
    } else {
      console.log(videoRef);
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        src={videoSrc}
        className="video-card__video"
        controls={false}
        muted
      />
      <div className="video-card__content">
        <h3 className="video-card__title">{title}</h3>
        <div className="video-card__buttons">
          <button className="btn" onClick={togglePlayPause}>
            <div className="text-container">
              <span className="text">{isPlaying ? "Pause" : "Play"}</span>
              <span className="text">{isPlaying ? "Pause" : "Play"}</span>
            </div>
          </button>
          <button className="btn" onClick={onButtonClick}>
            <div className="text-container">
              <span className="text">{buttonLabel}</span>
              <span className="text">{buttonLabel}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
