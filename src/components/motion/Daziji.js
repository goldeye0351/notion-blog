'use client';
import { motion } from 'framer-motion';
const textContainer = {
  hidden: {},
  show: {transition: { staggerChildren: 0.1, },},
};
const textVariant = {
  hidden: { opacity: 0,  x:-100,  y: 100, },
  show: {   opacity: 1,  x:0 , y: 0, },
};

const DAZIJI = ({title,className}) => (
  <section className={`relative z-10`}>
    <motion.div       className={`mx-auto flex flex-col`}
      variants={textContainer}
      initial="hidden"
      whileInView="show"
    >
        <motion.p          className={` ${className}`}
          variants={textContainer}
        >
          {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
    </motion.div>
  </section>
);

export default DAZIJI;
