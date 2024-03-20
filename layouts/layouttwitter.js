import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import BlogPost from '@/components/NBlogPost'
import Container from '@/components/Container'
import PropTypes from 'prop-types'
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'
import BLOG from '@/blog.config'
import LastPinglun from '@/components/Post/LastComments'
import UmamiData from '@/components/UmamiData'
import { LinkIcon, LoginIcon ,FriendsIcon, Github, Pic1Icon} from '@/Icon/Icon'
import Lastpost from '@/components/Post/lastpost'
import BubbleUI from "@/components/Myswiper/Bb";
import { motion, AnimatePresence } from 'framer-motion'
import Tabs from '@/components/Post/Tabs'
import Tilt from 'react-parallax-tilt' 
import Typed from 'typed.js'
import { useRef, useEffect } from 'react';
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

const TwitterLayout = ({allpls, tags, posts, resdata,tuijian,fullWidth }) => {
  const post = {
    id: 'Home',
    title: 'Home'
  };
  const [searchValue, setSearchValue] = useState('')
  const { locale } = useRouter()
  const { [searchValue]: tagValue } = BLOG.tag;
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
  const el = useRef(null); // 创建一个引用
  useEffect(() => {
    if (searchValue.length > 0 && BLOG.tag[searchValue]) {
      const typed = new Typed(el.current, {
        strings: [BLOG.tag[searchValue]],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, [searchValue.length]);
  return (<>


  <Container fullWidth={fullWidth} title={BLOG.title} description={BLOG.description} ogimage={BLOG.ogimg} className={ ' m-auto text-gray-200 dark:text-gray-200 min-h-screen '} >
    <div id='zuozhongyou'  className='flex flex-row '>
      <div id='ltya' className=' hidden lg:flex w-52 min-w-[208px] flex-col justify-center  relative '>
        <div id="tagsAndMe" className='fixed top-0  flex-col flex   min-h-screen    '>

          <div id='alltags' className=' flex flex-col flex-grow items-center content-center w-52  px-3  mt-24   '>
            <div className='w-full px-3 m-1 h-12 overflow-hidden rounded-xl flex flex-row justify-between   content-center items-center 
                       hover:h-14   font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 
                       hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                       hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400'>
              <div>{t.BLOG.POSTS}({posts.length})</div>
              <div>{t.BLOG.COMMENTS}({allpls.length})</div>
            </div>
            {Object.keys(tags).map((key) => {
                const index = Object.keys(tags).indexOf(key);
                const style = tagStyles[index] || 'cai1'; // 默认样式
              return (
                <button
                  key={key}
                  onClick={() => { setSearchValue(key) }} 
                  data-umami-event='切换TAGS'
                  className={` group w-full px-3 m-1 h-10 overflow-hidden rounded-xl flex flex-row justify-between content-center items-center 
                       hover:h-12  font-bold  whitespace-nowrap bg-gray-700  dark:bg-gray-800 
                       hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                       hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400 `}
                >
                  <div className='w-full flex justify-between  '>
                  <div>{`${key} `}</div >
                  <div>{`(${tags[key]})`}</div> 
                  </div>

                </button>
              )
            })}
          {/*<div className='w-full flex justify-center overflow-auto rounded-xl  bg-gray-700 dark:bg-gray-800'>
                {searchValue && BLOG.tag[searchValue]}
          </div>*/}
          </div>

          <div id='twobutton'  className=' flex mx-auto w-full justify-center mt-auto mb-6 ' >
                <Link title='login' href='/tt' data-umami-event='登录' className='group  rounded-2xl h-12 w-full p-3   justify-center flex items-center '>
                    <Tilt className="my3d rounded-2xl w-full h-12 hover:ring-2 ring-green-400 hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)]  "
                          perspective={1500}
                          glareEnable={true}
                          glarePosition={'all'}
                          glareMaxOpacity={0.5}
                          glareColor="#000000"
                          glareBorderRadius="12px"
                          scale={1.01}
                        >
                      <div className=' my3din w-full h-12 flex justify-center items-center content-center rounded-full '>
                        <LoginIcon className=' group-hover:text-green-400  w-12 h-12   '/>
                      </div>
                  </Tilt>
                    

                </Link>
          </div>
        </div>        
      </div>

      <div id ='midya' className='flex-grow w-full overflow-hidden '>    
        <div id="searchbox" className='relative mx-3'>
          <input type='text' id="inputtext" data-umami-event="search"
          placeholder={t.SEARCH.PLACEHOLDER}
            className='w-full bg-gray-700 dark:bg-gray-800 shadow-md rounded-lg outline-none focus:shadow p-3'
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
            {Object.keys(tags).map((key) => {
              return (
                <button
                  key={key}
                  onClick={() => { setSearchValue(key) }} 
                  data-umami-event='search'
                  className="group p-2 rounded-xl   hover:scale-110   font-medium  whitespace-nowrap 
                  hover:shadow-[0_0_30px_1px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                  "
                >
                {`${key} (${tags[key]})`}
                </button>
              )
            })}
          </div>
        <div id="midmain" className=' my-5 lg:my-8    '>
           {!deftag.length && (  <span>  {t.SEARCH.NOT_FOUND}  </span> )}
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
      <Link title='login' href='/tt' data-umami-event='手机登录'  >
        <LoginIcon className='lg:hidden hover:text-green-400  hover:scale-125 duration-300  w-8 h-8 fixed bottom-3  right-3    '/>
      </Link>
      <div id='rtya' className=' hidden lg:block  w-3/12 max-w-[320px] ml-3  '>
        <div  className=' px-3  sticky top-[10vh] '>
          <Link title='umami统计系统' id='umamirtya' href={BLOG.umamiUrl} target='_blank' data-umami-event='统计系统'>
              <UmamiData />
          </Link>

          <div key='最近文章' id='bbuiya1' className='flex bg-gray-700 dark:bg-gray-800 rounded-xl mb-3 '>
          
            <BubbleUI className="myBubbleUI h-72 w-80 overflow-y-scroll rounded-3xl ">
              {posts.slice(0,21).map((data, i) => (
                <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false} data-umami-event='手表控件'  key={data.id}>
                  <Image src={data.page_cover} alt={data.title} width={60} height={60}  
                  className="hover:scale-125 duration-300  rounded-full max-w-[100px] max-h-[100px] aspect-square " /> 
                </Link>
              ))}
            </BubbleUI>
            
          </div>
          <div ref={el}   className={(!BLOG.tag[searchValue]? 'hidden' :'w-full flex p-3 -mb-3 whitespace-wrap shadow-[0_0_30px_1px_rgba(0,255,0,0.5)]  bg-day dark:bg-night ring-1 ring-green-400  dark:ring-green-400justify-center overflow-auto rounded-xl ')}  />
          <Tabs>
            <div key={t.BLOG.TUIJIAN} id='Tuijian' className=' overflow-x-hidden bg-gray-700 dark:bg-gray-800 rounded-xl  p-3'>
              <Lastpost posts={tuijian} className='w-72 pr-6 '  />
            </div>
            <div key={t.BLOG.LASTCOMMENTS} className=' w-full overflow-x-hidden  bg-gray-700 dark:bg-gray-800 rounded-xl  p-3'>
                          <div id='plya' className=' w-80  overflow-y-scroll   '>
                          {allpls.slice(0,9).map((post) => (
                                <LastPinglun post={post} key={post.id} className='w-64 flex space-x-1 even:italic' />
                          ))}  
                          </div>
            </div>
            </Tabs>
            <div id='4links' className=' w-full space-y-3 flex-col justify-center flex text-gray-200 ' >
              <div className=' flex h-12 flex-row w-full justify-between space-x-3'>
                <Link title='Friends' href='/friends' data-umami-event="点友链" className='w-1/2 hover:w-full  bg-gray-700 dark:bg-gray-800 rounded-xl group   justify-center flex items-center 
                      hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                      hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400 '>
                  <FriendsIcon className=' w-9 h-9  inline-block  mr-1   ' />
                </Link>
                <Link title='Github' href={BLOG.githubUrl} target='_blank' data-umami-event="点github"  className='w-1/2 hover:w-full bg-gray-700 dark:bg-gray-800 rounded-xl  group   justify-center  flex items-center
                  hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                  hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400  '>
                    <Github className=' w-8 h-8  inline-block    mr-1 githubCorner  ' />
                </Link>
                <Link title='Pichub' href='/pichub' target='_blank' data-umami-event="点Pichub"  className='w-1/2 hover:w-full bg-gray-700 dark:bg-gray-800 rounded-xl  group   justify-center  flex items-center
                  hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300 hover:bg-day hover:dark:bg-night
                  hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400  '>
                    <Pic1Icon className=' w-8 h-8  inline-block    mr-1   ' />
                </Link>
              </div>
            </div>
        </div>


      </div>
    </div>
  </Container> 
     </>
  )
}
TwitterLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default TwitterLayout
