import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu } from "react-icons/bi";
import PageContext from "context/PageContext";
import "./Navbar.scss";

const Navbar = ({ isDisabled, currentPage }) => {
  const [scrolledNav, setScrolledNav] = useState(false);
  const { setCurrentPage } = useContext(PageContext);
  const navClasses = {
    "nav-scrolled": scrolledNav,
    "static__nav-bg": currentPage !== "/" && !scrolledNav,
  };

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
    <nav className={classNames(navClasses)}>
      <div
        className="logo uppercase"
        onClick={() => setCurrentPage("/")} /*to="/"*/
      >
        <BiHomeHeart role="img" />
        <span>
          ・The<span className="bold-font">cool</span>house
        </span>
      </div>
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
          <div
            // to="/"
            className="btn shopping-cart disabled"
            onClick={(event) => event.preventDefault()}
          >
            <BiCartAlt />
          </div>
        ) : (
          <div className="btn shopping-cart" to="/">
            <BiCartAlt />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  isDisabled: PropTypes.bool,
  currentPage: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  isDisabled: true,
  currentPage: "/",
};
