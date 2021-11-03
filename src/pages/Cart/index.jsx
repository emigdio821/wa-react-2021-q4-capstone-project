import React from 'react';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import formatCurrency from 'helpers/currency';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './Cart.module.scss';

const Cart = () => {
  const { cartItems } = useGlobalContext();
  const containerStyles = {
    [styles['cart-container']]: true,
    [styles['container-loading']]: false,
    [styles['container-not-found']]: false,
  };

  console.log(cartItems);

  return (
    <div className={classNames(containerStyles)}>
      {!cartItems.length ? (
        <NotFound msg="there's nothing in your cart" noHeight />
      ) : (
        <div className={styles['item-container']}>
          <h1>Shopping cart</h1>
          <div className={styles['cart-table']}>
            {/* <h2>Your products</h2> */}
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Price per unit</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
                {cartItems.map(({ id, data, qty }) => (
                  <tr key={`${id}-cart-item`}>
                    <td>{data.name}</td>
                    <td>{formatCurrency(data.price)}</td>
                    <td>{qty}</td>
                    <td>{formatCurrency(qty * data.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
