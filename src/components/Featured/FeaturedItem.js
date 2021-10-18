import React from "react";
import PropTypes from "prop-types";
import "./Featured.scss";

const FeaturedItem = ({ item }) => {
  const {
    name,
    alt,
    mainimage: { url },
  } = item;

  return (
    <div className="featured-item">
      <img src={url} alt={alt} className="featured-img" />
      <div className="featured-item-title">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default FeaturedItem;

FeaturedItem.propTypes = {
  item: PropTypes.object.isRequired,
};
