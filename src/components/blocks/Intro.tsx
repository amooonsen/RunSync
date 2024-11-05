import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {slideUp, opacity} from "@/lib/constants/introConst";

const words = ["달리다", "지속", "즐겁다", "추진력", "인내", "성취", "활력", "끈기", "행복"];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({width: 0, height: 0});

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]},
    },
    exit: {
      d: targetPath,
      transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3},
    },
  };

  useEffect(() => {
    setDimension({width: window.innerWidth, height: window.innerHeight});
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className="introduction">
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}.
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
