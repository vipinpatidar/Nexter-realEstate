import { useContext } from "react";
//image
import fav from "../../assets/bigImg/fav2.jpg";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
//context
import { NexterContext } from "../../context/store";
import ProCards from "../../components/ProCards/ProCards";

//css
import "./Favorites.scss";
import Recommend from "../../components/Recommend/Recommend";
import OpenOnTop from "../../components/OpenOnTop/OpenOnTop";

const Favorites = () => {
  const { state } = useContext(NexterContext);

  return (
    <>
      <OpenOnTop />
      <div className="container">
        <ContactHeader
          background={fav}
          h3={"Home is where your story begins"}
          h1={"Your Favorite house"}
          isContact={false}
          pera="&ldquo; Housing is absolutely essential to human flourishing. Without stable shelter, it all falls apart. An investment in housing is an investment in family stability, children's success, and the economic health of our entire state &rdquo;"
          btnText={"Contact Us"}
          isBright={true}
        />
        {state.favoriteArr.length > 0 ? (
          <div className="favoritesCards">
            <ProCards homesArr={state.favoriteArr} />
          </div>
        ) : (
          <div className="noFavorites">
            <h2 className="heading-2">I Am Empty :(</h2>
            <h3
              className="heading-4 heading-4--dark"
              style={{ fontSize: "2.4rem", marginTop: "8px" }}
            >
              Add Your Favorites
            </h3>
          </div>
        )}
        <div className="recommends">
          <h2 className="heading-2 recommends_heading">
            Recommended Properties
          </h2>
          <Recommend cards={state.houseArr} />
        </div>
      </div>
    </>
  );
};

export default Favorites;
