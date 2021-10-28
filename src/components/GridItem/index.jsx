import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'helpers/currency';
import { BiCartAlt, BiChevronDown } from 'react-icons/bi';
import classNames from 'classnames';
import styles from './GridItem.module.scss';

const GridItem = ({ item }) => {
  const {
    name,
    price,
    description,
    mainimage: { url, alt },
    category: { slug: categorySlug },
  } = item;

  const [showDescription, setShowDescription] = useState(false);
  const onShowDescription = () => setShowDescription(!showDescription);

  const cartStyles = {
    [styles.btn]: true,
    [styles.yellow]: true,
    [styles.cart]: true,
  };

  const descriptionBtnClasses = {
    [styles['description-btn']]: true,
    [styles['description-shown']]: showDescription,
  };

  return (
    <div className={styles['grid-item']}>
      <img src={url} alt={alt} className={styles['grid-img']} />
      <h2 className={styles['grid-item-title']} title={name}>
        {name}
      </h2>
      <div className={styles['category-container']}>
        <span className={styles['category-name']}>
          {categorySlug.replaceAll('--', ' & ')}
        </span>
      </div>
      <div className={styles['cart-container']}>
        <span className={classNames(cartStyles)}>
          Add to cart
          <BiCartAlt />
        </span>
      </div>
      {description.map(({ text }) => (
        <div
          key={`${text}-description`}
          className={styles['description-container']}
        >
          <button
            type="button"
            className={classNames(descriptionBtnClasses)}
            onClick={onShowDescription}
          >
            Description
            {' '}
            <BiChevronDown className={styles['description-icon']} />
          </button>
          {showDescription && (
            <p className={styles['product-description']}>{text}</p>
          )}
        </div>
      ))}
      <div className={styles['price-container']}>
        <span className={styles.price}>{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string.isRequired }),
    ).isRequired,
    category: PropTypes.shape({ slug: PropTypes.string.isRequired }).isRequired,
    price: PropTypes.number.isRequired,
    mainimage: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  }).isRequired,
};
