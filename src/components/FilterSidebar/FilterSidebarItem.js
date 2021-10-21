import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BiCheck } from "react-icons/bi";
import GlobalContext from "context/GlobalContext";

const FilterSidebarItem = ({ item }) => {
  const {
    slugs,
    data: { name },
  } = item;
  const [activeFilter, setActiveFilter] = useState(false);
  const { setProductFiltered } = useContext(GlobalContext);

  const onFilterClick = () => {
    setActiveFilter(!activeFilter);
    setProductFiltered(slugs[0], !activeFilter);
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

export default FilterSidebarItem;

FilterSidebarItem.propTypes = {
  item: PropTypes.object.isRequired,
};
