import React from 'react';
import classNames from 'classnames';
import { cart } from 'context/Types';
import QtySelect from 'components/QtySelect';
import formatCurrency from 'helpers/currency';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './Table.module.scss';

const CartTable = () => {
  let totalAmount = 0;
  const { dispatch, cartItems } = useGlobalContext();

  const handleDeleteAll = () => {
    dispatch({ type: cart.clearItems });
  };

  const pNameStyles = {
    [styles['td__p-name']]: true,
    [styles['semibold-font']]: true,
  };

  const deleteAllBtnClasses = {
    [styles.btn]: true,
    [styles['delete__all-btn']]: true,
  };

  return (
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
                  <span className={classNames(pNameStyles)}>{data.name}</span>
                </td>
                <td>{formatCurrency(data.price)}</td>
                <td className={styles['qty-td']}>
                  <QtySelect id={id} qty={qty} opts={stock} />
                </td>
                <td>{formatCurrency(qty * data.price)}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2">&nbsp;</td>
            <td>
              <button
                type="button"
                className={classNames(deleteAllBtnClasses)}
                onClick={handleDeleteAll}
              >
                Remove all
              </button>
            </td>
            <td className={styles.total}>
              Total:
              {' '}
              {formatCurrency(totalAmount)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
