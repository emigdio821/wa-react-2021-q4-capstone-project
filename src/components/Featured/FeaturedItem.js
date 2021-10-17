import React from "react";
import PropTypes from "prop-types";
import "./Featured.scss";

const FeaturedItem = ({ item }) => {
  const {
    name,
    mainimage: { url },
  } = item;

  return (
    <div
      className="featured-item"
      style={{ backgroundImage: `url("${url}")` }}
    >
      <div className="item-content">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default FeaturedItem;

FeaturedItem.propTypes = {
  item: PropTypes.object.isRequired,
};
