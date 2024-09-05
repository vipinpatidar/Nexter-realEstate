import { useState, useContext } from "react";
import "./ProHeader.scss";
//image
import logo from "../../assets/outer/logo.png";
import FilterForm from "../FilterForm/FilterForm";

//icons
import {
  MdOutlineApartment,
  MdOutlineVilla,
  MdPlayArrow,
} from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { MemoizedPlayVideo } from "../PlayVideo/PlayVideo";
//context
import { NexterContext } from "../../context/store";

const ProHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("");

  const { dispatch } = useContext(NexterContext);

  return (
    <>
      {isOpen && <MemoizedPlayVideo setIsOpen={setIsOpen} />}
      <div className="proHeader">
        <div className="proHeader_video">
          <div className="video_flex">
            <h6 className="video_text">Watch Video</h6>
            <div className="video_inner" onClick={() => setIsOpen(true)}>
              <MdPlayArrow className="video_icon" />
            </div>
          </div>
        </div>

        <img src={logo} alt="logo pic" className="proHeader_logo" />
        <h3 className="proHeader_text heading-3">Your Dream Home</h3>
        <h1 className=" heading-1">Find the perfect place</h1>
        <p className="proHeader_pera">
          “There Is Something Permanent, And Something Extremely Profound In
          Owning Home.”
        </p>
        <div className="proHeader_filter">
          <FilterForm setIsClicked={setIsClicked} />
        </div>
        <div className="house">
          <div
            className="house_type"
            onClick={() => {
              dispatch({ type: "HOUSETYPE", value: "Apartments" });
              setIsClicked("Apartments");
            }}
          >
            <span className="house_icon">
              <MdOutlineApartment />
            </span>
            <h6
              className="house_text"
              style={{
                color: `${isClicked === "Apartments" ? "#c69963" : ""}`,
              }}
            >
              Apartments
            </h6>
          </div>
          <div
            className="house_type"
            onClick={() => {
              dispatch({ type: "HOUSETYPE", value: "Townhouses" });
              setIsClicked("Townhouses");
            }}
          >
            {" "}
            <span className="house_icon">
              <BsHouse />
            </span>
            <h6
              className="house_text"
              style={{
                color: `${isClicked === "Townhouses" ? "#c69963" : ""}`,
              }}
            >
              Townhouses
            </h6>
          </div>
          <div
            className="house_type"
            onClick={() => {
              dispatch({ type: "HOUSETYPE", value: "Villas" });
              setIsClicked("Villas");
            }}
          >
            {" "}
            <span className="house_icon">
              <MdOutlineVilla />
            </span>
            <h6
              className="house_text"
              style={{ color: `${isClicked === "Villas" ? "#c69963" : ""}` }}
            >
              Villas
            </h6>
          </div>
          <div
            className="house_type"
            onClick={() => {
              dispatch({ type: "HOUSETYPE", value: "Penthouses" });
              setIsClicked("Penthouses");
            }}
          >
            {" "}
            <span className="house_icon">
              <BiBuildingHouse />
            </span>
            <h6
              className="house_text"
              style={{
                color: `${isClicked === "Penthouses" ? "#c69963" : ""}`,
              }}
            >
              Penthouses
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProHeader;
