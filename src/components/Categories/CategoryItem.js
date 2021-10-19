import React from "react";
import PropTypes from "prop-types";
import "./Categories.scss";

const CategoryItem = ({ item }) => {
  const {
    name,
    main_image: { url },
  } = item;

  return (
    <div
      className="categories-item  zoom-in"
      style={{ backgroundImage: `url("${url}")` }}
    >
      <div className="item-content">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
};
