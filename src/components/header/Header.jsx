import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__link" href="#">
          Logo
        </a>
        <ul className="header__list">
          <li className="header__item">Home</li>
          <li className="header__item">About</li>
          <li className="header__item">Service</li>
          <li className="header__item">Product</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
