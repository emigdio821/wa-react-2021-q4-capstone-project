import { useState, useEffect } from 'react';

const useScrollListener = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setData((old) => ({
        lastX: old.x,
        lastY: old.y,
        x: window.scrollX,
        y: window.scrollY,
      }));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return data;
};

export default useScrollListener;
