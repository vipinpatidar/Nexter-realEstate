import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
//context
import { NexterContext } from "../../context/store";

const OpenOnTop = () => {
  const { pathname } = useLocation();
  const { dispatch } = useContext(NexterContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: "PAGERESET" });
    //eslint-disable-next-line
  }, [pathname]);
};

export default OpenOnTop;
