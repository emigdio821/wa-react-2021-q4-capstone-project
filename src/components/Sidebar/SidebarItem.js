import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BiCheck } from "react-icons/bi";

const SidebarItem = ({ item }) => {
  const { name } = item;
  const [activeFilter, setActiveFilter] = useState(false);

  const onFilterClick = () => {
    setActiveFilter(!activeFilter);
  };

  const filterClasses = {
    "sidebar-item": true,
    "active-filter": activeFilter,
  };

  return (
    <li className={classNames(filterClasses)} onClick={onFilterClick}>
      {activeFilter && <BiCheck />}
      <span className="sidebar__item-name">{name}</span>
    </li>
  );
};

export default SidebarItem;

SidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
};
