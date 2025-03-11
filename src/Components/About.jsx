import "../CSS/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          <b className="name">Skyler</b> is MERN Stack-based web application serves as a centralized control interface for a robot, enabling real-time command execution. The system follows a structured communication flow where the web app sends commands to Node.js, which forwards them to HiveMQTT, then to NodeMCU, and finally to Arduino Mega. The robot is equipped with servo motors for head and hand gestures, DC motors for movement, and an ultrasonic sensor for obstacle detection. When a movement command is given, the ultrasonic sensor analyzes the surroundings and determines the best direction to move based on available space. The robot supports various gesture-based actions, including greeting gestures, hand movements, biceps flexing, and famous moves like Dab, Raju, and SRK, along with cricket umpire signals such as Out, Six, and No Ball. Powered by a 12V battery and controlled via L298N Motor Driver, the system ensures smooth operation, with predefined servo motor positions maintaining stability. The web application provides an intuitive interface for users to control the robot efficiently, combining automation, obstacle detection, and interactive movements into a single smart robotic system.
        </p>
      </div>
    </div>
  );
};

export default About;
