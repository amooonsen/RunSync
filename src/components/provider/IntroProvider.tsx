"use client";

import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import Intro from "../blocks/Intro";

export default function IntroProvider() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
    setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 1000);
  }, []);
  return (
    <AnimatePresence mode="wait">{isLoading && <Intro key={"intro-motion"} />}</AnimatePresence>
  );
}
