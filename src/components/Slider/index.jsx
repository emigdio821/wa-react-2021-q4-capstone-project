import React, { useState, useEffect } from 'react';
import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';
import Loader from 'components/Loader';
import SliderButtons from './SliderButtons';
import SliderItem from './SliderItem';
import styles from './Slider.module.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionActive, setTransitionActive] = useState(true);
  const { data, isLoading } = useFeaturedBanners();
  const { results } = Object.keys(data).length ? data : { results: [] };
  const { length } = results || [];

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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SliderButtons
            prev={prevSlide}
            isActive={transitionActive}
            onSetTransitionActive={onSetTransitionActive}
            next={nextSlide}
          />
          {results.map(({ data: slideData }, index) => (
            <SliderItem
              data={slideData}
              idx={index}
              currentSlide={currentSlide}
              key={`slider-item-${slideData.title}`}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Slider;
