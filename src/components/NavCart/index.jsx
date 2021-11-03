import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './NavCart.module.scss';

const NavCart = ({ setHambMenu }) => {
  const { cartItems } = useGlobalContext();
  const emptyCart = cartItems.length === 0;
  const itemsLength = cartItems.reduce((acc, { qty }) => acc + qty, 0);

  const handleCartClick = (e) => {
    if (emptyCart) {
      e.preventDefault();
    } else {
      setHambMenu(false);
    }
  };

  const cartBtnStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles.disabled]: emptyCart,
    [styles['no-decoration']]: true,
    [styles['shopping-cart']]: true,
  };

  return (
    <Link
      to="/cart"
      onClick={handleCartClick}
      className={classNames(cartBtnStyles)}
    >
      Cart
      <span>
        <BiCartAlt />
      </span>
      {!emptyCart && <span className={styles.badge}>{itemsLength}</span>}
    </Link>
  );
};

export default NavCart;

NavCart.propTypes = {
  setHambMenu: PropTypes.func.isRequired,
};
