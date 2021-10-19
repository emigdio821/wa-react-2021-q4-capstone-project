import React from "react";
import PropTypes from "prop-types";
import "./Featured.scss";

const FeaturedItem = ({ item }) => {
  const {
    name,
    alt,
    category: { slug: categorySlug },
    price,
    mainimage: { url },
  } = item;

  return (
    <div className="featured-item">
      <img src={url} alt={alt} className="featured-img" />
      <div className="category-container">
        <span className="category-name">{categorySlug}</span>
      </div>
      <h3 className="featured-item-title" title={name}>
        {name}
      </h3>
      <div className="price-container">
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default FeaturedItem;

FeaturedItem.propTypes = {
  item: PropTypes.object.isRequired,
};
