import {heroLetter} from "@/lib/constants/introConst";
import {motion} from "framer-motion";

export default function HeroSection() {
  return (
    <section>
      {/* <h1 className='mt-12 pl-[3vw] text-[8vw] font-semibold leading-tight'>
        우리 함께 뛰어요.<br />
        <span className='text-secondary-dark'>이트런</span>에서.
      </h1> */}
      <AnimatedLetters title={"asdasdasd"} />
    </section>
  );
}

const AnimatedLetters = ({title}: {title: string}) => (
  <motion.span className="row-title" initial="initial" animate="animate">
    {[...title].map((letter, idx) => (
      <motion.span key={idx} className="row-letter" variants={heroLetter}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);
