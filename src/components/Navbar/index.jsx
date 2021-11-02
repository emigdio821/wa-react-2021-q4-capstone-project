import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { product } from 'context/Types';
import { HOME_PATH } from 'utils/constants';
import { useGlobalContext } from 'context/GlobalContext';
import { Link, useLocation } from 'react-router-dom';
import useScrollListener from 'utils/hooks/useScrollListener';
import { BiHomeHeart, BiMenu } from 'react-icons/bi';
import HambContent from './HambContent';
import styles from './Navbar.module.scss';
import NavItems from './NavItems';

const Navbar = () => {
  const scroll = useScrollListener();
  const [scrolledNav, setScrolledNav] = useState(false);
  const [fixedNavBg, setFixedNavBg] = useState(false);
  const [showHambMenu, setShowHambMenu] = useState(false);
  const [renderHambMenu, setRenderHambMenu] = useState(showHambMenu);
  const { dispatch } = useGlobalContext();
  const { pathname } = useLocation();
  const navClasses = {
    [styles['main-navbar']]: true,
    [styles['fixed__nav-bg']]: fixedNavBg,
    [styles['static__nav-bg']]:
      pathname !== HOME_PATH && !scrolledNav && !fixedNavBg,
    [styles['dynamic-nav']]: scrolledNav && pathname !== HOME_PATH,
  };

  const onShowHomePage = () => {
    dispatch({ type: product.clearFilters });
  };

  const onshowHambMenu = () => {
    setShowHambMenu(!showHambMenu);
  };

  const onAnimationEnd = () => {
    if (!showHambMenu) setRenderHambMenu(false);
  };

  useEffect(() => {
    if (showHambMenu) setRenderHambMenu(true);
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
    scroll.y > 80 ? setFixedNavBg(true) : setFixedNavBg(false);
    if (scroll.y > 80 && scroll.y - scroll.lastY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  }, [scroll.lastY, scroll.y, showHambMenu]);

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
        <NavItems setHambMenu={setShowHambMenu} />
      </nav>
      {renderHambMenu && (
        <HambContent
          show={showHambMenu}
          callback={onshowHambMenu}
          animationEnd={onAnimationEnd}
        >
          <NavItems setHambMenu={setShowHambMenu} />
        </HambContent>
      )}
    </>
  );
};

export default Navbar;
