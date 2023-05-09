import { useContext } from "react";
import "./HomeProperties.scss";
import FilterForm from "../FilterForm/FilterForm";
import ProCards from "../ProCards/ProCards";
//data
import { Link } from "react-router-dom";

//context
import { NexterContext } from "../../context/store";

const HomeProperties = () => {
  const { state } = useContext(NexterContext);

  const homesArr = state?.filteredArr.slice(0, 6);

  return (
    <>
      <div className="homePropertiesMain">
        <div className="pro-heading-flex">
          <h2 className="heading-2 pro-heading">
            A place you&apos;ll love to live
          </h2>
          <q className="heading-3 quotes">
            “Owning a home is a keystone of wealth... both financial affluence
            and emotional security.”
          </q>
        </div>
        <div className="bg-div">
          <FilterForm />
        </div>
        <div className="main-flex">
          <div>
            <h3 className="heading-5 heading-5--dark">
              Our Featured Properties
            </h3>
            <p className="heading-4">Find Your Dream Home</p>
          </div>
          <Link to="/properties" className="links">
            <button className="seeAll-btn">See All</button>
          </Link>
        </div>
        <div className="home_proCards">
          {state?.filteredArr.length > 0 ? (
            <>
              <ProCards homesArr={homesArr} />
            </>
          ) : (
            <div>
              <h2 className="heading-2 oopsHeading">
                Oops! no match found. Please try other option for properties
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeProperties;
