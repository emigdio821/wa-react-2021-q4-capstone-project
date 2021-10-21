import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import GlobalContext from "context/GlobalContext";
import useScrollListener from "hooks/useScrollListener";
import { BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu } from "react-icons/bi";
import styles from "./Navbar.module.scss";

const Navbar = ({ isDisabled, currentPage }) => {
  const scroll = useScrollListener();
  const [scrolledNav, setScrolledNav] = useState(false);
  const [fixedNavBg, setFixedNavBg] = useState(false);
  const { setCurrentPage } = useContext(GlobalContext);
  const navClasses = {
    [styles["main-navbar"]]: true,
    [styles["fixed__nav-bg"]]: fixedNavBg,
    [styles["static__nav-bg"]]:
      currentPage !== "/" && !scrolledNav && !fixedNavBg,
    [styles["dynamic-nav"]]: scrolledNav && currentPage !== "/",
  };

  const cartBtnStyles = {
    btn: true,
    disabled: isDisabled,
    [styles["shopping-cart"]]: true,
  };

  const onShowHomePage = () => {
    setCurrentPage("/");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scroll.y > 80 ? setFixedNavBg(true) : setFixedNavBg(false);
    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  }, [scroll.lastY, scroll.y]);

  return (
    <nav className={classNames(navClasses)}>
      <div
        className={`${styles["logo"]} ${styles["uppercase"]}`}
        onClick={onShowHomePage} /*to="/"*/
      >
        <BiHomeHeart role="img" />
        <span>
          ・The<span className={styles["bold-font"]}>cool</span>house
        </span>
      </div>
      <div className={styles["hamb-container"]}>
        <BiMenu className={styles["hamb-icon"]} />
      </div>
      <div className={styles["nav-btn-container"]}>
        <input
          type="text"
          placeholder={!isDisabled ? "Search..." : ""}
          className={styles["search-input"]}
          disabled={isDisabled}
        />
        <BiSearchAlt className={styles["search-icon"]} />
        {isDisabled ? (
          <div
            // to="/"
            className={classNames(cartBtnStyles)}
            onClick={(event) => event.preventDefault()}
          >
            <BiCartAlt />
          </div>
        ) : (
          <div className={classNames(cartBtnStyles)} to="/">
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
