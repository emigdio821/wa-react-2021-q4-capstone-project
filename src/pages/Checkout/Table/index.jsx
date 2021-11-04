import React from 'react';
import formatCurrency from 'helpers/currency';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './Table.module.scss';

const CheckoutTable = () => {
  let totalAmount = 0;
  const { cartItems } = useGlobalContext();

  return (
    <div className={styles['checkout-table']}>
      <h3 className={styles['summary-title']}>Summary</h3>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {cartItems.map((item) => {
            const { id, data, qty } = item;
            totalAmount += data.price * qty;
            return (
              <tr key={`${id}-cart-item`}>
                <td className={styles['semibold-font']}>{data.name}</td>
                <td>{qty}</td>
                <td>{formatCurrency(qty * data.price)}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="2">&nbsp;</td>
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

export default CheckoutTable;
