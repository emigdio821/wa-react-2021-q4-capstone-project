import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cart } from 'context/Types';
import { BiCartAlt, BiCheck } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import styles from './AddToCartBtn.module.scss';

const AddToCartBtn = ({ item }) => {
  const {
    id: itemId,
    data: { stock },
  } = item;
  const selectRef = useRef(null);
  const [currStock, setCurrStock] = useState(0);
  const { dispatch, cartItems } = useGlobalContext();
  const [addedToCart, setAddedToCart] = useState(false);
  const outOfStock = stock === 0 || currStock === stock;

  const addedToCartDelay = () => {
    setAddedToCart(true);
    const timer = setTimeout(() => {
      setAddedToCart(false);
    }, 600);

    return () => clearTimeout(timer);
  };

  const handleAddToCartClick = () => {
    if (addedToCart) return;
    const qty = Number(selectRef.current.value);
    dispatch({ type: cart.addItem, payload: { item, qty } });
    addedToCartDelay();
  };

  const selectOptions = (opts) => {
    const options = [];
    for (let i = 1; i <= opts; i += 1) {
      options.push(i);
    }

    return options;
  };

  const cartStyles = {
    [styles.btn]: true,
    [styles.cart]: true,
    [styles.yellow]: true,
  };

  useEffect(() => {
    const existingItem = cartItems.find(
      ({ id: carItemId }) => carItemId === itemId,
    );

    if (existingItem) {
      const { qty } = existingItem;
      setCurrStock(qty);
    }
  }, [cartItems]);

  return (
    <div className={styles['cart-container']}>
      {!outOfStock && (
        <select
          ref={selectRef}
          name="cartQtySelect"
          defaultValue={1}
          className={styles['cart__qty-select']}
        >
          {selectOptions(stock - currStock).map((opt) => (
            <option key={`${opt}-qty-option`} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}
      <button
        type="button"
        onClick={handleAddToCartClick}
        className={classNames(cartStyles)}
        disabled={outOfStock}
      >
        {outOfStock ? (
          <>
            Out of stock
            <BiCartAlt />
          </>
        ) : (
          <>
            {addedToCart ? (
              <>
                Added
                <BiCheck />
              </>
            ) : (
              <>
                Add to cart
                <BiCartAlt />
              </>
            )}
          </>
        )}
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
