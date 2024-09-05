import { useContext } from "react";
import ProHeader from "../../components/ProHeader/ProHeader";
//data
import ProCards from "../../components/ProCards/ProCards";
//context
import { NexterContext } from "../../context/store";

//css
import "./Properties.scss";
import OpenOnTop from "../../components/OpenOnTop/OpenOnTop";

const PropertiesPage = () => {
  const ctx = useContext(NexterContext);

  // console.log(ctx.state.filteredArr);

  return (
    <>
      <OpenOnTop />
      <div className="container">
        <ProHeader />
        <div className="property_cards">
          {ctx.state?.houseArr?.length > 0 ? (
            <>
              <ProCards homesArr={ctx.state?.houseArr} />
            </>
          ) : (
            <div>
              <h2 className="heading-2" style={{ color: " #eb6753" }}>
                Oops! no match found. Please try other option for properties
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
