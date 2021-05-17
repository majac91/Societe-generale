import { useState, useEffect, useRef } from "react";

export const useWindowSize = () => {
  // const isClient = typeof window === "object"; //Object represents browser window
  const lastWidth = useRef();

  function getSize() {
    // return {
    //   width: isClient ? window.innerWidth : undefined,
    // };
    return {
      width: window.innerWidth,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    // if (!isClient) {
    //   return false;
    // }

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
