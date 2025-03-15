import "../CSS/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          The <b className="name">Skyler</b> control Web App is a sophisticated
          platform designed to remotely manage and operate Skyler, a versatile
          robot built for performing a variety of tasks. Developed using the
          MERN stack (MongoDB, Express.js, React, and Node.js), this web
          application enables seamless communication between users and Skyler
          through a robust system architecture. Commands initiated from the web
          interface are transmitted from Node.js to HiveMQTT, then relayed to a
          NodeMCU, which interfaces with an Arduino Mega via serial
          communication. Skyler is equipped with servo motors controlling its
          head, left hand, and right hand movements, alongside DC motors powered
          by an L298N driver for navigation. An ultrasonic sensor enhances
          Skyler’s functionality by detecting distances, allowing it to
          intelligently adjust its movements—such as moving forward, turning
          left, or stopping—based on environmental awareness. With a
          comprehensive command set, including actions like &quot;Shake
          Hand&quot;, &quot;Move Forward&quot;, &quot;Both Hands Up&quot; and
          specialized gestures like &quot;Dab&quot;, &quot;SRK&quot; Skyler
          offers precise control for users of all backgrounds. Powered by a 12V
          battery and activated via a main switch, Skyler is designed for
          reliability and responsiveness. Whether you&apos;re issuing simple
          navigation instructions or complex servo-based actions, the Skyler
          Control Web App provides an accessible and efficient solution for
          anyone looking to harness the power of robotic automation.
        </p>
      </div>
    </div>
  );
};

export default About;
