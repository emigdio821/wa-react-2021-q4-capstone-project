import React from 'react';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import CheckoutTable from './Table';
import CheckoutForm from './Form';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const { cartItems } = useGlobalContext();

  const backCartBtnStyles = {
    [styles.btn]: true,
    [styles.primary]: true,
    [styles['back__to-cart-btn']]: true,
  };

  const placeOrderBtnStyles = {
    [styles.btn]: true,
    [styles.primary]: true,
    [styles['place__order-btn']]: true,
  };

  return (
    <div className={styles['checkout-container']}>
      <div className={styles['checkout-items']}>
        {!cartItems.length ? (
          <NotFound msg="nothing to checkout" noHeight />
        ) : (
          <>
            <h1>Checkout</h1>
            <CheckoutForm />
            <CheckoutTable />
            <div className={styles['back__to-cart-container']}>
              <Link to="/cart" className={classNames(backCartBtnStyles)}>
                <BiArrowBack />
                Go back to cart
              </Link>
              <button
                type="button"
                className={classNames(placeOrderBtnStyles)}
                disabled
              >
                Place order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
