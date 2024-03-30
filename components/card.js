import { useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const Card = ({i, progress, range, targetScale,children}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const randomR = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // 生成00到FF之间的随机数，并转换为16进制表示
  const randomG = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // 生成00到FF之间的随机数，并转换为16进制表示
  const randomB = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // 生成00到FF之间的随机数，并转换为16进制表示

  return (
    <div ref={container} className='sticky top-36 flex  justify-center  '>
      <motion.div 
        style={{ backgroundColor: `#${randomR}${randomG}${randomB}` ,scale, top:`calc(-5vh + ${i * 5}px) `}} 
        className= ' scalecard flex relative  rounded-3xl p-2 bg-opacity-30 ' 
      >
        
      {children}
      </motion.div>
    </div>
  )
}

export default Card