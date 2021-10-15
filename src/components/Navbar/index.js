import React from "react";
import { Link } from "react-router-dom";
import {
  BiHomeHeart,
  BiSearchAlt,
  BiCartAlt,
  BiGridHorizontal,
} from "react-icons/bi";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-link logo uppercase" to="/">
        <BiHomeHeart />
        <span>
          ・The<span className="bold-font">cool</span>house
        </span>
      </Link>
      <div className="hamb-container">
        <BiGridHorizontal className="hamb-icon" />
      </div>
      <div className="nav-btn-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <BiSearchAlt className="search-icon" />
        <Link className="btn shopping-cart" to="/shopping_cart">
          <BiCartAlt />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
