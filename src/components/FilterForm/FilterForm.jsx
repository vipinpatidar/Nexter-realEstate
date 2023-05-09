import { useContext } from "react";
//data
import { price, type, rooms, country, sort } from "../../data/data";
// , reset
//components
import Dropdown from "../Dropdown/Dropdown";
//css
import "./FilterForm.scss";
//context
import { NexterContext } from "../../context/store";

const FilterForm = () => {
  const { state, dispatch } = useContext(NexterContext);

  return (
    <div className="filterForm">
      <div className="filterForm_items">
        <div className="dropdown">
          <Dropdown
            items={price}
            type="PRICE"
            text={state?.price}
            dispatch={dispatch}
          />
        </div>
        <div className="dropdown">
          <Dropdown
            items={type}
            type="TYPE"
            text={state?.type}
            dispatch={dispatch}
          />
        </div>
        <div className="dropdown">
          <Dropdown
            items={rooms}
            type="ROOMS"
            text={state?.rooms}
            dispatch={dispatch}
          />
        </div>
        <div className="dropdown">
          <Dropdown
            items={sort}
            type="SORTBY"
            text={state?.sortBy}
            dispatch={dispatch}
          />
        </div>
        <div className="dropdown">
          <Dropdown
            items={country}
            type="COUNTRY"
            text={state?.country}
            dispatch={dispatch}
          />
        </div>
        {/* <div className="dropdown">
          <Dropdown
            items={reset}
            type="RESET"
            text={state?.reset}
            dispatch={dispatch}
          />
        </div> */}

        <button
          className="dropdown-btn heading-4"
          onClick={() => dispatch({ type: "FILTER", value: "search" })}
        >
          Search
        </button>
        <button
          className="dropdown-btn reset_btn heading-4"
          onClick={() => dispatch({ type: "PAGERESET" })}
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
