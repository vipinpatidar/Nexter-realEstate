import { useContext } from "react";

//icons
import { IoIosExpand } from "react-icons/io";
import { BiBed } from "react-icons/bi";
import { GiBathtub } from "react-icons/gi";
import { ImHeart } from "react-icons/im";
//css
import "./DetailsHeader.scss";

//context
import { NexterContext } from "../../../context/store";

const HomeDetailsHeader = ({
  address,
  bathrooms,
  bedrooms,
  surface,
  price,
  name,
  isFavorite,
  id,
}) => {
  const { dispatch } = useContext(NexterContext);

  return (
    <div className="upperInfo">
      <div className="upperInfo_left">
        <h2 className="heading-2 upperInfo_name">{name}</h2>
        <div className="upperInfo_roomInfos">
          <h6>{address}</h6>
        </div>
        <div className="upperInfo_icons">
          <p className="upperInfo_icon">
            {" "}
            <span className="icon">
              <BiBed />
            </span>
            <span>{bedrooms}</span>
          </p>
          <p className="upperInfo_icon">
            {" "}
            <span className="icon">
              <GiBathtub />
            </span>
            <span>{bathrooms}</span>
          </p>
          <p className="upperInfo_icon">
            {" "}
            <span className="icon">
              <IoIosExpand />
            </span>
            <span>{surface}</span>
          </p>
        </div>
      </div>
      <div className="upperInfo_right">
        <div className="upperInfo_right_price">
          <h2 className="price">${price}</h2>
          <p className="sqPrice">{`$${bedrooms * 600}/sq ft`}</p>
        </div>
        <button
          className="upperInfo_right_fav btn"
          onClick={() => dispatch({ type: "FAVORITE", id })}
        >
          <span className="icon" title="Add Favorite">
            <ImHeart
              style={{
                fill: `${isFavorite ? "#e31b23" : "#fff"}`,
                height: "22px",
              }}
            />
          </span>
          <span>WISHLIST</span>
        </button>
      </div>
    </div>
  );
};

export default HomeDetailsHeader;
