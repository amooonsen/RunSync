import React from "react";

export default function Footer() {
  return <div>Footer</div>;
}

// "use client";

// import { useRef } from "react";
// import { useScroll, useTransform, motion } from "framer-motion";
// import Link from "next/link";

// export default function Footer() {
//   const container = useRef<HTMLElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end end"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);
//   return (
//     <footer id="footer" ref={container}>
//       <div className="h-[450px] bg-black overflow-hidden">
//         <motion.div
//           style={{ y }}
//           className="h-full flex flex-wrap gap-6 pt-20 pb-10 px-24 bg-black text-white"
//         >
//           <p className="w-full text-[2vw]">
//             똑똑, 함께 일할 사람을 찾고 계신가요?
//             <br />
//             <span className="font-semibold">언제든지 연락을 기다리고 있어요!</span>
//           </p>
//           <div className="text-[8vw] font-bold whitespace-nowrapa tracking-tight">
//             <Link className="block w-full" href="/contact-me">
//               Let's Contact Me Now!
//             </Link>
//           </div>
//           <div className="w-full flex justify-between items-baseline">
//             <div>아이콘 모음</div>
//             <small>© 2025 Cho Kyung Moon. All Rights Reserved.</small>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }
