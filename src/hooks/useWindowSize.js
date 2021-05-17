import { useState, useEffect, useRef } from "react";

export const useWindowSize = () => {
  const lastWidth = useRef();

  function getSize() {
    return {
      width: window.innerWidth,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      if (window?.innerWidth !== lastWidth.current) {
        const width = getSize();
        lastWidth.current = width;
        setWindowSize(width);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
