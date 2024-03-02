import BLOG from '@/blog.config'
import PropTypes from 'prop-types'
import FormattedDate from '@/components/Common/FormattedDate'
import DaysAgo from '@/components/Common/DaysAgo'
import NotionRenderer from '@/components/Post/NotionRenderer'
import {ThumbUpIcon,ChatIcon, KeyIcon } from '@heroicons/react/outline'
import ReadingProgress from '../ReadingProgress'
import Typed from "typed.js";
import  React from "react";
import Mulu from './TableOfContents'
import Jumptocomment from '../JumpToComment'
import { motion } from 'framer-motion'
import Lastpost from '@/components/Post/lastpost'
import IpComponent from '@/components/IpComponent';
import Image from 'next/image'
import WordCount from '../WordCount'
import Tagitem from './Tagitem'
import { useState,useEffect } from 'react'
import { Lock } from './Lock'

export default function Content (props) {
  const { frontMatter, blockMap, pageTitle,lastposts,tableOfContent,fullWidth} = props
  const [showPay, setShowPay] = useState(false)
  const [showlock, setShowlock] = useState()
  const visitorIp = IpComponent();
  var zjk = frontMatter.up;
  const el = React.useRef(null);
  const [isBlurred, setIsBlurred] = useState(true);
  useEffect(() => {
    const element = document.querySelector('.notion-callout');
    if (element) {
      setShowlock(true);
      if (isBlurred) {
        element.classList.add('hidden');
      } else {
        element.classList.remove('hidden');
      }
    }
  }, [isBlurred]);

  const toggleVisibility = () => {
    setIsBlurred(prevIsBlurred => !prevIsBlurred);
  };
  const validPassword = passInput => {
    if (passInput  === zjk) {
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

  const dianzan = async (e) => {
    const slug=frontMatter.id;
    zjk++;
    const newup=zjk ;
    e.preventDefault();
    const res = await fetch('/api/dianzan', {
      method: 'PATCH',
      body: JSON.stringify({ slug,newup}),
    });
    // Success if status code is 201
    if (res.status === 201) {
      document.querySelector('#myupxiaopin').innerHTML = newup;
      document.querySelector('#myupdapin').innerHTML = newup;
      console.log('谢谢你的点赞.',newup)
    } else {
      console.log('出错了', { type: 'error' });
    }
    const postid=frontMatter.id;
    const ren=visitorIp;
    const pinglun='点了一个up';
    const title=frontMatter.title;
    const email=visitorIp;
    const res2 = await fetch('/api/pinglunapi', {
      method: 'POST',
      body: JSON.stringify({ postid,ren,pinglun,title,email,visitorIp }),
    });
    if (res2.status === 201) {
      console.log('谢谢你的点赞')
    } else {
      console.log('errer 信号不好, 出错了')    
    }

    return newup;
  };

  return (<div className='  text-gray-200 dark:text-200 ' >
  <div id="biaoti"  className=' flex flex-col justify-center p-3 '>
      <div className='opacity-50   h-36 w-screen  absolute top-0 left-0 right-0 bg-gradient-to-b    to-transparent  '>
        <Image src={frontMatter?.page_cover} alt={frontMatter.title} fill  className='  rounded-b-full  '/>  
      </div>
      <div className='font-bold text-3xl flex justify-center mx-auto mt-20'>
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
      className='   bg-gray-700  dark:bg-gray-800  ring-green-400 ring-2 p-1  rounded-xl '>
        <ChatIcon  className='w-6 h-6 inline-block' />
        <div className='inline-block' ref={el}  /> 
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
            <div id="大屏几个" className=' flex flex-row justify-between my-8 space-x-1 '> 
                <div title='UP' id="点赞" onClick={dianzan} data-umami-event="大屏点赞" 
                className='group cursor-pointer  w-full p-1  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center mx-auto '>
                      <button id="dapindianzan"  className='  hover:text-gray-200 dark:hover:text-gray-200 w-full'>
                        <ThumbUpIcon  className='w-6 h-6 inline-block mx-1 text-center group-hover:scale-150 duration-200 ' />
                        <span id="myupdapin" className=' inline-block group-hover:scale-125 duration-200'>{zjk}</span>

                      </button>
                </div>
                <div title="%" id="进度" className='group cursor-pointer  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center '>
                      <ReadingProgress />
                </div>
                <div title="Comment" id="我要评论" className='group cursor-pointer  w-full  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center mx-auto '>
                      <Jumptocomment />
                </div>
            </div>
            <div id='lastpost' className=' w-full   bg-gray-700 dark:bg-gray-800 rounded-2xl px-3 py-2 my-8 relative text-2xl   '>
              🆕&nbsp;📣
              <hr/>
              <Lastpost  posts={lastposts} />
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
        <div title='点赞' className='group  w-full p-3  bg-gray-700 dark:bg-gray-800 rounded-2xl flex justify-center mx-auto '>
          <button id="xiaopindianzan"
            onClick={dianzan} data-umami-event="小屏点赞" 
            className='text-gray-200 dark:text-gray-200 '
          >
            {/* onClick={() => setShowPay((showPay) => !showPay)} */}
            <ThumbUpIcon  className='w-6 h-6 group-hover:scale-150 duration-200' />
            <span id="myupxiaopin" className=' inline-block group-hover:scale-125 duration-200'>{zjk}</span>
          </button>
        </div>
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
