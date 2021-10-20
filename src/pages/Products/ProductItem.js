import React, { useState } from "react";
import PropTypes from "prop-types";
import { BiChevronDown } from "react-icons/bi";
import { formatCurrency } from "helpers/currency";
import classNames from "classnames";
import "./Products.scss";

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
    "product-item": true,
    "product__item-height": showDescription,
  };
  const descriptionClasses = {
    "description-btn": true,
    "description-shown": showDescription,
  };

  return (
    <div className={classNames(productItemClasses)}>
      <div className="product__img-container">
        <img src={url} alt={alt} className="product-img" />
      </div>
      <h2 className="product-title" title={name}>
        {name}
      </h2>
      <div className="category-container">
        <span className="category-name">{categorySlug}</span>
      </div>
      <div className="description-container">
        {description.map(({ text }) => (
          <>
            <button
              className={classNames(descriptionClasses)}
              onClick={onShowDescription}
            >
              Description <BiChevronDown className="description-icon" />
            </button>
            {showDescription && (
              <p key={text} className="product-description">
                {text}
                {/* Im the description */}
              </p>
            )}
          </>
        ))}
      </div>
      <div className="price-container">
        <span className="price">{formatCurrency(price)}</span>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.object,
};
