import React from 'react';
import { BiSearchAlt, BiCartAlt } from 'react-icons/bi';
import classNames from 'classnames';
import styles from './Navbar.module.scss';

function NavItems() {
  const handleSearchBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert('The search functionality is WIP 🤠');
  };

  const handleCartBtnClick = () => {
    // eslint-disable-next-line no-alert
    alert('The shopping cart is WIP 🤠');
  };

  const searchBtnStyles = {
    [styles.btn]: true,
    [styles.primary]: true,
    [styles['search-btn']]: true,
  };

  const cartBtnStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles['shopping-cart']]: true,
  };

  return (
    <div className={styles['nav-btn-container']}>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className={styles['search-input']}
        />
        <button
          type="button"
          className={classNames(searchBtnStyles)}
          onClick={handleSearchBtnClick}
        >
          <BiSearchAlt />
        </button>
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
}

export default NavItems;
