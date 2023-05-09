import { createContext, useReducer } from "react";

//data
import { housesData } from "../data/data";
export const NexterContext = createContext({
  houseArr: [],
  favArr: [],
  heartFullArr: [],
  filteredArr: [],
  favoriteArr: [],
  recommendedArr: [],
  price: "",
  type: "",
  country: "",
  sortBy: "",
  rooms: "",
  reset: "",
});

const initialValues = {
  houseArr: housesData,
  favArr: housesData,
  heartFullArr: [],
  filteredArr: housesData,
  favoriteArr: [],
  recommendedArr: housesData,
  price: "Price",
  type: "Type",
  country: "Country",
  sortBy: "Sort By",
  rooms: "Rooms",
  reset: "Reset",
};

const reducer = (prevState, action) => {
  if (prevState.heartFullArr.length > 0) {
    prevState.recommendedArr = [...prevState.heartFullArr];
  } else {
    prevState.recommendedArr = [...housesData];
  }

  if (action.type === "FAVORITE") {
    // console.log(action.id);
    const changeHouseArr = prevState.favArr.map((house) => {
      return house.id === action.id
        ? { ...house, isFavorite: !house.isFavorite }
        : { ...house };
    });

    prevState.heartFullArr = changeHouseArr;

    const allFavorites = [];

    changeHouseArr.forEach((house) => {
      if (house.isFavorite === true) {
        allFavorites.push(house);
      }
    });

    // console.log(changeHouseArr);
    // console.log(allFavorites);

    return {
      ...prevState,
      houseArr: changeHouseArr,
      favoriteArr: allFavorites,
      favArr: changeHouseArr,
    };
  } else if (action.type === "PRICE") {
    return { ...prevState, price: action.value };
  } else if (action.type === "TYPE") {
    return { ...prevState, type: action.value };
  } else if (action.type === "COUNTRY") {
    return { ...prevState, country: action.value };
  } else if (action.type === "SORTBY") {
    return { ...prevState, sortBy: action.value };
  } else if (action.type === "ROOMS") {
    return { ...prevState, rooms: action.value };
  } else if (action.type === "RESET") {
    return { ...prevState, reset: action.value };
  } else if (action.type === "FILTER") {
    // action.value.preventDefault();

    let newHouseArr;
    if (prevState.heartFullArr.length > 0) {
      newHouseArr = [...prevState.heartFullArr];
    } else {
      newHouseArr = [...initialValues.houseArr];
    }

    let arr = [];
    if (prevState.price !== "Price") {
      if (arr.length > 0) {
        arr = arr.filter((house) => +house.price >= +prevState.price);
      } else {
        arr = newHouseArr.filter((house) => +house.price >= +prevState.price);
      }
    }
    //filter for type
    if (prevState.type !== "Type") {
      if (arr.length > 0) {
        arr = arr.filter(
          (house) =>
            house.type.toLowerCase().indexOf(prevState.type.toLowerCase()) >= 0
        );
      } else {
        arr = newHouseArr.filter(
          (house) =>
            house.type.toLowerCase().indexOf(prevState.type.toLowerCase()) >= 0
        );
      }
    }
    // filter for rooms
    if (prevState.rooms !== "Rooms") {
      if (arr.length > 0) {
        arr = arr.filter((house) => +house.bedrooms >= +prevState.rooms);
      } else {
        arr = newHouseArr.filter(
          (house) => +house.bedrooms >= +prevState.rooms
        );
      }
    }
    //filter for sort by
    if (prevState.sortBy !== "Sort By") {
      if (arr.length > 0) {
        if (prevState.sortBy === "Newest") {
          arr.sort((a, b) => b.year - a.year);
        } else if (prevState.sortBy === "Oldest") {
          arr.sort((a, b) => a.year - b.year);
        } else if (prevState.sortBy === "Highest") {
          arr.sort((a, b) => +b.price - +a.price);
        } else if (prevState.sortBy === "Lowest") {
          arr.sort((a, b) => +a.price - +b.price);
        }
      } else {
        if (prevState.sortBy === "Newest") {
          newHouseArr.sort((a, b) => +b.year - +a.year);
        } else if (prevState.sortBy === "Oldest") {
          newHouseArr.sort((a, b) => +a.year - +b.year);
        } else if (prevState.sortBy === "Highest") {
          newHouseArr.sort((a, b) => +b.price - +a.price);
        } else if (prevState.sortBy === "Lowest") {
          newHouseArr.sort((a, b) => +a.price - +b.price);
        }
      }
    }

    //filter by country
    if (prevState.country !== "Country") {
      if (arr.length > 0) {
        arr = arr.filter(
          (house) =>
            house.country
              .toLowerCase()
              .indexOf(prevState.country.toLowerCase()) >= 0
        );
      } else {
        arr = newHouseArr.filter(
          (house) =>
            house.country
              .toLowerCase()
              .indexOf(prevState.country.toLowerCase()) >= 0
        );
      }
    }

    //filter Reset
    // if (prevState.reset !== "Reset") {
    //   prevState.price = "Price";
    //   prevState.type = "Type";
    //   prevState.country = "Country";
    //   prevState.sortBy = "Sort By";
    //   prevState.rooms = "Rooms";
    //   prevState.reset = "Reset";
    //   arr = newHouseArr;
    // }
    // console.log(arr.length);
    // without filter

    if (action.value === "heart") {
      return { ...prevState, filteredArr: newHouseArr };
    } else if (action.value === "search") {
      if (arr.length > 0) {
        return { ...prevState, filteredArr: arr };
      } else {
        return { ...prevState, filteredArr: [] };
      }
    }
  } else if (action.type === "PAGERESET") {
    let newHouseArr;
    if (prevState.heartFullArr.length > 0) {
      newHouseArr = [...prevState.heartFullArr];
    } else {
      newHouseArr = [...initialValues.houseArr];
    }
    prevState.price = "Price";
    prevState.type = "Type";
    prevState.country = "Country";
    prevState.sortBy = "Sort By";
    prevState.rooms = "Rooms";
    prevState.reset = "Reset";
    return { ...prevState, filteredArr: newHouseArr };
  } else if (action.type === "HOUSETYPE") {
    let newHouseArr;
    if (prevState.heartFullArr.length > 0) {
      newHouseArr = [...prevState.heartFullArr];
    } else {
      newHouseArr = [...initialValues.houseArr];
    }

    const roomTypeArr = newHouseArr.filter(
      (house) =>
        house.type.toLowerCase().indexOf(action.value.toLowerCase()) >= 0
    );

    return { ...prevState, filteredArr: roomTypeArr };
  }
};

const NexterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const context = {
    state,
    dispatch,
  };

  // console.log(context.state);

  return (
    <NexterContext.Provider value={context}>{children}</NexterContext.Provider>
  );
};

export default NexterProvider;
