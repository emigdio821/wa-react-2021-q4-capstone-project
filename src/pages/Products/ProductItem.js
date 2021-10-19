import React from "react";
import PropTypes from "prop-types";
import "./Products.scss";

const ProductItem = ({ item }) => {
  const {
    name,
    description,
    category: { slug: categorySlug },
    price,
    mainimage: { url, alt },
  } = item;

  return (
    <div className="product-item">
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
          <p key={text} className="product-description">
            {text}
          </p>
        ))}
      </div>
      <div className="price-container">
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  item: PropTypes.object,
};
