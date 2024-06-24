'use client'
import BLOG from '@/blog.config'
import NotionPage from './notion-page'
import {ChatIcon, RightArrow } from '@/Icon/Icon'
import Mulu from './TableOfContents'
import Typed from 'typed.js'
import Image from 'next/image'
import { useState,useEffect,useRef } from 'react'
import Pinglun from './NotionComment'
import { Lock } from './Lock'
import Lastpost from '../blog/lastpost'
import { motion } from 'framer-motion'
import UmamiLikeClient from '../umami/umamiLikeClient'
import UmamiViewClient from '../umami/UmamiViewClient'
import ReadingProgress from '../ReadingProgress'
import Link from 'next/link'
import styles from './slug.module.css'
import { useUser } from '@clerk/nextjs'

import { Dock,DockIcon } from '../magicui/dock'
import StripePopup from '../StripePopup'

export default function Content (props) {
  const {allPosts, post, recordMap,tableOfContent,prev,next,mypls ,ip } = props
  const erweima = `https://tool.oschina.net/action/qrcode/generate?data=${BLOG.link}/${post.slug}`;
  const user=useUser()
  const el = useRef(null);
  const [showPay, setShowPay] = useState(false);
  const [isBlurred, setIsBlurred] = useState(true);
  const [xie, setXie] = useState(false);
  const toggleXie = () => {    setXie((prevState) => !prevState);  };
  const [show$, setShow$] = useState(false);
  const toggleShow$ = () => {
    setShow$((prevState) => !prevState);
  };

  useEffect(() => {
    const element = document.querySelector('.notion-callout');
    if (element) {
      element.addEventListener('click', handleClick);
  
      if (isBlurred) {
        element.classList.add('blur-md');
      } else {
        element.classList.remove('blur-md');
      }
    }
  
    // 返回一个函数用于清除事件监听器
    return () => {
      if (element) {
        element.removeEventListener('click', handleClick);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBlurred, showPay]);
  
  const handleClick = () => {
    if (isBlurred) {
      setShowPay((showPay) => !showPay);
    } 
  };
  
  const toggleVisibility = () => {
    setIsBlurred(prevIsBlurred => !prevIsBlurred);
  };
  const validPassword = passInput => {
    if (passInput  === '51xmi') {
      toggleVisibility()
      setShowPay((showPay) => !showPay)
     return true
    }
    return false
  } 

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

  return (<div className=' relative  text-gray-200 dark:text-200 ' >
  <div id="biaoti"  className=' flex flex-col justify-start  p-3 relative '>
      <div className='flex w-full flew-row justify-between cursor-pointer mt-5 blur-0 italic '>
        <Link passHref href={`/${prev.slug}`} scroll={false} className=' w-1/3 h-6 overflow-hidden hover:text-amber-500'>
          <RightArrow className={' w-6  inline-block rotate-180 mr-3'} />{prev.title}
        </Link>
        <Link passHref href={`/${next.slug}`} scroll={false} className=' w-1/3 h-6 overflow-hidden flex flex-row-reverse hover:text-amber-500  '>
          <RightArrow className={' w-6 min-w-[24px] inline-block ml-3 '} /> <div className='inline-block '>{next.title}</div>
        </Link>
      </div>
      <div className='font-bold text-3xl flex justify-center mx-auto md:mt-20 text-gray-200  blur-0         '>
        {post.title}
      </div>      


      <nav className='flex mt-5 mb-10 items-start '>
        <div className='mr-2 mb-4 md:ml-0'>
          发表于:{post.date} 更新于{new Date(post.lastEditedAt ).toLocaleString()}
        </div> 

      </nav>
      <div 
      className={`${styles.tanchukuang}  mt-3 bg-gray-700  dark:bg-gray-800  ring-green-400 ring-2 p-1  rounded-xl `}>
        <ChatIcon  className='w-6 h-6 inline-block' />
                <div className='inline-block' ref={el}  />
                <div className={`${styles.tooltip} absolute w-28  -top-28 right-0 `}>
          <Image src={erweima} alt={post.title} width={100} height={100} className='rounded-xl ' />
        </div>
      </div>

  </div>


  <div id= 'main'className=' flex flex-row'>
    <article  id='postmain'  className='lg:w-9/12 w-full' >
      <div className="-mt-4 p-3 text-white  dark:text-gray-200 ">
          <NotionPage recordMap={recordMap}/>
      </div>      
      
   
      {post.vip && 
        <div className='  relative  p-3 w-fit mx-auto  '>
        <div className='   p-3 italic text-amber-500  rounded-full   '>以下需要登录/login to view</div>
        <div className={`${styles.horse_run}  horse_run rounded-xl p-8 w-fit ring-1  ring-amber-500 min-w-[320px] hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)]  duration-300  `}>
            
            {/*  会员登录后  */}
            {user.isSignedIn && <div className=' p-3 '>{post.vip}</div>} 

            {/*  会员没有登录时  */}
            { !user.isSignedIn &&         
              <div className=' flex justify-center p-3'>
                <span className=' rounded-xl text-xl   blur-[2px] '>******</span>
                <span>需要登录/login to view </span>            
              </div>
            }
        </div>
      </div>}      

 

      
    </article>

    <div id='stickyright' className=' hidden lg:w-3/12 lg:flex p-3 ml-auto '>
      <motion.div  id="sideright" className='  sticky w-full top-16  '
              initial="hidden" animate="visible"   transition={{ delay: 0.7, duration: 1.2 }}
              variants={{hidden:{opacity:0,y:100,},visible:{ opacity:1,y:0,},}}> 
          <div className=' sticky top-36 w-full h-max'>
            <Mulu tableOfContent={tableOfContent} />

            <div key="last文章" id='Tuijian' className=' overflow-x-hidden bg-gray-700 duration-300 dark:bg-gray-800 rounded-xl  p-3 my-3'>
                <Lastpost posts={allPosts} />
            </div>

          </div>
      </motion.div>

    </div>


  </div>

    {showPay && <Lock validPassword={validPassword}/>}

      <div className='flex justify-center  items-center'>

            <div className=" bg-gray-900 ring-1 ring-green-400 flex fixed bottom-16 rounded-full px-8 z-50 items-center justify-center  "  >
             <Dock>              
              <DockIcon className=' group' data-umami-event="dock查看量">
                <div className=' group-hover:scale-[2] duration-100 '>
                  <UmamiViewClient slug={post.slug} showview={true} />
                </div>
              </DockIcon>
              <DockIcon className=' group' data-umami-event="dock点赞量">
                  <div className=' group-hover:scale-[2] duration-100 '>
                    <UmamiLikeClient slug={post.slug} />
                  </div>
              </DockIcon>
              <DockIcon className=' group' data-umami-event="dock评论">
                    <button onClick={toggleXie}  className=' group-hover:scale-[3] duration-100  flex justify-center items-center group '>
                        💬{mypls.length}
                    </button>
              </DockIcon>
              <DockIcon className=' group'  title="赞助一下"  data-umami-event="dock赞助">
                <div onClick={toggleShow$}  >
                  <svg className='w-6 h-6 fill-amber-500 group-hover:scale-[3] rounded-full duration-300' viewBox="0 0 512 512">
                    <path d="M289.94 249.05l-59.06-16.86c-8.75-2.52-14.88-10.61-14.88-19.7 0-11.3 9.19-20.48 20.47-20.48h36.91c8.24 0 16.08 2.56 22.63 7.32 2.99 2.17 7.22 1.46 9.84-1.16l11.42-11.42c3.5-3.5 2.94-9.22-.99-12.23-12.26-9.41-27.18-14.51-42.9-14.51H272v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24h-3.53c-30.59 0-55.13 26.3-52.24 57.48 2.06 22.16 19.06 40.12 40.45 46.22l56.44 16.11c8.75 2.52 14.88 10.61 14.88 19.7 0 11.3-9.19 20.48-20.47 20.48h-36.91c-8.24 0-16.08-2.56-22.63-7.32-2.99-2.17-7.22-1.46-9.84 1.16l-11.42 11.42c-3.5 3.5-2.94 9.21.99 12.23 12.26 9.41 27.18 14.51 42.9 14.51H240v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h1.36c22.81 0 44.33-13.59 51.72-35.17 10.15-29.65-7.28-59.8-35.14-67.78zM512 256c0-35.5-19.4-68.2-49.6-85.5 9.1-33.6-.3-70.4-25.4-95.5s-61.9-34.5-95.5-25.4C324.2 19.4 291.5 0 256 0s-68.2 19.4-85.5 49.6c-33.6-9.1-70.4.3-95.5 25.4s-34.5 61.9-25.4 95.5C19.4 187.8 0 220.5 0 256s19.4 68.2 49.6 85.5c-9.1 33.6.3 70.4 25.4 95.5 26.5 26.5 63.4 34.1 95.5 25.4 17.4 30.2 50 49.6 85.5 49.6s68.1-19.4 85.5-49.6c32.7 8.9 69.4.7 95.5-25.4 25.1-25.1 34.5-61.9 25.4-95.5 30.2-17.3 49.6-50 49.6-85.5zm-91.1 68.3c5.3 11.8 29.5 54.1-6.5 90.1-28.9 28.9-57.5 21.3-90.1 6.5C319.7 433 307 480 256 480c-52.1 0-64.7-49.5-68.3-59.1-32.6 14.8-61.3 22.2-90.1-6.5-36.8-36.7-10.9-80.5-6.5-90.1C79 319.7 32 307 32 256c0-52.1 49.5-64.7 59.1-68.3-5.3-11.8-29.5-54.1 6.5-90.1 36.8-36.9 80.8-10.7 90.1-6.5C192.3 79 205 32 256 32c52.1 0 64.7 49.5 68.3 59.1 11.8-5.3 54.1-29.5 90.1 6.5 36.8 36.7 10.9 80.5 6.5 90.1C433 192.3 480 205 480 256c0 52.1-49.5 64.7-59.1 68.3z">
                    </path>
                  </svg>
                </div>
              </DockIcon >
              <DockIcon className=' group'   data-umami-event="dock滚动">
                <div className=' group-hover:scale-[2] duration-100 '>
                  <ReadingProgress />
                </div>
              </DockIcon>

             </Dock>
            </div>
      </div>

      <div
        className={`${
          xie ? "w-96 h-screen " : "w-0 h-screen  "
        } fixed duration-1000 bg-gray-800 ring-1 ring-green-400 overflow-y-scroll  top-0 bottom-0 justify-center items-center my-auto flex -right-1  `}
      >
         <Pinglun post={post} mypls={mypls} ip={ip} className={'mt-16'} />

      </div>
      {show$ ? <div className=" fixed  bottom-36 right-3  "><StripePopup /> </div>:null}

</div>
  )
}