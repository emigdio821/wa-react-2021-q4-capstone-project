import React, { useState, useEffect } from "react";
import { BiTransfer } from "react-icons/bi";
import FeaturedBanners from "mocks/en-us/featured-banners.json";
import "./ImgSlider.scss";

const ImgSlider = () => {
  const { results } = FeaturedBanners;
  const {
    data: {
      main_image: { url: defaultImgUrl },
    },
  } = results[0];
  const [imgUrl, setImgUrl] = useState(defaultImgUrl);
  const [transitionActive, setTransitionActive] = useState(true);

  useEffect(() => {
    if (transitionActive) {
      let idx = 1;
      const interval = setInterval(() => {
        const result = results[idx];
        const {
          data: {
            main_image: { url },
          },
        } = result;
        setImgUrl(url);
        idx++;
        if (idx === results.length) {
          idx = 0;
        }
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [results, transitionActive]);

  return (
    <div className="slider" style={{ backgroundImage: `url("${imgUrl}")` }}>
      <div className="slider-content">
        <h1 className="uppercase">Featured products</h1>
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

export default ImgSlider;
