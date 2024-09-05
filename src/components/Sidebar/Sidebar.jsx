import { useState, useEffect } from "react";
//icons
import { ImHome, ImHeart } from "react-icons/im";
import { RiContactsFill } from "react-icons/ri";
//image
import key from "../../assets/outer/icons8-key.svg";
import logo from "../../assets/outer/favicon.png";
//link
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const [isDown, setIsDown] = useState("");
  const [lastPosition, setLastPosition] = useState(0);

  const isMobile = window.innerWidth <= 1034;

  useEffect(() => {
    if (!isMobile) return;

    const checkUpDown = () => {
      if (window.scrollY > 400) {
        if (window.scrollY < lastPosition) {
          setIsDown("show");
        } else if (window.scrollY > lastPosition) {
          setIsDown("hide");
        }
      } else {
        setIsDown("");
      }
      setLastPosition(window.scrollY);
    };

    checkUpDown();

    window.addEventListener("scroll", checkUpDown, { passive: true });
    return () => window.removeEventListener("scroll", checkUpDown);
  }, [lastPosition, isMobile]);

  return (
    <div className={`sidebar ${isDown}`}>
      <Link to={"/"} className={"open"}>
        <img
          src={logo}
          alt="key"
          className="icon-btn logo"
          title="logo"
          style={{
            filter: "brightness(0.3) saturate(0%)",
            width: "4rem",
            height: "4rem",
            display: "block",
          }}
        />
      </Link>
      {/* <div className="open">
        <RiMenu5Line className="icon-btn" title="Menu" />
        {isOpen && <span>Menu</span>}
      </div> */}
      <NavLink
        to={"/"}
        className={`${(isActive) => (isActive ? "active" : "")} open`}
      >
        <ImHome className="icon-btn" title="Home" />
      </NavLink>

      <NavLink
        to={"/properties"}
        className={`${(isActive) => (isActive ? "active" : "")} open`}
      >
        <img
          src={key}
          alt="key"
          className="icon-btn"
          title="Properties"
          style={{
            filter: "brightness(0) invert(1)",
            width: "3.8rem",
            height: " 3.8rem",
            display: "block",
          }}
        />
      </NavLink>
      <NavLink
        to={"/contact"}
        className={`${(isActive) => (isActive ? "active" : "")} open`}
      >
        <RiContactsFill className="icon-btn" title="Contact" />
      </NavLink>
      <NavLink
        to={"/favorites"}
        className={`${(isActive) => (isActive ? "active" : "")} open`}
      >
        <ImHeart className="icon-btn" title="Favorites" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
