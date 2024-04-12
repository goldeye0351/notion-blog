import BLOG from '@/blog.config'
import PropTypes from 'prop-types'
import FormattedDate from '@/components/Common/FormattedDate'
import DaysAgo from '@/components/Common/DaysAgo'
import NotionRenderer from '@/components/Post/NotionRenderer'
import {ChatIcon, KeyIcon } from '@/Icon/Icon'
import ReadingProgress from '../ReadingProgress'
import Typed from "typed.js";
import  React from "react";
import Mulu from './TableOfContents'
import Jumptocomment from '../JumpToComment'
import { motion } from 'framer-motion'
import Lastpost from '@/components/Post/lastpost'
import Image from 'next/image'
import WordCount from '../WordCount'
import Tagitem from './Tagitem'
import { useState,useEffect } from 'react'
import { Lock } from './Lock'
import MyPay from './Mypay'
import { useUser } from '@clerk/nextjs'
export default function Content (props) {
  const user=useUser()
  const { frontMatter, blockMap,tableOfContent,posts} = props
  const erweima = `https://tool.oschina.net/action/qrcode/generate?data=${BLOG.link}/${frontMatter.slug}`;
  const [showPay, setShowPay] = useState(false)
  const [showlock, setShowlock] = useState()
  const el = React.useRef(null);
  const [isBlurred, setIsBlurred] = useState(true);
  useEffect(() => {
    const element = document.querySelector('.notion-callout');
    if (element) {
      setShowlock(true);
      if (isBlurred) {
        element.classList.add('blur-md');
      } else {
        element.classList.remove('blur-md');
      }
    }
  }, [isBlurred]);

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
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ai......",frontMatter.summary],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const images = document.getElementsByClassName('lazy-image-real');
    const instance = new simpleParallax(images);
    // 在组件卸载时执行清理操作
    return () => {
      instance.destroy();
    };
  }, []); // 空数组表示仅在初次渲染时执行

  return (<div className='  text-gray-200 dark:text-200 ' >
  <div id="biaoti"  className=' flex flex-col justify-start  p-3 '>
      <div className=' absolute -translate-y-28 left-0  w-screen h-96 opacity-50  '>
        <Image src={frontMatter?.page_cover} alt={frontMatter.title} fill className='  rounded-b-full  object-cover blur-md  '/>  
      </div>
      <div className='font-bold text-3xl flex justify-center mx-auto md:mt-20 text-gray-200  blur-0         '>
        {frontMatter.title}
      </div>

      <nav className='flex mt-5 mb-10 items-start '>
        <div className='mr-2 mb-4 md:ml-0'>
          <FormattedDate date={frontMatter.date} /> &nbsp; {DaysAgo(frontMatter.date)}
        </div> 
          <div className='flex flex-nowrap max-w-full article-tags'>
          {frontMatter.tags.map(tag => (
            <Tagitem key={tag.id} tag={tag} />
          ))}
          </div> 
          <div className='mr-2'><WordCount /></div> 
      </nav>
      
      <div 
      className=' tanchukuang   bg-gray-700  dark:bg-gray-800  ring-green-400 ring-2 p-1  rounded-xl '>
        <ChatIcon  className='w-6 h-6 inline-block' />
        <div className='inline-block' ref={el}  /> 
        <div className="tooltip absolute w-28  -top-28 right-0 ">
          <Image src={erweima} alt={frontMatter.title} width={100} height={100} className='rounded-xl ' />
        </div>
      </div>

  </div>

  <div id= 'mainleft'className=' relative flex flex-row '>
    <article  id='postmain'  className='flex-none md:overflow-x-visible overflow-x-scroll lg:w-9/12 w-full ' >
      <div className="-mt-4 p-3 text-white  dark:text-gray-200 ">
          <NotionRenderer
            blockMap={blockMap}
            previewImages={BLOG.previewImagesEnabled}
            {...props}
          />
      </div>


      
      
      {frontMatter.vip && 
        <div className='  relative  p-3 w-fit mx-auto  '>
        <div className='   p-3 italic text-amber-500  rounded-full   '>以下需要登录可见</div>
        <div className='  horse_run rounded-xl p-8 w-fit ring-1  ring-amber-500 min-w-[320px] hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)]  duration-300  '>
            
            {/*  会员登录后  */}
            {user.isSignedIn && <div className=' p-3 '>{frontMatter.vip}</div>} 

            {/*  会员没有登录时  */}
            { !user.isSignedIn &&         
              <div className=' flex justify-center p-3'>
                <span className=' rounded-xl text-xl  myrotatecard blur-[2px] '>有加密内容</span>
                <span>需要登录可见 </span>            
              </div>
            }
        </div>
      </div>}      
      
      <div className=' lg:hidden  flex justify-center mt-8'>
                  <emoji-reaction endpoint="https://up.51xmi.com" reactTargetId={frontMatter.title}  ></emoji-reaction>  
      </div>
      <MyPay />

      
    </article>

    <div id='stickyright' className=' hidden lg:w-3/12 lg:flex p-3 ml-auto'>
      <motion.div  id="sideright" className='  sticky w-full top-16  '
              initial="hidden" animate="visible"   transition={{ delay: 0.7, duration: 1.2 }}
              variants={{hidden:{opacity:0,y:100,},visible:{ opacity:1,y:0,},}}>  
            
          <div className=' sticky top-16 w-full '>
            <Mulu tableOfContent={tableOfContent} />
            {showlock && <button title='🔒' onClick={() => setShowPay((showPay) => !showPay)} data-umami-event="解锁" className=' group fixed inset-y-[50%] left-1  w-12 h-12 p-3 text-green-400 animate-bounce   bg-gray-700 dark:bg-gray-800 rounded-2xl justify-center mx-auto '>
                <KeyIcon  className='w-6 h-6 group-hover:scale-150 duration-200 ' />
            </button>}
            <div id='lastpost' className=' w-full   bg-gray-700 dark:bg-gray-800 rounded-2xl px-3 py-2 my-8 relative text-2xl   '>
              <div className=' '>🆕  📣</div>
              <hr/>
              <Lastpost  posts={posts} className='text-sm '/>
            </div>
            <div id="大屏几个" className=' mt-16 flex flex-row justify-between my-8 space-x-1 '> 
                 <div className='  w-full cursor-pointer py-2 bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center '>
                  <emoji-reaction endpoint="https://up.51xmi.com" reactTargetId={frontMatter.title}  ></emoji-reaction>  
                </div>
                <div title="%" id="进度" className='group  cursor-pointer  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center '>
                      <ReadingProgress />
                </div>

                <div title="Comment" id="我要评论" className='group cursor-pointer   bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center mx-auto px-[2px] '>
                      <Jumptocomment />
                </div>
            </div>

                     
          </div>
      </motion.div>
    </div>


  </div>
  <div id="小屏几个" className=' fixed inset-y-[50%] right-0    lg:hidden'>
        <div title='百分比' className='group   bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center '>
            <ReadingProgress />
        </div>
        {showlock && <button title='🔒' onClick={() => setShowPay((showPay) => !showPay)} data-umami-event="解锁" className='group  w-full p-3  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center mx-auto '>
            <KeyIcon  className='w-6 h-6 group-hover:scale-150 group-hover:text-green-400 duration-200' />
        </button>}
        <div title='评论' className='group  w-full p-1  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center mx-auto '>
          <Jumptocomment />
        </div>

  </div>
    {showPay && <Lock validPassword={validPassword}/>}
</div>
  )
}

Content.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  pageTitle: PropTypes.string
}
