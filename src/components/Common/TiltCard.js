"use client"
import Tilt from 'react-parallax-tilt'
import styles from './tilt.module.css'
export default function TiltCard({children}){
    return <Tilt className={`${styles.my3d} rounded-2xl w-full h-full 
                    hover:ring-2 ring-green-400 
                    hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)]  `}
    perspective={1500}
    glareEnable={true}
    glarePosition={'all'}
    glareMaxOpacity={0.5}
    glareColor="#000000"
    glareBorderRadius="12px"
    scale={1.01}
  >
    <div className={`${styles.my3din} w-full h-full flex justify-center items-center content-center rounded-full `}>
            {children}
    </div>
</Tilt>
}