import React, { useState, useEffect } from "react";
import { BiTransfer } from "react-icons/bi";
import FeaturedBanners from "mocks/en-us/featured-banners.json";
import "./Slider.scss";

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
    if (transitionActive) {
      let idx = 1;
      const interval = setInterval(() => {
        const result = results[idx];
        const { data } = result;
        setBanners(data);
        idx++;
        if (idx === results.length) {
          idx = 0;
        }
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [results, transitionActive]);

  return (
    <div className="slider" style={{ backgroundImage: `url("${url}")` }}>
      <div className="slider-content">
        <h1 className="uppercase">Featured products</h1>
        <h2>{title}</h2>
        {description.map((d) => (
          <p key={d} className="description">{d.text}</p>
        ))}
        <div
          href="#"
          className="btn transition-btn"
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
        </div>
      </div>
    </div>
  );
};

export default Slider;
