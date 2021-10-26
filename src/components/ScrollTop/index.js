import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { BiUpArrowAlt } from "react-icons/bi";
import "./ScrollTop.scss";

const ScrollTop = () => {
  const [scrolledHalfBody, setScrolleHalfdBody] = useState(false);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onWindowScroll = () => {
    if (window.scrollY >= (document.body.offsetHeight - window.scrollY) * 0.4) {
      setScrolleHalfdBody(true);
    } else {
      setScrolleHalfdBody(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
  }, []);

  const scrollBtn = {
    "scroll-btn": true,
    "body__half-scrolled": scrolledHalfBody,
  };

  return (
    <button
      onClick={onScrollTop}
      className={classNames(scrollBtn)}
      title="Scroll top"
    >
      <BiUpArrowAlt />
    </button>
  );
};

export default ScrollTop;
