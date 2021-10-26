import React from 'react';
import { BiTransfer } from 'react-icons/bi';
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
        &larr; Prev
      </button>
      <button
        type="button"
        className={`${classNames(buttonClases)} ${styles['transition-btn']}`}
        onClick={onSetTransitionActive}
      >
        {isActive ? (
          <>
            Stop transition
            <BiTransfer style={{ marginLeft: 4 }} />
          </>
        ) : (
          <>
            Play transition
            <BiTransfer style={{ marginLeft: 4 }} />
          </>
        )}
      </button>
      <button
        type="button"
        className={`${classNames(buttonClases)} ${styles['next-btn']}`}
        onClick={next}
      >
        Next &#8594;
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
