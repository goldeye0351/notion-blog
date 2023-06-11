"use client"
import Image from 'next/image'
import AIIMG from '@/public/images/ai.jpg'
import MACIMG from '@/public/images/mac.jpg'
import CODEIMG from '@/public/images/code.jpg'
import TRAVELIMG from '@/public/images/travel.jpg'
import SOCIALIMG from '@/public/images/social.jpg'

import { register } from 'swiper/element/bundle'
register()
import BLOG from '@/blog.config'
import Link from 'next/link'
import { motion } from 'framer-motion'

import React from 'react'


const MySwiper = ({ index , post }) => {
    return (
  <swiper-container grab-cursor="true" autoplay="true" autoplay-disable-on-interaction="true" speed="100" space-between="0" slides-per-view="3"
  effect="coverflow" coverflow-effect-rotate="10" coverflow-effect-depth="500" coverflow-effect-slide-shadows="false" loop="true"
  coverflow-effect-stretch="10" coverflow-effect-modifier="1" loop-additional-slides="2"
  >
    <swiper-slide ><Image src={AIIMG} alt="123" className="myimg" />
        <div className="mytext"> 11111111111         <div className="myh2">11111</div>      </div>    
    </swiper-slide>
    <swiper-slide ><Image src={MACIMG} alt="123" className="myimg" />
        <div className="mytext"> 22222         <div className="myh2">22222222</div>      </div>    
    </swiper-slide>
    <swiper-slide ><Image src={CODEIMG} alt="123" className="myimg" /> 
        <div className="mytext"> 33333        <div className="myh2">33333</div>      </div>    
    </swiper-slide>
    <swiper-slide ><Image src={SOCIALIMG} alt="123" className="myimg" />
        <div className="mytext"> 44444        <div className="myh2">44444</div>      </div>    
     </swiper-slide>
    <swiper-slide ><Image src={TRAVELIMG} alt="123" className="myimg" /> 
        <div className="mytext"> 555555     <div className="myh2">55555</div>      </div>    
    </swiper-slide>
    <swiper-slide ><Image src={AIIMG} alt="123" className="myimg" /> 
        <div className="mytext"> 66666         <div className="myh2">66666</div>      </div>    
    </swiper-slide>
    <swiper-slide ><Image src={CODEIMG} alt="123" className="myimg" /> 
        <div className="mytext"> 77777         <div className="myh2">77777</div>      </div>    
    </swiper-slide>
  </swiper-container>
)}
export default MySwiper