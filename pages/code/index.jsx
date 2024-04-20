import Container from '@/components/Container'
import BLOG from '@/blog.config'
import { useState } from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import Rings from '@/components/Code/Rings'
import Waves from '@/components/Code/Waves'
import Tilts from '@/components/Code/Tilt'
import Dloading from '@/components/Code/Dloading'
import Card1 from '@/components/Code/Card1'
import Card2 from '@/components/Code/Card2'
import D3Button, { MacButton,KZButton,JBButton,LQButton,OLDButton } from '@/components/Code/Button'
const Codes =({}) =>{
    const [mydisp,setMydisp ]=useState(Cod)
return<>
<Container title={BLOG.title} description={BLOG.description} ogimage={BLOG.ogimg} className={ ' m-auto text-gray-200 dark:text-gray-200 min-h-screen h-screen  flex flex-col  items-center '} >
        <div className="flex flex-wrap items-center justify-center  mb-16 gap-3 ">
            <div onClick={() => setMydisp(Rings)}><D3Button text="Rings" /> </div>
            <div onClick={() => setMydisp(Tilts)}><OLDButton text="Tilts" /> </div>
            <div onClick={() => setMydisp(Dloading)}><JBButton text="3Dloading" /> </div>
            <div onClick={() => setMydisp(Waves)}><LQButton text="Waves" /> </div>

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
  return<div className=' flex flex-col gap-3  '>
             <div className=' h-8 my-8 '></div>
            <LQButton text='液态按钮' />

            <div className=' mypingcard h-36 w-36 justify-center items-center flex rounded-xl overflow-hidden '>
              <div className=' w-[140px] h-[140px] rounded-xl bg-day dark:bg-night  '></div>
            </div>
              
            <div className=' h-8 my-8 '></div>

            <div className=' myrotatecard h-36 w-36 justify-center items-center flex rounded-xl overflow-hidden '>
              <div className=' w-[140px] h-[140px] rounded-xl bg-day dark:bg-night  '></div>
            </div>
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

