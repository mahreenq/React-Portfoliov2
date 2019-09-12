import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = ({ path }) => {
  return (
    <div className="header">
      <div className="nav">
        {path === "/" ? null : <Link to="/"> HOME </Link>}
        <Link to="/about">
          <div className="headerLink">ABOUT</div>
        </Link>
        <Link to="/showcase">SHOWCASE</Link>
      </div>
    </div>
  );
};

export default Header;

// <Link to='/resume' >RESU</Link>
