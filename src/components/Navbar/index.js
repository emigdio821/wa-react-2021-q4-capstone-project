import React, { useEffect, useState, useContext } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import HambContent from "./HambContent";
import GlobalContext from "context/GlobalContext";
import useScrollListener from "hooks/useScrollListener";
import { BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu } from "react-icons/bi";
import styles from "./Navbar.module.scss";

const Navbar = ({ isDisabled, currentPage }) => {
  const scroll = useScrollListener();
  const [scrolledNav, setScrolledNav] = useState(false);
  const [fixedNavBg, setFixedNavBg] = useState(false);
  const [showHambMenu, setShowHambMenu] = useState(false);
  const { setCurrentPage, clearProductFilter } = useContext(GlobalContext);
  const navClasses = {
    [styles["main-navbar"]]: true,
    [styles["fixed__nav-bg"]]: fixedNavBg,
    [styles["static__nav-bg"]]:
      currentPage !== "/" && !scrolledNav && !fixedNavBg,
    [styles["dynamic-nav"]]: scrolledNav && currentPage !== "/",
  };

  const cartBtnStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles["shopping-cart"]]: true,
    [styles["cart__margin-top"]]: showHambMenu,
  };

  const onShowHomePage = () => {
    setCurrentPage("/");
    clearProductFilter();
    window.scrollTo(0, 0);
  };

  const handleCartBtnClick = () => {
    alert("The shopping cart is WIP :P");
  };

  const onshowHambMenu = () => {
    setShowHambMenu(!showHambMenu);
  };

  const navItems = (
    <div className={styles["nav-btn-container"]}>
      <div>
        <input
          type="text"
          placeholder={!isDisabled ? "Search..." : ""}
          className={styles["search-input"]}
          disabled={isDisabled}
        />
        <button
          className={`${styles.btn} ${styles.primary} ${styles["search-btn"]}`}
          disabled={isDisabled}
        >
          <BiSearchAlt />
        </button>
      </div>
      <button
        // to="/"
        className={classNames(cartBtnStyles)}
        onClick={handleCartBtnClick}
        disabled={isDisabled}
      >
        Cart
        <span>
          <BiCartAlt />
        </span>
      </button>
    </div>
  );

  useEffect(() => {
    scroll.y > 80 ? setFixedNavBg(true) : setFixedNavBg(false);
    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  }, [scroll.lastY, scroll.y]);

  return (
    <>
      <nav className={classNames(navClasses)}>
        <div
          href="/"
          className={`${styles["logo"]} ${styles["uppercase"]}`}
          onClick={onShowHomePage} /*to="/"*/
        >
          <BiHomeHeart role="img" />
          <span>
            ・The<span className={styles["bold-font"]}>cool</span>house
          </span>
        </div>
        <div
          className={styles["hamb__icon-container"]}
          onClick={onshowHambMenu}
        >
          <BiMenu className={styles["hamb-icon"]} />
        </div>
        {navItems}
      </nav>
      <HambContent show={showHambMenu} callback={onshowHambMenu}>
        {navItems}
      </HambContent>
    </>
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
