import "../CSS/Welcome.css";
import photo1 from "../assets/Images/1.jpg";
import photo2 from "../assets/Images/2.jpg";
import photo3 from "../assets/Images/3.jpg";
import photo4 from "../assets/Images/4.jpg";
import photo5 from "../assets/Images/5.jpg";

const Welcome = () => {
  return (
    <>
      <div className="outer-container">
        <div className="content">
          <h1>Welcome to </h1>
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
        <div className="inner-container">
          <div className="card">
            <img src={photo1} />
          </div>
          <div className="card">
            <img src={photo2} />
          </div>
          <div className="card">
            <img src={photo3} />
          </div>
          <div className="card">
            <img src={photo4} />
          </div>
          <div className="card">
            <img src={photo5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
