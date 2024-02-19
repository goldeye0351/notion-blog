import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import BlogPost from '@/components/NBlogPost'
import Container from '@/components/Container'
import PropTypes from 'prop-types'
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'
import BLOG from '@/blog.config'
import Pinglun from '@/components/Post/NotionComment'
import UmamiData from '@/components/UmamiData'
import { LinkIcon, TagIcon, UserIcon, ChatAltIcon,ShareIcon,PlayIcon } from '@heroicons/react/outline'
import Lastpost from '@/components/Post/lastpost'
import BubbleUI from "@/components/Myswiper/Bb";

import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4
    }
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5
    }
  },
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4
    }
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: 'top',
    transition: {
      duration: 0.4
    }
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5
    }
  },
}

const TwitterLayout = ({ tags,cats, posts, currentTag,resdata,tuijian }) => {
  const [searchValue, setSearchValue] = useState('')
  const [fullWidth, setFullWidth] = useState(false);
  
  const toggleFullWidth = () => {      setFullWidth(prevState => !prevState);    };
  const { locale } = useRouter()
  const t = lang[locale]
  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }
  
  const deftag = searchValue === "" ? posts : filteredBlogPosts 
  const tagStyles = {
    0: 'w-1/6 hover:w-full cai1',
    1: 'w-2/6 hover:w-full cai2',
    2: 'w-3/6 hover:w-full cai3',
    3: 'w-4/6 hover:w-full cai1',
    4: 'w-5/6 hover:w-full cai2',
    5: 'w-full hover:w-full cai3',
    
  };
  return (
    <Container fullWidth={fullWidth} title="MyNotion Blog" description={BLOG.description} ogimage={BLOG.link+BLOG.defaultIcon} className={ '  '} >
    <div id='zuozhongyou'  className='flex flex-row '>

      <div id='ltya' className=' hidden md:flex w-52 min-w-[208px] flex-col justify-center  relative '>
        <div id="alltagsdiv" className='fixed top-0  flex-col flex   min-h-screen    '>

          <div id='alltags' className=' flex flex-col flex-grow items-center content-center w-52  px-3  mt-56   '>
            {Object.keys(tags).map((key) => {
                const index = Object.keys(tags).indexOf(key);
                const style = tagStyles[index] || 'cai1'; // 默认样式
              return (
                <button
                  key={key}
                  onClick={() => { setSearchValue(key) }} 
                  className={` group w-full opacity-80 px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between content-center items-center 
                      duration-500 hover:h-12  font-bold  whitespace-nowrap bg-gray-300 dark:bg-gray-700 hover:bg-green-400 dark:hover:bg-green-400`}
                >
                  <div className='w-full flex justify-between  '>
                  <div>{`${key} `}</div >
                  <div>{`(${tags[key]})`}</div> 
                  </div>

                </button>
              )
            })}
          </div>
          <div id='twobutton'  className=' flex mx-auto w-full justify-center space-x-8 ' >
            <button title='fullWidth' onClick={toggleFullWidth} className='flex duration-500'>
              {fullWidth ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=' w-12 h-12 hover:text-green-400 hover:animate-bounce  '>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
              </svg>
              ) :(
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:text-green-400 hover:animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              )}
            </button>
            <div title='contact' className=' mt-auto mb-12 items-center flex justify-center '>
              <Link href='/contact' ><UserIcon className=' w-12 h-12  hover:text-green-400  hover:animate-bounce duration-300  ' /></Link>
            </div>
          </div>


        </div>        
      </div>

      <div id ='midya' className='flex-grow w-full overflow-hidden '>    
        <div id="searchbox" className='relative mx-3'>
          <input type='text' id="inputtext"
          placeholder={t.SEARCH.PLACEHOLDER}
            className='w-full bg-white dark:bg-gray-600 shadow-md rounded-lg outline-none focus:shadow p-3'
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <svg
            className='absolute right-3 top-3 h-5 w-5 text-gray-400'
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
        <div className=' md:hidden flex flex-row justify-center flex-wrap p-1 '>
            {Object.keys(tags).map((key) => {
              return (
                <button
                  key={key}
                  onClick={() => { setSearchValue(key) }} 
                  className="group p-2 rounded-xl   hover:scale-110 duration-300  font-medium  whitespace-nowrap  hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                {`${key} (${tags[key]})`}
                </button>
              )
            })}
          </div>
        <div id="midmain" className=' my-5 md:my-8    '>
          {!deftag.length && (
            <p className='text-gray-500 dark:text-gray-300'>
              {t.SEARCH.NOT_FOUND}
            </p>
          )}
                  <AnimatePresence        initial={false}        exitBeforeEnter      >
                    <motion.div   key={searchValue}
                      variants={variants}
                      initial="in"
                      animate={["center", "scaleUp"]}
                      exit={["scaleDown", "out"]}
                    >
                        {deftag.map((post) => (
                          <BlogPost key={post.id} post={post} index={deftag.indexOf(post)} resdata={resdata} />
                        ))}
                    </motion.div>
                  </AnimatePresence>
        </div>
      </div>

      <div id='rtya' className=' hidden md:block  w-3/12 max-w-[320px]  border-l border-gray-200 dark:border-gray-700 '>
        <div  className=' sticky top-20 px-3 space-y-3  '>
          <div id='bbuiya1' className=' flex   bg-gray-200 dark:bg-gray-700 rounded-xl mb-3 '>
            <BubbleUI className="myBubbleUI h-64 w-80 rounded-3xl ">
              {posts.slice(0,21).map((data, i) => (
                <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false}   key={data.id}>
                  <Image src={data.page_cover} alt={data.title} width={60} height={60}  
                  className=" rounded-full max-w-[100px] max-h-[100px] aspect-square " /> 
                </Link>
              ))}
            </BubbleUI>
          </div>

          <div id='4links' className=' w-full space-y-3 flex-col justify-center flex  dark:text-gray-200 text-gray-700 ' >
              <div className=' flex h-10 flex-row w-full justify-between space-x-3'>
                <Link title='Friends' href='/friends' className='w-full  bg-gray-200 dark:bg-gray-700 rounded-xl group   justify-center flex items-center hover:bg-green-400 dark:hover:bg-green-400 duration-300'>
                  <LinkIcon className=' w-8 h-8  inline-block   group-hover:animate-pulse  ' />
                </Link>
                <Link title='Github' href='https://github.com/goldeye0351/notion-blog' className='w-full bg-gray-200 dark:bg-gray-700 rounded-xl  group   justify-center  flex items-center hover:bg-green-400 dark:hover:bg-green-400 duration-300 '>
                  <svg width="1.04em" height="1em" viewBox="0 0 432 416" xmlns="http://www.w3.org/2000/svg" className=' w-8 h-8  inline-block   group-hover:animate-pulse '>
                    <path fill="currentColor" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0"></path>
                  </svg>
                </Link>
              </div>
              <Link title='umami统计系统' id='umamirtya' href='https://umami.mynotion.life/share/1up60SkH1etMJIqX/mynotion'
                    className='w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-xl group justify-center flex items-center ' >
                  <UmamiData  className='bg-gray-200 dark:bg-gray-700 '/>
              </Link>
          </div>

          <div id='Tuijian' className='  flex flex-col  w-full h-max  bg-gray-300 dark:bg-gray-600 rounded-xl mt-3 p-3'>
            <div className=' w-full text-lg cursor-pointer  flex justify-center '>{'💬🔊'}</div>
            <Lastpost posts={tuijian} />
          </div>
          <div id='plya' className=''>
                  <Pinglun />
              </div>
        </div>
          
      </div>
    </div>
    </Container>
  )
}
TwitterLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default TwitterLayout
