"use client";

import Lottie from "react-lottie-player";

import {useRef} from "react";

// framer
import {useTransform, motion, useScroll, MotionValue} from "framer-motion";

// types
import {TypeBenefitInfo} from "@/lib/types/typeCommon";

interface ParallaxCardProps extends TypeBenefitInfo {
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

export default function ParallaxCard({
  i,
  title,
  description,
  src,
  titleColor,
  contentColor,
  backgroundColor,
  progress,
  range,
  targetScale,
}: ParallaxCardProps) {
  const lottieRef = useRef();
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 0.9]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <article ref={container} className="cardContainer">
      <motion.div
        style={{backgroundColor, scale, top: `calc(-5vh + ${i * 30}px)`}}
        className="card"
      >
        <h2 style={{color: titleColor}}>{title}</h2>
        <div className="body">
          <div className="description">
            <p style={{color: contentColor}}>{description}</p>
            {/* <span>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
              </svg>
            </span> */}
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{scale: imageScale}}>
              <Lottie
                className=""
                ref={lottieRef}
                loop
                animationData={src}
                play
                rendererSettings={{preserveAspectRatio: "xMidYMid meet"}}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
