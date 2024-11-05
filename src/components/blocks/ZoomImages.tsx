"use client";

import Image from "next/image";
import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

// assets
import RunningImage01 from "@/assets/images/running_image01.jpg";
import RunningImage02 from "@/assets/images/running_image02.jpg";
import SeoulBackground04 from "@/assets/images/seoul_background04.jpg";
import SeoulVisual01 from "@/assets/images/seoul_visual01.jpg";
import SeoulVisual02 from "@/assets/images/seoul_visual02.jpg";
import SeoulVisual03 from "@/assets/images/seoul_visual03.jpg";
import SeoulVisual04 from "@/assets/images/seoul_visual04.jpg";

export default function ZoomImages() {
  const wrapper = useRef(null);

  const {scrollYProgress} = useScroll({
    target: wrapper,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5.5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 7]);

  const pictures = [
    {
      src: RunningImage01,
      scale: scale4,
    },
    {
      src: RunningImage02,
      scale: scale5,
    },
    {
      src: SeoulBackground04,
      scale: scale6,
    },
    {
      src: SeoulVisual01,
      scale: scale5,
    },
    {
      src: SeoulVisual02,
      scale: scale6,
    },
    {
      src: SeoulVisual03,
      scale: scale8,
    },
    {
      src: SeoulVisual04,
      scale: scale9,
    },
  ];

  return (
    <div ref={wrapper} className="wrapper mt-20" aria-hidden>
      <div className="sticky">
        {pictures.map(({src, scale}, index) => (
          <motion.div key={index} style={{scale}} className="el">
            <div className="imageContainer">
              <Image src={src} fill alt="image" placeholder="blur" loading="lazy" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
