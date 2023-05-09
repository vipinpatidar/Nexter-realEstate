// import React from "react";

import "./HomeDetails.scss";
import HomeDetailsHeader from "./DetailsHeader/DetailsHeader";
import DetailsSlider from "./DetailsSlider/DetailsSlider";
import DetailsOverview from "./DetailsOverview/DetailsOverview";
import DetailsDes from "./DetailsDes/DetailsDes";
import DetailsAddress from "./DetailsAddress/DetailsAddress";
//eslint-disable-next-line
import FormDetails from "./FormDetails/FormDetails";
import AgentDetails from "./AgentDetails/AgentDetails";

const HomeDetails = ({ house }) => {
  const {
    name,
    type,
    id,
    description,
    slideImg,
    country,
    address,
    surface,
    year,
    price,
    agent,
    Amenities,
    // furnishType,
    bedrooms,
    bathrooms,
    isFavorite,
  } = house[0];

  return (
    <div className="homeDetails">
      {/* upper info */}
      <HomeDetailsHeader
        address={address}
        bathrooms={bathrooms}
        bedrooms={bedrooms}
        surface={surface}
        price={price}
        name={name}
        id={id}
        isFavorite={isFavorite}
      />
      {/* full details */}
      <div className="homeDetails_grid">
        <div className="grid_left">
          {/* Image slider */}
          <div className="grid_left_slider fix_props swiper_pad">
            <h3 className="heading-4 fix_heading swiper_head">
              See All Photos
            </h3>
            <DetailsSlider slideImages={slideImg} />
          </div>
          {/* Overview */}
          <div className="grid_left_overview fix_props">
            <h3 className="heading-4 fix_heading ">Overview</h3>
            <DetailsOverview
              bathrooms={bathrooms}
              bedrooms={bedrooms}
              surface={surface}
              year={year}
              type={type}
            />
          </div>
          {/* Amenities and description */}
          <div className="grid_left_overview fix_props">
            <DetailsDes description={description} amenities={Amenities} />
          </div>

          {/* address */}
          <div className="grid_left_overview fix_props">
            <h3 className="heading-4 fix_heading ">Address</h3>
            <DetailsAddress address={address} country={country} name={name} />
          </div>
        </div>
        <div className="grid_right ">
          <div className="grid_right_fixed">
            <div className="grid_right_form fix_props">
              <h3 className="heading-4 fix_heading ">Schedule a tour</h3>
              <p>Choose your preferred day</p>
              <FormDetails />
            </div>
            <div className="grid_right_agent fix_props">
              <h3 className="heading-4 fix_heading ">Get More Information</h3>
              <AgentDetails agent={agent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
