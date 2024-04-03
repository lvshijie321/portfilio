import { useCallback, useEffect, useState } from "react";

interface Params {
  scale: number[];
  position: number[];
}

export const usePlaneParams = () => {
  const adjustPlaneForScreenSize = useCallback(() => {
    if (window.innerWidth < 1300) {
      return {
        scale: [1.5, 1.5, 1.5],
        position: [0, -1.5, 0],
      };
    } else {
      return {
        scale: [3, 3, 3],
        position: [0, -4, -4],
      };
    }
  }, []);

  const [planeParams, setPlaneParams] = useState<Params>(
    adjustPlaneForScreenSize()
  );

  const setAdjustPlaneForScreenSize = useCallback(() => {
    setPlaneParams(adjustPlaneForScreenSize());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setAdjustPlaneForScreenSize);
    return () => {
      window.removeEventListener("resize", setAdjustPlaneForScreenSize);
    };
  }, []);

  return planeParams;
};
