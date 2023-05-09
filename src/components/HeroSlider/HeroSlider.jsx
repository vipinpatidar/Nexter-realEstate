// import React from "react";
//slider images
import slider1 from "../../assets/bigImg/slide1.jpg";
import slider2 from "../../assets/bigImg//slide2.jpg";
import slider3 from "../../assets/bigImg//slide3.jpg";
import slider4 from "../../assets/bigImg//slide4.jpg";

const arr = [slider1, slider2, slider3, slider4];

//import swiper react
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper style
import "swiper/css";
import "swiper/css/effect-fade";
//required modules
import { EffectFade, Autoplay } from "swiper";

import "./HeroSlider.scss";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {arr.map((arr, idx) => (
        <SwiperSlide key={idx} className="swiper_main">
          <img className="swiper_img" src={arr} alt="slide images" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
