import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GlobalContext from 'context/GlobalContext';
import useScrollListener from 'hooks/useScrollListener';
import {
  BiHomeHeart, BiSearchAlt, BiCartAlt, BiMenu,
} from 'react-icons/bi';
import HambContent from './HambContent';
import styles from './Navbar.module.scss';

const Navbar = ({ isDisabled }) => {
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
    [styles['cart__margin-top']]: showHambMenu,
  };

  const onShowHomePage = () => {
    clearProductFilter();
  };

  const handleCartBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert('The shopping cart is WIP :P');
  };

  const onshowHambMenu = () => {
    setShowHambMenu(!showHambMenu);
  };

  const navItems = (
    <div className={styles['nav-btn-container']}>
      <div>
        <input
          type="text"
          placeholder={!isDisabled ? 'Search...' : ''}
          className={styles['search-input']}
          disabled={isDisabled}
        />
        <button
          type="button"
          className={`${styles.btn} ${styles.primary} ${styles['search-btn']}`}
          disabled={isDisabled}
        >
          <BiSearchAlt />
        </button>
      </div>
      <button
        // to="/"
        type="button"
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
          type="button"
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

Navbar.propTypes = {
  isDisabled: PropTypes.bool,
};

Navbar.defaultProps = {
  isDisabled: true,
};
