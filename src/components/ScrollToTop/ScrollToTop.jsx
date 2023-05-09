import { useState, useEffect } from "react";

import { MdKeyboardArrowUp } from "react-icons/md";

//css
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [scrollPosition, setPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", updatePosition, { passive: true });
    return () =>
      window.removeEventListener("scroll", updatePosition, { passive: true });
  }, []);

  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`scrollTop ${scrollPosition <= 450 ? "hidden" : ""}`}
      onClick={scrollHandler}
    >
      <span className="scrollTop_icon">
        <MdKeyboardArrowUp />
      </span>
    </div>
  );
};

export default ScrollToTop;
