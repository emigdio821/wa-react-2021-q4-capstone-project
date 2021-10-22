/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BiCheck } from 'react-icons/bi';
import GlobalContext from 'context/GlobalContext';
import styles from './FilterSidebar.module.scss';

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
    [styles['sidebar-item']]: true,
    [styles['active-filter']]: activeFilter,
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li className={classNames(filterClasses)} onClick={onFilterClick}>
      {activeFilter && <BiCheck />}
      <span className={styles['sidebar__item-name']}>{name}</span>
    </li>
  );
};

export default FilterSidebarItem;

FilterSidebarItem.propTypes = {
  item: PropTypes.shape({
    slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.shape({ name: PropTypes.string.isRequired }),
  }).isRequired,
};
