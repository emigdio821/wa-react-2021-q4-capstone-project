import React from 'react';
import NotFound from 'pages/NotFound';
import { useGlobalContext } from 'context/GlobalContext';
import CheckoutTable from './Table';
import CheckoutForm from './Form';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const { cartItems } = useGlobalContext();

  return (
    <div className={styles['checkout-container']}>
      {!cartItems.length ? (
        <NotFound msg="nothing to checkout" noHeight />
      ) : (
        <>
          <h1 className={styles['checkout-title']}>Checkout</h1>
          <div className={styles['checkout-items']}>
            <CheckoutTable />
            <CheckoutForm />
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
