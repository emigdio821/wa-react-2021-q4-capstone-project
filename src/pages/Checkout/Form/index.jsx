import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cart } from 'context/Types';
import { Link } from 'react-router-dom';
import useForm from 'utils/hooks/useForm';
import { BiArrowBack } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import { formValues, validations } from './validations';
import styles from './Form.module.scss';

const CheckoutForm = ({ checkoutCallback }) => {
  const { dispatch } = useGlobalContext();

  const formCallback = (values) => {
    checkoutCallback(values);
    dispatch({ type: cart.clearItems });
  };

  const {
    handleFormChange, values, errors, handleFormSubmit,
  } = useForm({
    formValues,
    validations,
    formCallback,
  });

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
        <form
          id="checkout-form"
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          <div className={styles['horizontal-group']}>
            <div className={styles['name-container']}>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={handleFormChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div className={styles['email-container']}>
              <input
                name="email"
                type="text"
                value={values.email}
                placeholder="Email address"
                onChange={handleFormChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles['zip-container']}>
              <input
                type="text"
                name="zipcode"
                placeholder="ZIP code"
                value={values.zipcode}
                onChange={handleFormChange}
              />
              {errors.zipcode && (
                <p className={styles.error}>{errors.zipcode}</p>
              )}
            </div>
          </div>
          <textarea
            name="ordernotes"
            placeholder="Order notes..."
            onChange={handleFormChange}
            value={values.ordernotes}
          />
        </form>
        <div className={styles['back__to-cart-container']}>
          <Link to="/cart" className={classNames(backCartBtnStyles)}>
            <BiArrowBack />
            Go back to cart
          </Link>
          <button
            type="submit"
            form="checkout-form"
            className={classNames(placeOrderBtnStyles)}
          >
            Place order
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;

CheckoutForm.propTypes = {
  checkoutCallback: PropTypes.func.isRequired,
};
