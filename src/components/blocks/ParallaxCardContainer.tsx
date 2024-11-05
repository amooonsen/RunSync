"use client";

import React from "react";
import {useRef} from "react";

import {useScroll} from "framer-motion";
// constnats
import {benefitsInfo} from "@/lib/constants/benfitConst";
// types
import {TypeBenefitInfo} from "@/lib/types/typeCommon";

// component
import ParallaxCard from "./ParallaxCard";

export default function ParallaxCardContainer() {
  const container = useRef(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div ref={container} className="col-start-1 col-end-[none]">
      {benefitsInfo.map((info: TypeBenefitInfo, i: number) => {
        const targetScale = 1 - (benefitsInfo.length - i) * 0.05;
        return (
          <ParallaxCard
            key={`card_${i}`}
            i={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            {...info}
          />
        );
      })}
    </div>
  );
}
