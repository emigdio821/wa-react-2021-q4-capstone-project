import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import PageContext from "context/PageContext";
import useScrollListener from "hooks/useScrollListener";
import { BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu } from "react-icons/bi";
import "./Navbar.scss";

const Navbar = ({ isDisabled, currentPage }) => {
  const scroll = useScrollListener();
  const [scrolledNav, setScrolledNav] = useState(false);
  const [fixedNavBg, setFixedNavBg] = useState(false);
  const { setCurrentPage } = useContext(PageContext);
  const navClasses = {
    "main-navbar": true,
    "fixed__nav-bg": fixedNavBg,
    "fixed-nav": currentPage === "/",
    "static__nav-bg": currentPage !== "/" && !scrolledNav && !fixedNavBg,
  };

  const onShowHomePage = () => {
    setCurrentPage("/");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scroll.y > 80 ? setFixedNavBg(true) : setFixedNavBg(false);
    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledNav(true);
      document.getElementById("App").classList.add("app-scrolled");
    } else {
      setScrolledNav(false);
      document.getElementById("App").classList.remove("app-scrolled");
    }
  }, [scroll.lastY, scroll.y]);

  return (
    <nav className={classNames(navClasses)}>
      <div className="logo uppercase" onClick={onShowHomePage} /*to="/"*/>
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
