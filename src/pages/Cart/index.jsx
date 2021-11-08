import React from 'react';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import { Link } from 'react-router-dom';
import { BiCreditCard } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import CartTable from './Table';
import styles from './Cart.module.scss';

const Cart = () => {
  const { cartItems } = useGlobalContext();

  const containerStyles = {
    [styles['cart-container']]: true,
    [styles['container-loading']]: false,
    [styles['container-not-found']]: false,
  };

  const checkoutBtnStyles = {
    [styles.btn]: true,
    [styles.primary]: true,
    [styles['checkout-btn']]: true,
  };

  return (
    <div className={classNames(containerStyles)}>
      {!cartItems.length ? (
        <NotFound msg="there's nothing in your cart" noHeight />
      ) : (
        <>
          <h1>Shopping cart</h1>
          <CartTable />
          <div className={styles['checkout-container']}>
            <Link to="/checkout" className={classNames(checkoutBtnStyles)}>
              Proceed to checkout
              <BiCreditCard />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
