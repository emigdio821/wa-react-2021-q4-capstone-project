import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { SEARCH_PATH } from 'utils/constants';
import { Link, useLocation } from 'react-router-dom';
import { BiSearchAlt, BiCartAlt } from 'react-icons/bi';
import styles from './Navbar.module.scss';

const NavItems = ({ setHambMenu }) => {
  const [inputVal, setInputVal] = useState('');
  const searchBtn = useRef(null);
  const { pathname } = useLocation();

  const handleCartBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert('The shopping cart is WIP 🤠');
  };

  const handleSearchInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearchBtnClick = (e) => {
    if (!inputVal) {
      e.preventDefault();
    }

    setHambMenu(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchBtn.current.click();
    }
  };

  const searchBtnStyles = {
    [styles.btn]: true,
    [styles.primary]: true,
  };

  const cartBtnStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles['shopping-cart']]: true,
  };

  useEffect(() => {
    if (pathname !== SEARCH_PATH) setInputVal('');
  }, [pathname]);

  return (
    <div className={styles['nav-btn-container']}>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={inputVal}
          onKeyDown={handleInputKeyDown}
          onChange={handleSearchInputChange}
          className={styles['search-input']}
        />
        <Link
          ref={searchBtn}
          to={`/search?q=${inputVal}`}
          onClick={handleSearchBtnClick}
          className={classNames(styles['no-decoration'], styles['search-btn'])}
        >
          <button
            type="button"
            className={classNames(searchBtnStyles)}
            disabled={!inputVal}
          >
            <BiSearchAlt />
          </button>
        </Link>
      </div>
      <button
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
};

export default NavItems;

NavItems.propTypes = {
  setHambMenu: PropTypes.func.isRequired,
};
