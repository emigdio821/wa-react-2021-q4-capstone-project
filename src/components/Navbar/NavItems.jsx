import React, { useState, useRef, memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavCart from 'components/NavCart';
import { BiSearchAlt } from 'react-icons/bi';
import styles from './Navbar.module.scss';

const NavItems = ({ setHambMenu }) => {
  const searchBtn = useRef(null);
  const [inputVal, setInputVal] = useState('');

  const handleSearchInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearchBtnClick = (e) => {
    if (!inputVal) {
      e.preventDefault();
    } else {
      setInputVal('');
      setHambMenu(false);
    }
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
      <NavCart setHambMenu={setHambMenu} />
    </div>
  );
};

export default memo(NavItems);

NavItems.propTypes = {
  setHambMenu: PropTypes.func.isRequired,
};
