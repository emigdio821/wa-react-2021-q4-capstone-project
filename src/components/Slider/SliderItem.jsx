import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Slider.module.scss';

const SliderItem = ({ data, idx, currentSlide }) => {
  const {
    title,
    description,
    main_image: { url, alt },
  } = data;

  const slideClasses = {
    [styles.slide]: true,
    [styles.active]: idx === currentSlide,
  };

  return (
    <div className={classNames(slideClasses)} key={url}>
      {idx === currentSlide && (
        <>
          <div className={styles['slider-overlay']}>
            <div className={styles['overlay-content']}>
              <h1 className={styles['overlay-title']}>{title}</h1>
              {description.map((d) => (
                <p key={d} className={styles.description}>
                  {d.text}
                </p>
              ))}
            </div>
          </div>
          <img src={url} alt={alt} className={styles['slide-img']} />
        </>
      )}
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string.isRequired }),
    ).isRequired,
    main_image: PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
};
