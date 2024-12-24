import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Actions.css";

const Actions = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: 1,
      effect: "fade",
      loop: true,
      speed: 300,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slide-image-wrapper">
              <img src="./assets/macau.jpg" alt="Macau" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-image-wrapper">
              <img src="./assets/rome.jpg" alt="Rome" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-image-wrapper">
              <img src="./assets/jaipur.jpg" alt="Jaipur" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-image-wrapper">
              <img src="./assets/dubai.jpg" alt="Dubai" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-image-wrapper">
              <img src="./assets/barcelona.jpg" alt="Barcelona" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="slide-image-wrapper">
              <img src="./assets/amsterdam.jpg" alt="Amsterdam" />
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="btn">
            <div className="text-container">
              <span className="text">Hello</span>
              <span className="text">Hello</span>
            </div>
          </button>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default Actions;
