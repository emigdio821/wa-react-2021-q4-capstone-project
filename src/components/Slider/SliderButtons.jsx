import React from 'react';
import {
  BiPlay, BiStop, BiChevronLeft, BiChevronRight,
} from 'react-icons/bi';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Slider.module.scss';

const SliderButtons = ({
  prev, isActive, onSetTransitionActive, next,
}) => {
  const buttonClases = {
    [styles.btn]: true,
    [styles.primary]: true,
  };

  return (
    <div className={styles['btn-container']}>
      <button
        type="button"
        className={`${classNames(buttonClases)} ${styles['left-btn']}`}
        onClick={prev}
      >
        <BiChevronLeft />
        {' '}
        Prev
      </button>
      <button
        type="button"
        className={`${classNames(buttonClases)} ${styles['transition-btn']}`}
        onClick={onSetTransitionActive}
      >
        {isActive ? (
          <>
            Stop transition
            <BiStop />
          </>
        ) : (
          <>
            Play transition
            <BiPlay />
          </>
        )}
      </button>
      <button
        type="button"
        className={`${classNames(buttonClases)} ${styles['next-btn']}`}
        onClick={next}
      >
        Next
        <BiChevronRight />
      </button>
    </div>
  );
};

export default SliderButtons;

SliderButtons.propTypes = {
  prev: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSetTransitionActive: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};
