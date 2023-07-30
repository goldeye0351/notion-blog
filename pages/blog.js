import Container from '@/components/Container'
import BlogPost from '@/components/MBlogPost'
import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import PropTypes from 'prop-types'
import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
register()
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayIcon,ShareIcon } from "@heroicons/react/outline"

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
export async function getStaticProps({}) {
  const posts = await getAllPosts({ onlyPost: true })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      posts,
      tags,
    },
    revalidate: 1
  }
}

const blog = props => {
  const { posts,tags } = props
  const [name, setName] = useState('')
  const filteredBlogPosts = posts.filter(
    (post) => post && post.tags && post.tags.includes(name)
  )
 const deftag = name === "" ? posts : filteredBlogPosts 

  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <div id="allswiper" className=" mt-3 w-full min-h-[60vh] max-h-[60vh]   rounded-2xl relative  overflow-clip  ">
            <swiper-container loop="true" autoplay="true" slides-per-view="auto" autoplay-delay="3000" 
            navigation="true" parallax="true" pagination="true" scrollbar="true" grab-cursor="true" 
            > 
            
            {deftag.map((png) => (<>
                <swiper-slide key={png.id}  >
                    <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false}  
                    className=" h-[60VH] min-h-[60vh] max-h-[60vh] flex flex-col justify-center ">
                        {png?.page_cover}
                        <Image key={png.id} src={png?.page_cover} alt={png.title} fill className='rounded-3xl  static '/>
                        <div data-swiper-parallax="1000" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                        className=" absolute top-[0%] flex justify-center right-[0%]  p-3 text-xl rounded-lg bg-white/80 dark:bg-black/50"   >
                        {png.title}     
                        </div>
                        <div data-swiper-parallax="-1000" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="1000"
                        className=" absolute bottom-0 flex justify-center left-[0%] mx-auto p-3 rounded-lg bg-white/80 dark:bg-black/50"   >
                        {png.summary}     
                        </div>
                    </Link>
                </swiper-slide>
            </>))}
            </swiper-container>
      </div>  
      <div id="trreetags" className='tag-container my-3'>
        <div className=' flex flex-row flex-grow  w-full items-center justify-between  space-x-2 '>
          {Object.keys(tags).map((key) => {
            return (
              <button
                key={key}
                onClick={() => { setName(key) }} 
                className={` group px-3 w-1/3 hover:w-1/2 h-16 flex flex-row justify-between content-center items-center   ${ Object.keys(tags).indexOf(key)% 3 === 0 ? 'cai1 ' :Object.keys(tags).indexOf(key)% 3  === 1 ? 'cai2 ' : 'cai3'}
                overflow-hidden rounded-xl   hover:scale-110 duration-500   m-1 font-medium  whitespace-nowrap  hover:bg-gray-400 dark:hover:bg-gray-600`}
              >
               {`${key} (${tags[key]})`}
                <ShareIcon 
                className={`inline-block scale-150  h-16 w-16 -rotate-45 opacity-50 group-hover:rotate-0 group-hover:opacity-100 group-hover:scale-105     ${ Object.keys(tags).indexOf(key)% 2 === 1 ? 'hidden ' : ''}
                duration-500 `}/>
                <PlayIcon 
                className={`inline-block scale-150  h-16 w-16 -rotate-45 opacity-50 group-hover:rotate-0 group-hover:opacity-100 group-hover:scale-105      ${ Object.keys(tags).indexOf(key)% 2 === 1 ? ' ' : 'hidden'}
                duration-500 `}/>
              </button>
            )
          })}
        </div>
      </div>

    <div id="mainmotionblog" className=" overflow-hidden " >
      <AnimatePresence        initial={false}        exitBeforeEnter      >
        <motion.div   key={name}
          variants={variants}
          initial="in"
          animate={["center", "scaleUp"]}
          exit={["scaleDown", "out"]}
        >
      {deftag.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
        </motion.div>
      </AnimatePresence>
    </div>

    </Container>
  )
}
blog.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default blog
