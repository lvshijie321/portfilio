import { useCallback, useEffect, useState } from "react";

interface Params {
  scale: number[];
  position: number[];
}

export const useIslandParams = () => {
  const adjustIslandForScreenSize = useCallback(() => {
    if (window.innerWidth < 1300) {
      return {
        scale: [0.6, 0.6, 0.6],
        position: [0, -6.5, -43.4],
      };
    } else {
      return {
        scale: [1, 1, 1],
        position: [0, -6.5, -43.4],
      };
    }
  }, []);

  const [islandsParams, setIslandsParams] = useState<Params>(
    adjustIslandForScreenSize()
  );

  const setAdjustIslandForScreenSize = useCallback(() => {
    setIslandsParams(adjustIslandForScreenSize());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setAdjustIslandForScreenSize);
    return () => {
      window.removeEventListener("resize", setAdjustIslandForScreenSize);
    };
  }, []);

  return islandsParams;
};
