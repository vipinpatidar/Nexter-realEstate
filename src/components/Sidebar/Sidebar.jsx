// import { useState } from "react";
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
  return (
    <div className="sidebar">
      <Link to={"/"} className={"open"}>
        <img
          src={logo}
          alt="key"
          className="icon-btn"
          title="logo"
          style={{
            filter: "brightness(0.4) saturate(0%)",
            width: "4.5rem",
            height: "4.5rem",
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
