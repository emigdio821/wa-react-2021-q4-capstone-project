import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './Cart.module.scss';

const Cart = () => {
  const { cartItems } = useGlobalContext();
  const emptyCart = cartItems.length === 0;

  const handleCartClick = (e) => {
    if (emptyCart) {
      e.preventDefault();
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
      {cartItems.length > 0 && (
        <span className={styles.badge}>{cartItems.length}</span>
      )}
    </Link>
  );
};

export default Cart;
