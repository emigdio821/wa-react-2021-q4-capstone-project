import React from "react";
import PropTypes from "prop-types";
import "./Grid.scss";

const GridItem = ({ item }) => {
  const {
    name,
    main_image: { url },
  } = item;

  return (
    <div
      className="grid-item  zoom-in"
      style={{ backgroundImage: `url("${url}")` }}
    >
      <div className="item-content">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default GridItem;

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};
