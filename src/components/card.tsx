import { useTransform, motion } from 'framer-motion';

const Card = ({
  i,
  progress,
  targetScale,
  children,
}: {
  i: number;
  progress: any;
  targetScale: number;
  children: React.ReactNode;
}) => {
  const scale = useTransform(progress, [0, 1], [1, targetScale]);
  const randomR = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // 生成00到FF之间的随机数，并转换为16进制表示
  const randomG = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // 生成00到FF之间的随机数，并转换为16进制表示
  const randomB = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // 生成00到FF之间的随机数，并转换为16进制表示

  return (
    <div className='sticky top-36 flex  justify-center  '>
      <motion.div
        style={{ backgroundColor: `#${randomR}${randomG}${randomB}`, scale, top: `calc(-5vh + ${i * 5}px) ` }}
        className=' scalecard flex relative  rounded-xl p-[1px] bg-opacity-10  my-3  '
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
