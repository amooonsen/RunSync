"use client";

import {useState, useEffect} from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({x: 0, y: 0});

  useEffect(() => {
    let frameId: number;

    const setFromEvent = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setPosition({x: e.clientX, y: e.clientY});
      });
    };

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return position;
};
