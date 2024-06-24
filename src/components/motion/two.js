'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react'; 
import Image from 'next/image';

export default function TWO({ob1,ob2}) {
    const firstImage = useRef(null);
    const secondImage = useRef(null);
    let requestAnimationFrameId = null;
    let xPercent =  0;
    let currentXPercent =  0;
    const speed = 0.15;
    
    const manageMouseMove = (e) => {
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;
        
        if(!requestAnimationFrameId){
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        //Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed)
        
        //Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent = 66.66 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);
        console.log(secondImagePercent)
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`
        
        if(Math.round(xPercent) == Math.round(currentXPercent)){
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else{
            window.requestAnimationFrame(animate)
        }
    }

    return(
      <div onMouseMove={(e) => {manageMouseMove(e)}} className=' relative flex justify-center items-center gap-3  w-screen  overflow-hidden   '>
        <motion.div initial={{x:-300}} whileInView={{x:0,transition:{duration:1}}} ref={firstImage} className="relative overflow-hidden w-1/3 ">
            {ob1}           
        </motion.div>  
        <motion.div initial={{x:300}} whileInView={{x:0,transition:{duration:1}}}  ref={secondImage} className=' relative overflow-hidden'>
            {ob2}
        </motion.div>  
      </div>
    )
  }