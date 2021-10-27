import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import GlobalContext from 'context/GlobalContext';
import useScrollListener from 'utils/hooks/useScrollListener';
import {
  BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu,
} from 'react-icons/bi';
import HambContent from './HambContent';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const scroll = useScrollListener();
  const [scrolledNav, setScrolledNav] = useState(false);
  const [fixedNavBg, setFixedNavBg] = useState(false);
  const [showHambMenu, setShowHambMenu] = useState(false);
  const { clearProductFilter } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const navClasses = {
    [styles['main-navbar']]: true,
    [styles['fixed__nav-bg']]: fixedNavBg,
    [styles['static__nav-bg']]: pathname !== '/' && !scrolledNav && !fixedNavBg,
    [styles['dynamic-nav']]: scrolledNav && pathname !== '/',
  };

  const cartBtnStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles['shopping-cart']]: true,
  };

  const onShowHomePage = () => {
    clearProductFilter();
  };

  const handleCartBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert('The shopping cart is WIP 🤠');
  };

  const handleSearchBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert('The search functionality is WIP 🤠');
  };

  const onshowHambMenu = () => {
    setShowHambMenu(!showHambMenu);
  };

  const navItems = (
    <div className={styles['nav-btn-container']}>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className={styles['search-input']}
        />
        <button
          type="button"
          className={`${styles.btn} ${styles.primary} ${styles['search-btn']}`}
          onClick={handleSearchBtnClick}
        >
          <BiSearchAlt />
        </button>
      </div>
      <button
        // to="/"
        type="button"
        className={classNames(cartBtnStyles)}
        onClick={handleCartBtnClick}
      >
        Cart
        <span>
          <BiCartAlt />
        </span>
      </button>
    </div>
  );

  useEffect(() => {
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
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
        <Link
          to="/"
          className={`${styles.logo} ${styles.uppercase}`}
          onClick={onShowHomePage}
        >
          <BiHomeHeart role="img" />
          <span>
            ・The
            <span className={styles['bold-font']}>cool</span>
            house
          </span>
        </Link>
        <div className={styles['hamb__icon-container']}>
          <BiMenu className={styles['hamb-icon']} onClick={onshowHambMenu} />
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
