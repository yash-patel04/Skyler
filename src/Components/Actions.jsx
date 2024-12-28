import VideoCard from "./VideoCard";
import "../CSS/Actions.css";
import video from "../assets/Videos/video.mp4";

const Actions = () => {
  const handleCustomButtonClick = (button) => {
    alert(`Clicked on ${button}`);
  };

  const gestureAndGreetings = [
    {
      id: 1,
      videoSrc: video,
      title: "Say Hello",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 2,
      videoSrc: video,
      title: "Shake Hand",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 3,
      videoSrc: video,
      title: "Bow",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 4,
      videoSrc: video,
      title: "Speak",
      // onButtonClick: handleCustomButtonClick,
    },
  ];
  const armAndHandMovements = [
    {
      id: 1,
      videoSrc: video,
      title: "Left Hand Up",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 2,
      videoSrc: video,
      title: "Left Hand Down",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 3,
      videoSrc: video,
      title: "Right Hand Up",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 4,
      videoSrc: video,
      title: "Right Hand Up",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 5,
      videoSrc: video,
      title: "Both Hands Up",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 6,
      videoSrc: video,
      title: "Both Hands Down",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 7,
      videoSrc: video,
      title: "Pickup Things",
      // onButtonClick: handleCustomButtonClick,
    },
  ];
  const bodyAndPostureMovements = [
    {
      id: 1,
      videoSrc: video,
      title: "Sit Up",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 2,
      videoSrc: video,
      title: "Sit Down",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 3,
      videoSrc: video,
      title: "Turn Right",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 4,
      videoSrc: video,
      title: "Turn Left",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 5,
      videoSrc: video,
      title: "Move Forward",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 6,
      videoSrc: video,
      title: "Move Backward",
      // onButtonClick: handleCustomButtonClick,
    },
  ];
  const expressiveMovements = [
    {
      id: 1,
      videoSrc: video,
      title: "Right Biceps",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 2,
      videoSrc: video,
      title: "Left Biceps",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 3,
      videoSrc: video,
      title: "Double Biceps",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 4,
      videoSrc: video,
      title: "Dab",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 5,
      videoSrc: video,
      title: "Ape Move",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 6,
      videoSrc: video,
      title: "Mean Karate",
      // onButtonClick: handleCustomButtonClick,
    },
  ];
  const fitnessAndExerciseMovements = [
    {
      id: 1,
      videoSrc: video,
      title: "Exercise",
      // onButtonClick: handleCustomButtonClick,
    },
    {
      id: 2,
      videoSrc: video,
      title: "Side Band",
      // onButtonClick: handleCustomButtonClick,
    },
  ];

  return (
    <div className="video-card-container">
      <div className="gestures-greetings">
        <h2>Gestures and Greetings</h2>
        <div className="video-card-grid">
          {gestureAndGreetings.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              buttonLabel="Click to move"
              onButtonClick={() => handleCustomButtonClick(video.id)}
            />
          ))}
        </div>
      </div>
      <div className="arm-hand-movements">
        <h2>Arm and Hand Movements</h2>
        <div className="video-card-grid">
          {armAndHandMovements.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              buttonLabel="Click to move"
              onButtonClick={() => handleCustomButtonClick(video.id)}
            />
          ))}
        </div>
      </div>
      <div className="body-posture-movements">
        <h2>Body and Posture Movements</h2>
        <div className="video-card-grid">
          {bodyAndPostureMovements.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              buttonLabel="Click to move"
              onButtonClick={() => handleCustomButtonClick(video.id)}
            />
          ))}
        </div>
      </div>
      <div className="expressive-movements">
        <h2>Expressive Movements</h2>
        <div className="video-card-grid">
          {expressiveMovements.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              buttonLabel="Click to move"
              onButtonClick={() => handleCustomButtonClick(video.id)}
            />
          ))}
        </div>
      </div>
      <div className="fitness-exercise-movements">
        <h2>Fitness and Exercise Movements</h2>
        <div className="video-card-grid">
          {fitnessAndExerciseMovements.map((video) => (
            <VideoCard
              key={video.id}
              videoSrc={video.videoSrc}
              title={video.title}
              buttonLabel="Click to move"
              onButtonClick={() => handleCustomButtonClick(video.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actions;
