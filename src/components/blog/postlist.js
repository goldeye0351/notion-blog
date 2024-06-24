'use client'
import BLOG from '@/blog.config'
import { useEffect,useRef,useState } from 'react'
import BlogCard from './blogcard'
import RingsCard from '../Common/RingsCard'
import TiltCard from '../Common/TiltCard'
import { motion,AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { LoginIcon,Github,Pic1Icon } from '@/Icon/Icon'
import Typed from 'typed.js'
import UmamiData from '@/components/UmamiData';
import LastPinglun from '@/components/blog/LastComments';
import Lastpost from '@/components/blog/lastpost';
import Tabs from '@/components/Tabs';
import PGWatch from '@/components/blog/watch';

import { Post } from '@/types/post';

const variants = {
  scaleDown: {
    scale: 0.5,
    y: 100,
    transition: {
      duration: 0.4,
    }
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5,
    }
  },
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4,
    }
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: 'top',
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
}

const Postlist = ({allpls, tags, posts,umamialllike ,umamiallurl }) => {
  const tuijian  = posts.filter(post => parseInt(post.up) === 999)

  const [searchValue, setSearchValue] = useState('')
  //const {user} = useUser()
  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }
  
  const deftag = searchValue === "" ? posts : filteredBlogPosts 
  const el = useRef(null); // 创建一个引用
  useEffect(() => {
    if (searchValue.length > 0 && BLOG.tag[searchValue]) {
      const typed = new Typed(el.current, {
        strings: [BLOG.tag[searchValue]],
        typeSpeed: 50,
        showCursor: false,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, [searchValue]);

  return (<>
      <div id='ltya' className=' hidden lg:flex w-52 min-w-[208px] flex-col justify-start   relative '>
        <div id="tagsAndMe" className='  sticky top-24 flex-col flex   min-h-screen    '>

          <div id='alltags' className=' flex flex-col flex-grow items-center content-center w-52  px-3     '>
            <div onClick={() => { setSearchValue('')}}  className='w-full px-3 m-1 h-12 overflow-hidden rounded-xl flex flex-row justify-between   content-center items-center 
                       hover:h-14   font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 
                       hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                       hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400'>
              <div>文章({posts.length})</div>
              <div>评论({allpls.length})</div>
            </div>
            {Object.keys(tags).map((key) => {
              return (
                <button
                  key={key}
                  onClick={() => { setSearchValue(key) }} 
                  data-umami-event='切换TAGS'
                  className={searchValue===key 
                  ?
                  'group w-full px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between content-center items-center hover:h-12  font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night ring-1 ring-green-400 ' 
                  : 
                  'group w-full px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between content-center items-center hover:h-12  font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400' }
                >
                 <div className='w-full flex justify-between  '>
                    <div>{`${key} `}</div >
                    <div>{`(${tags[key]})`}</div>
                  </div>
                </button>
              )
            })}

          </div>

          <div id='twobutton'  className=' flex mx-auto w-full justify-center mt-auto mb-36 ' >
            <RingsCard>
              <Link title='telme' href='/contact' data-umami-event='联系我' className='group  rounded-2xl  p-8  justify-center flex items-center '>
                <TiltCard>                    
                        <LoginIcon className=' group-hover:text-green-400  w-12 h-12   '/>

                </TiltCard>
              </Link>
            </RingsCard>
          </div>
        </div>        
      </div>

      <div id ='midya' className='flex-grow w-full overflow-hidden '>    
        <div id="searchbox" className='relative mx-3'>
          <input type='text' id="inputtext" data-umami-event="search"
          placeholder="查找"
            className='w-full bg-gray-700 duration-300 dark:bg-gray-800 shadow-md rounded-lg outline-none focus:shadow p-3'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            className='absolute right-3 top-3 h-5 w-5 '
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <div className=' lg:hidden flex flex-row justify-center flex-wrap p-1 '>
            <div onClick={() => { setSearchValue('')}}  className='px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between   content-center items-center 
                       hover:h-14   font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 
                       hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                       hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400'>
              <div>文章({posts.length})</div>
            </div>
            {Object.keys(tags).map((key) => {
              return (
                <button
                  key={key}
                  onClick={() => { setSearchValue(key) }} 
                  data-umami-event='切换TAGS'
                  className={searchValue===key 
                  ?
                  'group px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between content-center items-center hover:h-12  font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night ring-1 ring-green-400 ' 
                  : 
                  'group px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between content-center items-center hover:h-12  font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400' }
                >
                 <div className='  '>
                    <div>{`${key} `}{`(${tags[key]})`}</div>
                  </div>
                </button>
              )
            })}
          </div>
        <div id="midmain" className=' my-5 lg:my-8    '>
           {!deftag.length && (  <span> 空空如也 </span> )}
              <AnimatePresence        initial={true}  mode="wait" >
                <motion.div   key={searchValue}
                  variants={variants}
                  initial="in"
                  animate={["center", "scaleUp"]}
                  exit={["scaleDown", "out"]}
                >

                        {deftag.map((post) => {
                          const umamiview=umamiallurl.filter((x) => x.x.substring(1) === post.slug);
                          const umamilike=umamialllike.filter((x) => x.x === post.slug);
                          const mypls= allpls.filter(pl => pl.title === post.id).length
                          
                          return<BlogCard key={post.id} post={post} myplslength={mypls} umamiview={umamiview} umamilike={umamilike }  />
                        })}

                </motion.div>
              </AnimatePresence>
        </div>
      </div>

      <div id='rtya' className='  hidden lg:block  w-3/12 max-w-[320px] ml-3  '>
      <div  className=' px-3  sticky top-[10vh] space-y-3 '>
          <Link title='umami统计系统' id='umamirtya' href={BLOG.umamiUrl} target='_blank' data-umami-event='统计系统'>
              <UmamiData />
          </Link>
          
          <PGWatch posts={posts} />
          
          <div ref={el}   className={(!BLOG.tag[searchValue]? 'hidden' :'w-full italic text-sm  flex p-3 mb-6 whitespace-wrap shadow-[0_0_30px_1px_rgba(0,255,0,0.5)]  bg-day dark:bg-night ring-1 ring-green-400  dark:ring-green-400justify-center overflow-auto rounded-xl ')}  />

          <Tabs>
            <div key="推荐文章" id='Tuijian' className=' overflow-x-hidden bg-gray-700 duration-300 dark:bg-gray-800 rounded-xl  p-3'>
                <Lastpost posts={tuijian} />
            </div>
            <div key="最近评论" id="lastcomment" className=' w-full overflow-x-hidden  bg-gray-700 duration-300 dark:bg-gray-800 rounded-xl  p-3'>
               <LastPinglun allpls={allpls} />
            </div>
          </Tabs>

          <div id='2links' className=' w-full space-y-3 flex-col justify-center flex text-gray-200 ' >
              <div className=' flex h-12 flex-row w-full justify-between space-x-3'>
                <Link title='Github' href={BLOG.githubUrl} target='_blank' data-umami-event="点github"  className='w-1/2 hover:w-full bg-gray-700 dark:bg-gray-800 rounded-xl  group   justify-center  flex items-center
                  hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                  hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400  '>
                    <Github className=' w-8 h-8  inline-block    mr-1 githubCorner  ' />
                </Link>
                <Link title='Pichub' href='https://pichub.51xmi.com' target='_blank' data-umami-event="点Pichub"  className='w-1/2 hover:w-full bg-gray-700 dark:bg-gray-800 rounded-xl  group   justify-center  flex items-center
                  hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                  hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400  '>
                    <Pic1Icon className=' w-8 h-8  inline-block    mr-1   ' />
                </Link>
              </div>
          </div>

      </div>
    </div>

     </>
  )
}

export default Postlist