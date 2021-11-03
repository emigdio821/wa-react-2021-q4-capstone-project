import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cart } from 'context/Types';
import { BiCartAlt } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './AddToCartBtn.module.scss';

const AddToCartBtn = ({ item }) => {
  const {
    id: itemId,
    data: { stock },
  } = item;
  const { dispatch, cartItems } = useGlobalContext();
  const [itemQty, setItemQty] = useState(0);
  const outOfStock = stock === 0 || itemQty === stock;

  const handleAddToCartClick = () => {
    dispatch({ type: cart.addItem, payload: item });
  };

  const cartStyles = {
    [styles.btn]: true,
    [styles.cart]: true,
    [styles.yellow]: true,
  };

  useEffect(() => {
    const itemExists = cartItems.find(
      ({ id: carItemId }) => carItemId === itemId,
    );

    if (itemExists) {
      const { qty } = itemExists;
      setItemQty(qty);
    }
  }, [cartItems]);

  return (
    <div className={styles['cart-container']}>
      <button
        type="button"
        disabled={outOfStock}
        className={classNames(cartStyles)}
        onClick={handleAddToCartClick}
      >
        {outOfStock ? <span>Out of stock</span> : <span>Add to cart</span>}
        <BiCartAlt />
      </button>
    </div>
  );
};

export default AddToCartBtn;

AddToCartBtn.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      short_description: PropTypes.string,
      stock: PropTypes.number.isRequired,
      mainimage: PropTypes.shape({
        url: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      category: PropTypes.shape({ slug: PropTypes.string.isRequired })
        .isRequired,
    }),
  }).isRequired,
};
