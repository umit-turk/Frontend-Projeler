import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-area">
      <div className="logo">
        <Link to="/">
          <img src="https://cdnassets.panda.org/_skins/international/img/logo.png" />
        </Link>
      </div>
      <div className="nav-links">
        <div className="about">
          <Link to="/about">Who We Are</Link>
        </div>
        <div className="latest">
          <Link to="/latest">Latest</Link>
        </div>
        <div className="contact">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
