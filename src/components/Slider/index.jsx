import React, { useState, useEffect } from 'react';
import FeaturedBanners from 'mocks/en-us/featured-banners.json';
import SliderButtons from './SliderButtons';
import SliderItem from './SliderItem';
import styles from './Slider.module.scss';

const Slider = () => {
  const { results } = FeaturedBanners;
  const { length } = results;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionActive, setTransitionActive] = useState(true);

  const onSetTransitionActive = () => {
    setTransitionActive(!transitionActive);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (transitionActive) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, transitionActive]);

  return (
    <section className={styles.slider}>
      <SliderButtons
        prev={prevSlide}
        isActive={transitionActive}
        onSetTransitionActive={onSetTransitionActive}
        next={nextSlide}
      />
      {results.map(({ data }, index) => (
        <SliderItem
          data={data}
          idx={index}
          currentSlide={currentSlide}
          key={`slider-item-${data.title}`}
        />
      ))}
    </section>
  );
};

export default Slider;
