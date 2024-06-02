import React from "react";
import "../components/header";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar__logo">MUT TECH CLUB</div>
      <div className="media">
      <div className="navbar__menu">
        <ol className="header-nav-list">
          <li className="header-navs">
            <Link to="/">Home</Link>
          </li>
          <li className="header-navs">
            <Link to="/Leadership">Leadership</Link>
          </li>
          <li className="header-navs">
            <Link to="/Tracks">Tracks</Link>
          </li>
          <li className="header-navs">
            <Link to="/Events">Events</Link>
          </li>
        </ol>
      </div>
      <div className="headerbtn">
        <button className="btnn">
          <Link to="/">Register</Link>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Header;
