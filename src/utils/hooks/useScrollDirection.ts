import { useState, useEffect, useRef } from 'react';
const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';
const THRESHOLD = 0;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(SCROLL_UP);

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? SCROLL_DOWN : SCROLL_UP;
        setScrollDirection(newScrollDirection);
        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }
      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;
