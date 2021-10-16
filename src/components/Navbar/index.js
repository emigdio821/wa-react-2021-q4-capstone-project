import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu } from "react-icons/bi";
import "./Navbar.scss";

const Navbar = ({ isDisabled }) => {
  const [scrolledNav, setScrolledNav] = useState(false);
  const onWindowScroll = () => {
    if (window.scrollY >= 10) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
  }, []);

  return (
    <nav className={scrolledNav ? "nav-scrolled" : undefined}>
      <Link className="logo uppercase" to="/">
        <BiHomeHeart />
        <span>
          ・The<span className="bold-font">cool</span>house
        </span>
      </Link>
      <div className="hamb-container">
        <BiMenu className="hamb-icon" />
      </div>
      <div className="nav-btn-container">
        <input
          type="text"
          placeholder={!isDisabled ? "Search..." : ""}
          className="search-input"
          disabled={isDisabled}
        />
        <BiSearchAlt className="search-icon" />
        {isDisabled ? (
          <Link
            to="/"
            className="btn shopping-cart disabled"
            onClick={(event) => event.preventDefault()}
          >
            <BiCartAlt />
          </Link>
        ) : (
          <Link className="btn shopping-cart" to="/">
            <BiCartAlt />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  isDisabled: PropTypes.bool,
};

Navbar.defaultProps = {
  isDisabled: false,
};
