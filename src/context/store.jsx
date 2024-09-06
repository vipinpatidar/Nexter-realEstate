import { createContext, useReducer } from "react";
import { housesData } from "../data/data.js";

export const NexterContext = createContext({
  houseArr: [],
  favoriteArr: [],
  price: "",
  type: "",
  country: "",
  sortBy: "",
  rooms: "",
  reset: "",
});

const initialValues = {
  houseArr: housesData,
  favoriteArr: [],
  price: "Price",
  type: "Type",
  country: "Country",
  sortBy: "Sort By",
  rooms: "Rooms",
  reset: "Reset",
};

const reducer = (state, action) => {
  console.log("Reducer:", action, state);

  switch (action.type) {
    case "FAVORITE": {
      let isExisted = state.favoriteArr.find((elem) => elem.id === action.id);

      const arr2 = isExisted
        ? [...state.favoriteArr].filter((elem) => elem.id !== action.id)
        : [
            ...state.favoriteArr,
            [...housesData]
              .map((elem) =>
                elem.id === action.id
                  ? { ...elem, isFavorite: !elem.isFavorite }
                  : elem
              )
              .find((elem) => elem.id === action.id),
          ];

      const updatedHouseArr = state.houseArr.map((house) =>
        house.id === action.id
          ? { ...house, isFavorite: !house.isFavorite }
          : house
      );

      return {
        ...state,
        houseArr: updatedHouseArr,
        favoriteArr: arr2,
      };
    }
    case "PRICE":
    case "TYPE":
    case "COUNTRY":
    case "ROOMS":
    case "RESET":
      return { ...state, [action.type.toLowerCase()]: action.value };
    case "SORTBY": {
      return { ...state, sortBy: action.value };
    }
    case "FILTER": {
      let arr = housesData.map((house) => {
        const isFavorite = state.favoriteArr.some((fav) => fav.id === house.id);
        return { ...house, isFavorite };
      });

      let filteredArr = arr;

      // Apply filters for price, type, rooms, etc.
      if (state.price !== "Price") {
        filteredArr = filteredArr.filter(
          (house) => +house.price <= +state.price
        );
      }

      if (state.type !== "Type") {
        filteredArr = filteredArr.filter((house) =>
          house.type.toLowerCase().includes(state.type.toLowerCase())
        );
      }

      if (state.rooms !== "Rooms") {
        filteredArr = filteredArr.filter(
          (house) => +house.bedrooms >= +state.rooms
        );
      }

      if (state.country !== "Country") {
        filteredArr = filteredArr.filter((house) =>
          house.country.toLowerCase().includes(state.country.toLowerCase())
        );
      }

      if (state.sortBy !== "Sort By") {
        const sortOrder = ["Highest", "Newest"].includes(state.sortBy) ? -1 : 1;
        const sortKey =
          state.sortBy === "Newest" || state.sortBy === "Oldest"
            ? "year"
            : "price";

        filteredArr.sort((a, b) => sortOrder * (+a[sortKey] - +b[sortKey]));
      }

      return {
        ...state,
        houseArr: filteredArr, // Ensure that the filtered array is set
      };
    }

    case "PAGERESET": {
      let arr = housesData.map((house) => {
        const isFavorite = state.favoriteArr.some((fav) => fav.id === house.id);
        return { ...house, isFavorite };
      });

      // console.log(arr);

      return {
        ...state,
        houseArr: arr,
        price: "Price",
        type: "Type",
        country: "Country",
        sortBy: "Sort By",
        rooms: "Rooms",
        reset: "Reset",
      };
    }
    case "HOUSETYPE": {
      let arr = housesData.map((house) => {
        const isFavorite = state.favoriteArr.some((fav) => fav.id === house.id);
        return { ...house, isFavorite };
      });
      const roomTypeArr = arr.filter(
        (house) =>
          house.type.toLowerCase().indexOf(action.value.toLowerCase()) >= 0
      );
      return {
        ...state,
        houseArr: roomTypeArr,
      };
    }
    default:
      return state;
  }
};

const NexterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const context = {
    state,
    dispatch,
  };

  return (
    <NexterContext.Provider value={context}>{children}</NexterContext.Provider>
  );
};

export default NexterContextProvider;

/*
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

    const allFavorites = changeHouseArr.filter((house) => house.isFavorite);

    return {
      ...prevState,
      houseArr: changeHouseArr,
      favoriteArr: allFavorites,
      favArr: changeHouseArr,
      heartFullArr: changeHouseArr,
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

    if (action.value === "heart") {
      return { ...prevState, filteredArr: newHouseArr };
    } else if (action.value === "search") {
      if (arr.length > 0) {
        return { ...prevState, filteredArr: arr };
      } else {
        return { ...prevState, filteredArr: newHouseArr };
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
*/
