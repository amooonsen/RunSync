import {useState, useEffect, useRef, useCallback} from "react";
import {useMousePosition} from "./useMousePosition";

const MOVE_RATIO = 0.15;
const SCALE_RATIO = 0.05;
const DEFAULT_SCALE = 1;
const MAX_SCALE_X = 1.5;
const MIN_SCALE_Y = 0.8;

const lerp = (start: number, end: number, ratio: number): number => {
  return start + (end - start) * ratio;
};

export const useMouseLerp = () => {
  const mousePosition = useMousePosition().position;
  const [lerpPosition, setLerpPosition] = useState({x: 0, y: 0});
  const lerpRef = useRef(lerpPosition);
  const animateRef = useRef<number>(0);

  const momentPosition = useMousePosition().momentPosition;
  const [lerpScale, setLerpScale] = useState({x: 1, y: 1});
  const lerpScaleRef = useRef(lerpScale);

  const [lerpAngle, setLerpAngle] = useState(0);
  const lerpAngleRef = useRef(lerpAngle);

  const mouseLerp = useCallback(() => {
    if (
      Math.abs(lerpRef.current.x - mousePosition.x) > 1 ||
      Math.abs(lerpRef.current.y - mousePosition.y) > 1
    ) {
      animateRef.current = requestAnimationFrame(mouseLerp);

      // move
      const lerpX = lerp(lerpRef.current.x, mousePosition.x, MOVE_RATIO);
      const lerpY = lerp(lerpRef.current.y, mousePosition.y, MOVE_RATIO);

      lerpRef.current = {x: lerpX, y: lerpY};
      setLerpPosition(lerpRef.current);

      if (Math.abs(momentPosition.x) > 5 || Math.abs(momentPosition.y) > 5) {
        // scale
        const distance = Math.sqrt(
          Math.abs(momentPosition.x) ** 2 + Math.abs(momentPosition.y) ** 2
        );
        const scaleChangeX = Math.min(MAX_SCALE_X, DEFAULT_SCALE + distance * 0.01);
        const scaleChangeY = Math.max(MIN_SCALE_Y, DEFAULT_SCALE - distance * 0.01);
        const scaleLerpX = lerp(scaleChangeX, DEFAULT_SCALE, SCALE_RATIO);
        const scaleLerpY = lerp(scaleChangeY, DEFAULT_SCALE, SCALE_RATIO);

        lerpScaleRef.current = {x: scaleLerpX, y: scaleLerpY};

        // angle
        const radians = Math.atan2(momentPosition.y, momentPosition.x);
        const angle = radians * (180 / Math.PI);

        lerpAngleRef.current = angle;
      } else {
        lerpScaleRef.current = {x: 1, y: 1};
        lerpAngleRef.current = 0;
      }
    } else {
      lerpScaleRef.current = {x: 1, y: 1};
      lerpAngleRef.current = 0;
    }
    setLerpScale(lerpScaleRef.current);
    setLerpAngle(lerpAngleRef.current);
  }, [mousePosition]);

  useEffect(() => {
    animateRef.current = requestAnimationFrame(mouseLerp);
    return () => cancelAnimationFrame(animateRef.current);
  }, [mousePosition]);

  return {lerpPosition, lerpScale, lerpAngle};
};
