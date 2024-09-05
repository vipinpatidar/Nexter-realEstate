// import React from 'react'
//swiper react
import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/navigation";
// required modules
import { Autoplay, Navigation } from "swiper";
//css
import "./Recommend.scss";
import ProCard from "../ProCard/ProCard";

const Recommend = ({ cards }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      // autoplay={true}
      grabCursor={true}
      navigation={true}
      breakpoints={{
        520: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 55,
        },
        1180: {
          slidesPerView: 3,
          spaceBetween: 55,
        },
      }}
      className="recommend_swiper"
    >
      {cards?.map((card) => (
        <SwiperSlide key={card.id} className="recommend_slider">
          <ProCard home={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Recommend;
