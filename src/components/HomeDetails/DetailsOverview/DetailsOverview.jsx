// import React from 'react'

import "./DetailsOverview.scss";

//icons
import { IoIosExpand } from "react-icons/io";
import { BiBed } from "react-icons/bi";
import { BsHouse, BsCalendar3 } from "react-icons/bs";
import { GiBathtub, GiHomeGarage } from "react-icons/gi";

const DetailsOverview = ({ bathrooms, bedrooms, surface, year, type }) => {
  return (
    <div className="detailOverview">
      <div className="detailOverview_flex">
        <div className="detailOverview_icon">
          <BiBed />
        </div>
        <div className="detailOverview_text">
          <h6>Bedrooms</h6>
          <span>{bedrooms}</span>
        </div>
      </div>
      <div className="detailOverview_flex">
        <div className="detailOverview_icon">
          <GiBathtub />
        </div>
        <div className="detailOverview_text">
          <h6>Bathrooms</h6>
          <span>{bathrooms}</span>
        </div>
      </div>
      <div className="detailOverview_flex">
        <div className="detailOverview_icon">
          <BsCalendar3 />
        </div>
        <div className="detailOverview_text">
          <h6>Year</h6>
          <span>{year}</span>
        </div>
      </div>
      <div className="detailOverview_flex">
        <div className="detailOverview_icon">
          <GiHomeGarage />
        </div>
        <div className="detailOverview_text">
          <h6>Garage</h6>
          <span>2</span>
        </div>
      </div>
      <div className="detailOverview_flex">
        <div className="detailOverview_icon">
          <IoIosExpand />
        </div>
        <div className="detailOverview_text">
          <h6>Size</h6>
          <span>{surface}</span>
        </div>
      </div>
      <div className="detailOverview_flex">
        <div className="detailOverview_icon">
          <BsHouse />
        </div>
        <div className="detailOverview_text">
          <h6>Property Type</h6>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsOverview;
