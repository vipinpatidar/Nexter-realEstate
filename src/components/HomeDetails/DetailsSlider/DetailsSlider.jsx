// import React from "react";

//swiper react
import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/navigation";

// required modules
import { Autoplay, Navigation } from "swiper";
//css
import "./DetailsSlider.scss";

const HomeDetailsSlider = ({ slideImages }) => {
  return (
    <div className="detailSlider">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={true}
        navigation={true}
        className="detailSlider_swiper"
      >
        {slideImages.map((img, idx) => (
          <SwiperSlide key={idx} className="detailImg_slider">
            <img src={img} alt="house all Images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeDetailsSlider;
