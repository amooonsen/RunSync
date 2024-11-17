"use client";

import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

export default function MotionFooterContent({children}: {children: React.ReactNode}) {
  const container = useRef<HTMLDivElement | null>(null);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <div ref={container}>
      <motion.div
        style={{y}}
        className="h-full flex flex-wrap justify-end content-between pt-20 pb-10 px-24 bg-black text-white"
      >
        {children}
      </motion.div>
    </div>
  );
}
