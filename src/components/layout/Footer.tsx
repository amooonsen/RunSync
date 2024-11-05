"use client";

import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

export default function Footer() {
  const container = useRef<HTMLElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  return (
    <footer id="footer" ref={container}>
      <div className="h-[300px] bg-black overflow-hidden">
        <motion.div
          style={{y}}
          className="h-full flex flex-wrap justify-end content-between pt-20 pb-10 px-24 bg-black text-white"
        >
          <blockquote className="w-full">
            <p className="text-[2vw]">{`"달리기는 내 마음을 자유롭게 해준다. 불가능해 보이는 것은 없다. 얻을 수 없는 것도 없다."`}</p>
            <p className="mt-3 text-xl font-semibold">— 카라 구처</p>
          </blockquote>
          <div>
            <address className="text-[14px] not-italic">Contact: newabekar@naver.com</address>
            <small>© 2025 Cho Kyung Moon All Rights Reserved.</small>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
