// import React from "react";

//icons
import { RxDotFilled } from "react-icons/rx";

//css
import "./DetailsDes.scss";
const DetailsDes = ({ description, amenities }) => {
  return (
    <div>
      <div className="detailsAmen">
        <h3 className="heading-4 fix_heading">Features & Amenities</h3>
        <div className="detailsAmen_grid">
          {amenities.map((amenity, idx) => (
            <div className="detailsAmen_flex" key={idx}>
              <span className="detailsAmen_icon">
                <RxDotFilled />
              </span>
              <h6>{amenity}</h6>
            </div>
          ))}
        </div>
      </div>

      <div className="detailsDes">
        <h3 className="heading-4 fix_heading">Property Description</h3>
      </div>
      <div className="detailsDes_text">
        <p className="detailsDes_pera">{description}</p>
      </div>
    </div>
  );
};

export default DetailsDes;
