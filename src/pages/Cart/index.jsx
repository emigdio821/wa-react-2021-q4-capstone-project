import React from 'react';
import Loader from 'components/Loader';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './Cart.module.scss';

const Cart = () => {
  const { cartItems } = useGlobalContext();
  const containerStyles = {
    [styles['cart-container']]: true,
    [styles['container-loading']]: false,
    [styles['container-not-found']]: false,
  };

  return (
    <div className={classNames(containerStyles)}>
      {false ? (
        <Loader />
      ) : (
        <>
          {!cartItems.length ? (
            <NotFound msg="there's nothing in your cart" noHeight />
          ) : (
            <div className={styles['item-container']}>
              <h1>Shopping cart</h1>
              {/* {results.map((item) => (
                <ProductItem key={item.id} item={item} productDesc />
              ))} */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
