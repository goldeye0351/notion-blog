import Container from '@/components/Container'
import BLOG from '@/blog.config'
import { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import styles from "./code.module.css"
import Rings from '@/components/Code/Rings'
import Waves from '@/components/Code/Waves'
import Tilts from '@/components/Code/Tilt'
import Dloading from '@/components/Code/Dloading'
import RotateCard from '@/components/Myswiper/RotateCard'
import D3Button, { MacButton,KZButton,JBButton,LQButton,OLDButton } from '@/components/Code/Button'
const Codes =({}) =>{
    const [mydisp,setMydisp ]=useState(Cod)
return<>
<Container title={BLOG.title} description={BLOG.description} ogimage={BLOG.ogimg} className={ ' m-auto text-gray-200 dark:text-gray-200 min-h-screen h-screen  flex flex-col  items-center '} >
        <div className="flex flex-wrap items-center justify-center  mb-16 gap-3 ">
            <div onClick={() => setMydisp(Rings)}><OLDButton text="Rings" /> </div>
            <div onClick={() => setMydisp(Tilts)}><KZButton text="Tilts" /> </div>
            <div onClick={() => setMydisp(Dloading)}><OLDButton text="3Dloading" /> </div>
            <div onClick={() => setMydisp(Waves)}><KZButton text="Waves" /> </div>

        </div>
        <AnimatePresence initial={false}  mode="wait"  >
        <motion.div 
          variants={variants}
          animate={{
            opacity:[0.5,1],
            y:0,
            scale: [0.9, 1],
            rotate: [180, 0],
            borderRadius: ["50%", "50%", "50%"]
          }}
          initial='out'
          exit='out'
          key={new Date()}
        className=' justify-center items-center   text-gray-200 ' >
            {mydisp}
        </motion.div>
        </AnimatePresence>
    </Container>
    </>}
export default Codes

function Cod(){
  return<div className=' flex flex-col gap-3  relative '>
             <div className=' h-8 my-8 '></div>
            
<RotateCard className={'w-80 h-96 relative'} > 
<div className=' flex flex-col gap-3 relative'>
CSS
</div>
      <div className={styles.wrap}>
        <div className={styles.ribbon}>css
        </div>
      </div>  
</RotateCard>

        </div>
}



  const variants = {
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.25,
        delay: 0.25
      }
    },
    out: {
      opacity: 0,
      scale: [0.9, 0.5],
      rotate: [90, 180],
      y: 40,
      transition: {
        duration: 0.5
      }
    }
  }

