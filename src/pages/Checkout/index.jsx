import React, { useState } from 'react';
import NotFound from 'pages/NotFound';
import { useGlobalContext } from 'context/GlobalContext';
import CheckoutTable from './Table';
import CheckoutForm from './Form';
import SuccessOrder from './SuccessOrder';
import styles from './Checkout.module.scss';

const Checkout = () => {
  const { cartItems } = useGlobalContext();
  const [orderDetails, setOrderDetails] = useState({});

  return (
    <div className={styles['checkout-container']}>
      {!cartItems.length && !Object.keys(orderDetails).length ? (
        <NotFound msg="nothing to checkout" noHeight />
      ) : (
        <>
          {Object.keys(orderDetails).length ? (
            <SuccessOrder orderDetails={orderDetails} />
          ) : (
            <>
              <h1 className={styles['checkout-title']}>Checkout</h1>
              <div className={styles['checkout-items']}>
                <CheckoutTable />
                <CheckoutForm checkoutCallback={setOrderDetails} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
