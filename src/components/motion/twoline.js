'use client'
import { useRef } from "react";
import {  motion,  useScroll,  useSpring,  useTransform,  useMotionValue,  useVelocity,  useAnimationFrame} from "framer-motion";
const wrap = (min, max, v) => {
    const rangeSize = max - min
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
  }

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-15, -55, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });


  return (
    <div className="flex justify-center  flex-nowrap overflow-hidden whitespace-nowrap  py-3 " >
      <motion.div className="flex  justify-center  flex-nowrap text-7xl whitespace-nowrap  font-extrabold  " style={{ x }} >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}

export default function TwoLine({text1,speed}) {
  return (
      <section className=" w-screen justify-center flex fixed bottom-3  ">
            <ParallaxText baseVelocity={speed}>{text1}</ParallaxText>
      </section>
  );
}
