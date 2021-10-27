import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiChevronDown } from 'react-icons/bi';
import formatCurrency from 'helpers/currency';
import classNames from 'classnames';
import styles from './Products.module.scss';

const ProductItem = ({ item }) => {
  const {
    name,
    description,
    category: { slug: categorySlug },
    price,
    mainimage: { url, alt },
  } = item;

  const [showDescription, setShowDescription] = useState(false);
  const onShowDescription = () => setShowDescription(!showDescription);

  const productItemClasses = {
    [styles['product-item']]: true,
  };

  const descriptionBtnClasses = {
    [styles['description-btn']]: true,
    [styles['description-shown']]: showDescription,
  };

  return (
    <div className={classNames(productItemClasses)}>
      <div className={styles['product__img-container']}>
        <img src={url} alt={alt} className={styles['product-img']} />
      </div>
      <h2 className={styles['product-title']} title={name}>
        {name}
      </h2>
      <div className={styles['category-container']}>
        <span className={styles['category-name']}>
          {categorySlug.replaceAll('--', ' & ')}
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

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string.isRequired }),
    ).isRequired,
    category: PropTypes.shape({ slug: PropTypes.string }).isRequired,
    price: PropTypes.number.isRequired,
    mainimage: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
