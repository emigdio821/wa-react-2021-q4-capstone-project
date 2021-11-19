import React from 'react';
import PropTypes from 'prop-types';
import SuccessLogo from 'img/undraw_confirmed.svg';
import styles from './SuccessOrder.module.scss';

const SuccessOrder = ({ orderDetails }) => (
  <div className={styles['succes-container']}>
    <img src={SuccessLogo} alt="success_logo" width={240} />
    <h1 className={styles['succes-title']}>
      <span>Order confirmed</span>
    </h1>
    <div className={styles['details-container']}>
      We have sent an email to
      {' '}
      <span className={styles['bold-font']}>{orderDetails.email}</span>
      {' '}
      with
      your order details.
      <div className={styles['thanks-container']}>
        Thank you for choosing us,
      </div>
      <div>
        THE
        <span className={styles['bold-font']}>COOL</span>
        HOUSE Team.
      </div>
    </div>
  </div>
);

export default SuccessOrder;

SuccessOrder.propTypes = {
  orderDetails: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ordernotes: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
