import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { BiCheckCircle, BiHomeHeart } from 'react-icons/bi';
import styles from './SuccessOrder.module.scss';

const SuccessOrder = ({ orderDetails }) => {
  const backToHomeClasses = {
    [styles.btn]: true,
    [styles.primary]: true,
    [styles['back__home-btn']]: true,
  };

  return (
    <div className={styles['succes-container']}>
      <div className={styles['success__main-container']}>
        <div className={styles['img-container']}>
          <BiCheckCircle style={{ color: '#6d8299' }} />
        </div>
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
          <div>
            <BiHomeHeart className={styles['house-logo']} />
          </div>
          <Link to="/" className={classNames(backToHomeClasses)}>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;

SuccessOrder.propTypes = {
  orderDetails: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ordernotes: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
