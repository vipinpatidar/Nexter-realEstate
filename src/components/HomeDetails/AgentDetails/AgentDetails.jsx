// import React from "react";

//icons
import { ImMobile } from "react-icons/im";
import { BsArrowUpRight } from "react-icons/bs";

//css
import "./AgentDetails.scss";

const AgentDetails = ({ agent }) => {
  const { image, name, phone } = agent;

  return (
    <div className="agentDetails">
      <div className="agentDetails_box">
        <img className="agentDetails_img" src={image} alt="agent image" />
        <div className="agentDetails_info">
          <h6 className="agentDetails_name">{name}</h6>
          <p className="agentDetails_phone">
            <span className="agentDetails_icon">
              <ImMobile />
            </span>{" "}
            <span className="agentDetails_num">{phone}</span>
          </p>
          <a className="agentDetails_link" href="#">
            View Listings
          </a>
        </div>
      </div>
      <button className="btn agentDetails_btn">
        <span>Contact Agent</span>
        <span className="icons-1">
          <BsArrowUpRight />
        </span>
      </button>
    </div>
  );
};

export default AgentDetails;
