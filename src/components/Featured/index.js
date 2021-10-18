import React, { useState, useRef, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";
import {
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiBookmarkHeart,
} from "react-icons/bi";
import FeaturedProducts from "mocks/en-us/featured-products.json";
import "./Featured.scss";

const Featured = () => {
  const { results } = FeaturedProducts;
  const featuredRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const onHandleScrollEnd = () => {
    const featureDiv = featuredRef.current;
    if (
      Math.floor(featureDiv.scrollWidth - featureDiv.scrollLeft) <=
      featureDiv.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    featuredRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      featuredRef.current.scrollLeft += e.deltaY * 5;
    });
  }, []);

  const onScrollCheck = () => {
    const featureDiv = featuredRef.current;
    setScrollX(featureDiv.scrollLeft);
    onHandleScrollEnd();
  };

  const onSlideX = (nextBtn) => {
    const featureDiv = featuredRef.current;
    if (!nextBtn) {
      featureDiv.scrollLeft -= featureDiv.offsetWidth;
      setScrollX(scrollX - featureDiv.offsetWidth);
    } else {
      featureDiv.scrollLeft += featureDiv.offsetWidth;
      setScrollX(scrollX + featureDiv.offsetWidth);
    }
    onHandleScrollEnd();
  };

  return (
    <div className="container">
      <h1 className="featured-title">
        <BiBookmarkHeart />
        ・Featured
      </h1>
      <div className="featured" ref={featuredRef} onScroll={onScrollCheck}>
        {results.map(({ id, data }) => (
          <FeaturedItem key={id} item={data} />
        ))}
      </div>
      <div className="scroll-btns">
        <button
          className="btn prev-btn"
          onClick={() => onSlideX(false)}
          disabled={scrollX === 0}
        >
          <BiLeftArrowAlt /> Prev
        </button>
        <button
          className="btn next-btn"
          onClick={() => onSlideX(true)}
          disabled={scrollEnd}
        >
          Next <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Featured;
