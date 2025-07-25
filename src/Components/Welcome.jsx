import "../CSS/Welcome.css";
import photo1 from "../assets/Images/1.jpg";
import photo2 from "../assets/Images/2.jpg";
import photo3 from "../assets/Images/3.jpg";

const imgs = [photo1, photo2, photo3];

import Carousel from "./Carousel";

const Welcome = () => {
  return (
    <>
      <div className="outer-container">
        <div className="content">
          <h1 className="content-h1">Welcome to </h1>
          <h1 className="title">
            Skyler
            <div className="aurora">
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
              <div className="aurora__item"></div>
            </div>
          </h1>
        </div>
        <Carousel slides={imgs} />
      </div>
    </>
  );
};

export default Welcome;
