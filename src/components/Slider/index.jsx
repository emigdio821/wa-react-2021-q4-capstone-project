import React, { useState, useEffect } from 'react';
import { BiTransfer } from 'react-icons/bi';
import FeaturedBanners from 'mocks/en-us/featured-banners.json';
import './Slider.scss';

const Slider = () => {
  const { results } = FeaturedBanners;
  const { data } = results[0];
  const [banners, setBanners] = useState(data);
  const [transitionActive, setTransitionActive] = useState(true);
  const {
    description,
    main_image: { url },
    title,
  } = banners;

  useEffect(() => {
    let idx = 1;
    const interval = setInterval(() => {
      if (transitionActive) {
        const result = results[idx];
        const { data: slideData } = result;
        setBanners(slideData);
        idx += 1;
        if (idx === results.length) {
          idx = 0;
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [results, transitionActive]);

  return (
    <div className="slider" style={{ backgroundImage: `url("${url}")` }}>
      <div className="slider-content">
        <h1 className="slider-title">{title}</h1>
        {description.map((d) => (
          <p key={d} className="description">
            {d.text}
          </p>
        ))}
        <button
          type="button"
          className="btn primary transition-btn"
          onClick={() => setTransitionActive(!transitionActive)}
        >
          {transitionActive ? (
            <>
              Stop transition
              <BiTransfer style={{ marginLeft: 4 }} />
            </>
          ) : (
            <>
              Continue transition
              <BiTransfer style={{ marginLeft: 4 }} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Slider;
