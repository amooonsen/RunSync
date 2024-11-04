"use client";

import React from "react";

// animation
import {motion} from "framer-motion";

// lib
import {useInView} from "react-intersection-observer";

type TextOptions = {
  fontSize: number;
  weight?: "bold" | "medium" | "semibold" | "normal";
};

type Props = {
  children: React.ReactNode;
  visibleValue?: number;
  containerClass?: string;
  text: TextOptions;
};

export const maskTextAnimation = {
  initial: {y: "100%"},
  enter: (i: number) => ({
    y: "0",
    transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i},
  }),
};

export default function MaskText({children, visibleValue = 0.75, containerClass, text}: Props) {
  const {ref, inView} = useInView({
    threshold: visibleValue,
    triggerOnce: true,
  });

  if (!text) {
    console.error("텍스트 옵션이 필수적으로 필요합니다.");
    return null;
  }

  const {fontSize, weight} = text;

  return (
    <div ref={ref} className={`${containerClass} overflow-hidden leading-snug`}>
      <motion.p
        variants={maskTextAnimation}
        initial="initial"
        animate={inView ? "enter" : ""}
        style={{fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize}}
        className={weight ? `font-${weight}` : ""}
      >
        {children}
      </motion.p>
    </div>
  );
}

// usage

{
  /* <MaskText
visibleValue={1}
containerClass="col-start-2 col-end-8"
text={{
  fontSize: 36,
  weight: "bold",
}}
>
옵저버 테스트
</MaskText> */
}
