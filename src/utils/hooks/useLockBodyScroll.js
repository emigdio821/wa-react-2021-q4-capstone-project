import { useLayoutEffect } from 'react';

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const ogOverflow = window.getComputedStyle(document.body).overflow;
    const originalOverflow = () => {
      document.body.style.overflow = ogOverflow;
    };

    document.body.style.overflow = 'hidden';
    return () => originalOverflow();
  }, []);
};

export default useLockBodyScroll;
