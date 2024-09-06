import { useContext } from "react";
//icons
import svg from "../../assets/outer/sprite.svg";
import bath from "../../assets/outer/bathtub-thin.svg";
import "./ProCard.scss";
//icons
import { GiRockingChair } from "react-icons/gi";
import { ImHeart } from "react-icons/im";
import { Link } from "react-router-dom";
//context
import { NexterContext } from "../../context/store";

const ProCard = ({ home }) => {
  const { dispatch } = useContext(NexterContext);

  const handlerClick = (id) => {
    dispatch({ type: "FAVORITE", id: id });
    // dispatch({ type: "FILTER", value: "heart" });
  };

  return (
    <div className="home">
      <img src={home.image} alt="House 6" className="home__img" />

      <ImHeart
        className="home__like"
        style={{
          fill: `${home.isFavorite ? "#e31b23" : "#c69963"}`,
          cursor: "pointer",
        }}
        title="Add To Favorite"
        onClick={() => handlerClick(home.id)}
      />
      <h5 className="home__name">{home.name}</h5>
      <div className="home__location">
        <svg>
          <use xlinkHref={`${svg}#icon-map-pin`}></use>
        </svg>
        <p>{home.country}</p>
      </div>
      <div className="home__rooms">
        <svg>
          <use xlinkHref={`${svg}#icon-profile-male`}></use>
        </svg>
        <p>{`${home.bedrooms} Rooms`}</p>
      </div>
      <div className="home__price">
        <GiRockingChair />
        <p>{`${home.furnishType}`}</p>
      </div>
      <div className="home__price">
        <img src={bath} alt="bath room" className="svg-img" />
        <p>{`${home.bathrooms} Bath`}</p>
      </div>
      <div className="home__area">
        <svg>
          <use xlinkHref={`${svg}#icon-expand`}></use>
        </svg>
        <p>{home.surface}</p>
      </div>
      <div className="home__price">
        <svg>
          <use xlinkHref={`${svg}#icon-key`}></use>
        </svg>
        <p>{`$${home.price}`}</p>
      </div>
      <Link to={`/property/${home.id}`} className="btn home__btn">
        Property Details
      </Link>
    </div>
  );
};

export default ProCard;
