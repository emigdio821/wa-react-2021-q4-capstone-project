import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Cart from 'components/Cart';
import { BiSearchAlt } from 'react-icons/bi';
import { SEARCH_PATH } from 'utils/constants';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

const NavItems = ({ setHambMenu }) => {
  const [inputVal, setInputVal] = useState('');
  const searchBtn = useRef(null);
  const { pathname } = useLocation();

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
    [styles.disabled]: !inputVal,
    [styles['search-btn']]: true,
    [styles['no-decoration']]: true,
  };

  useEffect(() => {
    if (pathname !== SEARCH_PATH) setInputVal('');
  }, [pathname]);

  return (
    <div className={styles['nav-btn-container']}>
      <div style={{ display: 'flex' }}>
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
          className={classNames(searchBtnStyles, styles['search-btn'])}
        >
          <BiSearchAlt />
        </Link>
      </div>
      <Cart />
    </div>
  );
};

export default NavItems;

NavItems.propTypes = {
  setHambMenu: PropTypes.func.isRequired,
};
