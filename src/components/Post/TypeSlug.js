'use client'
import BLOG from '@/blog.config'
import {ChatIcon} from '@/Icon/Icon'
import Typed from 'typed.js'
import Image from 'next/image'
import { useEffect,useRef } from 'react'
import styles from './slug.module.css'
export default function TypeSlug ({post}) {

  const erweima = `https://tool.oschina.net/action/qrcode/generate?data=${BLOG.link}/${post.slug}`;
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ai......",post.summary],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [post.summary]);

  return (
      <div 
      className={`${styles.tanchukuang}   bg-gray-700  dark:bg-gray-800  ring-green-400 ring-2 rounded-xl `}>
                <ChatIcon  className='w-6 h-6 inline-block' />
                <div className='inline-block' ref={el}  />
                <div className={`${styles.tooltip} absolute w-28  -top-28 right-0 `}>
                  <Image src={erweima} alt={post.title} width={100} height={100} className='rounded-xl ' />
                </div>
      </div>  )
}