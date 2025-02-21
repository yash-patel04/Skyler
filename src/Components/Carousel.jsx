/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../CSS/Carousel.css";

import arrowLeft from "../assets/arrow-left.svg"; 
import arrowRight from "../assets/arrow-right.svg"; 

function Carousel({ slides }) {

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
        prevEl: ".button-prev",
        nextEl: ".button-next",
      }}
      pagination={{
        clickable: true,
      }}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide-inner">
          <img src={slide} alt="" className="img" />
        </SwiperSlide>
      ))}
      <div className="button-prev">
        <img src={arrowLeft} alt="Left" />
      </div>
      <div className="button-next">
        <img src={arrowRight} alt="Right" />
      </div>
    </Swiper>
  );
}

export default Carousel;