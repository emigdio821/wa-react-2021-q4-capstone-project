import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import styles from './Form.module.scss';

const CheckoutForm = () => {
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
    <>
      <div className={styles['form-container']}>
        <h3 className={styles['info-title']}>Information</h3>
        <form className={styles.form} id="contact">
          <div className={styles['horizontal-group']}>
            <input placeholder="Name" type="text" required />
            <input placeholder="Email address" type="email" required />
            <input placeholder="ZIP code" type="number" required />
          </div>
          <textarea placeholder="Order notes..." />
        </form>
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
      </div>
    </>
  );
};

export default CheckoutForm;
