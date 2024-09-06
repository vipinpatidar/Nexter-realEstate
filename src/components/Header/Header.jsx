// import React from 'react'
import logo from "../../assets/outer/logo.png";
import bbc from "../../assets/outer/logo-bbc.png";
import forbes from "../../assets/outer/logo-forbes.png";
import techcrunch from "../../assets/outer/logo-techcrunch.png";
import bi from "../../assets/outer/logo-bi.png";
import Realtors from "../Realtors/Realtors";

import "./Header.scss";
import HeroSlider from "../HeroSlider/HeroSlider";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="swiperHeader">
        <div className="overlay"></div>
        <HeroSlider />
        <div className="header">
          <img src={logo} alt="Nexter logo" className="header__logo" />
          <h3 className="heading-3">Your own home</h3>
          <h1 className="heading-1">The ultimate personal freedom</h1>
          <Link to="/properties" className="links">
            <button className="btn header__btn">View our properties</button>
          </Link>
          <div className="header__seenon-text">Seen on</div>
          <div className="header__seenon-logos">
            <img src={bbc} alt="Seen on logo 1" />
            <img src={forbes} alt="Seen on logo 2" />
            <img src={techcrunch} alt="Seen on logo 3" />
            <img src={bi} alt="Seen on logo 4" />
          </div>
        </div>
      </header>
      <Realtors />
    </>
  );
};

export default Header;
