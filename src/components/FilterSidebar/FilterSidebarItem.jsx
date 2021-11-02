/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BiCheck } from 'react-icons/bi';
import { useGlobalContext } from 'context/GlobalContext';
import { useLocation, useHistory } from 'react-router-dom';
import { product } from 'context/Types';
import styles from './FilterSidebar.module.scss';

const FilterSidebarItem = ({ isCleared, item }) => {
  const {
    slugs: { 0: categorySlug },
    data: { name },
  } = item;
  const [activeFilter, setActiveFilter] = useState(false);
  const { dispatch } = useGlobalContext();
  const queryParams = new URLSearchParams(useLocation().search);
  const categoryParam = queryParams.get('category');
  const history = useHistory();

  const deleteCategoryParam = () => {
    if (categoryParam) {
      // if there's a category param, remove it
      // since the filter is now manipulated by the user
      queryParams.delete('category');
      history.replace({
        search: queryParams.toString(),
      });
    }
  };

  const onFilterClick = () => {
    deleteCategoryParam();
    setActiveFilter(!activeFilter);
    if (!activeFilter) {
      dispatch({ type: product.addFilter, payload: categorySlug });
    } else {
      dispatch({ type: product.removeFilter, payload: categorySlug });
    }
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      onFilterClick();
    }
  };

  useEffect(() => {
    if (categoryParam === categorySlug) {
      setActiveFilter(true);
      dispatch({ type: product.addFilter, payload: categorySlug });
    }

    if (isCleared) {
      deleteCategoryParam();
      setActiveFilter(false);
    }
  }, [isCleared]);

  const filterClasses = {
    [styles['sidebar-item']]: true,
    [styles['active-filter']]: activeFilter,
  };

  return (
    <li style={{ width: '100%' }}>
      <span
        role="button"
        tabIndex="0"
        onKeyDown={handleKeyDown}
        onClick={onFilterClick}
        className={classNames(filterClasses)}
      >
        {activeFilter && <BiCheck />}
        <span>{name}</span>
      </span>
    </li>
  );
};

export default FilterSidebarItem;

FilterSidebarItem.propTypes = {
  isCleared: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    slugs: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.shape({ name: PropTypes.string.isRequired }),
  }).isRequired,
};
