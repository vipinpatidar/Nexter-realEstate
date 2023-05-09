// import React from "react";

//data
import { gallery } from "../../data/data.js";

//css
import "./Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">
      {gallery.map((gallery, idx) => (
        <figure className={`gallery__item gallery__item--${idx + 1}`} key={idx}>
          <img src={gallery} alt="Gallery images" className="gallery__img" />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;
