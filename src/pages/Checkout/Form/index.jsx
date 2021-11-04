import React from 'react';
import styles from './Form.module.scss';

const CheckoutForm = () => (
  <>
    <h3 className={styles['info-title']}>Information</h3>
    <form className={styles.form} id="contact">
      <div className={styles['horizontal-group']}>
        <input placeholder="Name" type="text" required />
        <input placeholder="Email address" type="email" required />
        <input placeholder="ZIP code" type="number" required />
      </div>
      <textarea placeholder="Order notes..." />
    </form>
  </>
);

export default CheckoutForm;
