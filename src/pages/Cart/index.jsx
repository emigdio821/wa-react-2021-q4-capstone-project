import React from 'react';
import classNames from 'classnames';
import NotFound from 'pages/NotFound';
import formatCurrency from 'helpers/currency';
import { BiCreditCard } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import QtySelect from 'components/QtySelect';
import styles from './Cart.module.scss';

const Cart = () => {
  let totalAmount = 0;
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
          <div className={styles['cart-table']}>
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                {cartItems.map((item) => {
                  const { id, data, qty } = item;
                  const {
                    stock,
                    mainimage: { alt, url },
                  } = data;
                  totalAmount += data.price * qty;
                  return (
                    <tr key={`${id}-cart-item`}>
                      <td className={styles['flex-td']}>
                        <img src={url} alt={alt} className={styles['td-img']} />
                        <span className={styles['semibold-font']}>
                          {data.name}
                        </span>
                      </td>
                      <td>{formatCurrency(data.price)}</td>
                      <td>
                        <QtySelect id={id} qty={qty} opts={stock} />
                      </td>
                      <td>{formatCurrency(qty * data.price)}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="3">&nbsp;</td>
                  <td className={styles.total}>
                    Total:
                    {' '}
                    {formatCurrency(totalAmount)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles['checkout-container']}>
            <button type="button" className={classNames(checkoutBtnStyles)}>
              Checkout
              <BiCreditCard />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
