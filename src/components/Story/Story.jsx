// import React from "react";
//import swiper react
import { Swiper, SwiperSlide } from "swiper/react";
//Swiper style
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
//required modules
import { EffectFade, Autoplay, Navigation } from "swiper";

//images
import couple from "../../assets/outer/about-2 (1).jpg";
//data
import { testimonial } from "../../data/data";

//slide images
import slide1 from "../../assets/img/apartments/a4lg.jpg";
import slide2 from "../../assets/img/sliderPics/bath10.jpg";
import slide3 from "../../assets/outer/story-2.jpg";
import slide4 from "../../assets/img/sliderPics/s1.jpg";

// slide array
const slideArray = [slide1, slide2, slide3, slide4];
//css
import "./Story.scss";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <>
      <div className="story__pictures">
        <img
          src={couple}
          alt="Couple with new house"
          className="story__img--1"
        />
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="story__img--2"
        >
          {slideArray.map((slide, idx) => (
            <SwiperSlide key={idx} className="img-slider">
              <img src={slide} alt="New house" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          // autoplay={true}
          className="testi_main"
        >
          {testimonial.map((testi) => (
            <SwiperSlide key={testi.id}>
              <div>
                <h2 className="heading-2 heading-2--dark mb-sm">
                  {testi.heading}
                </h2>
                <p className="story__text">{testi.pera}</p>
                <div className="testi_person">
                  <img src={testi.image} alt="person" className="testi_img" />
                  <div className="testi_info">
                    <span className="testi_name heading-4">{testi.name}</span>
                    <span className="testi_work">{testi.work}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/properties" className="links">
          <button className="btn">Find your own home</button>
        </Link>
      </div>
    </>
  );
};

export default Story;
