import { useContext } from "react";

import { useParams } from "react-router-dom";

//components
import ContactHeader from "../../components/ContactHeader/ContactHeader";
//css
import "./PropertyDetails.scss";
import HomeDetails from "../../components/HomeDetails/HomeDetails";
import Recommend from "../../components/Recommend/Recommend";
//context
import { NexterContext } from "../../context/store";
import OpenOnTop from "../../components/OpenOnTop/OpenOnTop";

const PropertyDetails = () => {
  const { state } = useContext(NexterContext);

  const { proId } = useParams();

  const house = state.houseArr.filter((house) => house.id === +proId);

  const recommendations = state.recommendedArr.filter(
    (house) => house.id !== +proId
  );

  return (
    <div className="container">
      <OpenOnTop />
      <ContactHeader
        background={house[0].image}
        h3={house[0].type}
        h1={house[0].name}
        pera={`This exquisite ${house[0].type.slice(
          0,
          -1
        )} offers an unparalleled living experience. Its spacious layout provides ${
          house[0].bedrooms
        } rooms and ${house[0].bathrooms} bathrooms With ${
          house[0].surface
        } area, this house is a true sanctuary that you'll be proud to call home.`}
        btnText={"Contact Us"}
        isContact={false}
        isBright={false}
      />
      <HomeDetails house={house} />
      <div className="recommends">
        <h2 className="heading-2 recommends_heading">Recommended Properties</h2>
        <Recommend cards={recommendations} />
      </div>
    </div>
  );
};

export default PropertyDetails;
