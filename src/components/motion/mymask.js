'use client'
import { motion,useScroll,useTransform } from "framer-motion"
import styles from './mask.module.css'


export default function MYMASK({children}) {
  const { scrollYProgress } = useScroll()

  const rot= useTransform(scrollYProgress,[0.01,1],[0.5,10])
  const rot3= useTransform(scrollYProgress,[0,1],[1,360])
  const rot2= useTransform(rot,[10,9,8,7,6,5,4,3,2,1,0],[0.1,0.111,0.125,0.142,0.166,0.2,0.25,0.333,0.5,1,1])
  return (
    <main className='flex flex-col justify-center   items-center '>
      <div className=' relative h-[100VH] w-screen flex justify-center items-center overflow-hidden '>
            <motion.div  style={{scale:rot,rotate:rot3}} className={`${styles.stickyMask} overflow-hidden  `}>
               
               <motion.video style={{scale:rot2}} autoPlay playsInline muted loop src="https://pichub.51xmi.com/file/9bb6f3c2c42973adf3e6f.mp4"  className=" object-fill lg:hidden     "/>
               <motion.video style={{scale:rot2}} autoPlay playsInline muted loop src="https://pichub.51xmi.com/file/3876e5a21eeeffc90354d.mp4"  className=" object-fill w-screen hidden lg:flex     "/>

            </motion.div>            
      </div>
    </main>
  )
}