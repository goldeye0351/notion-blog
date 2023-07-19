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
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.25
    }
  },
  out: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    transition: {
      duration: 0.25
    }
  }
}
export async function getStaticProps({name}) {
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

const blog = ({ tags, posts, currentTag }) => {
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
            console.log("TAG",name)
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


{/*
<div className='flex flex-row space-x-3'>
    <div className=' md:w-4/5 w-full rounded-lg mb-5 md:mb-8 flex justify-center content-center items-center mx-auto  ' >
          <swiper-container loop="true" autoplay="true" slides-per-view="1" autoplay-delay="1500"  navigation="true" pagination="true" scrollbar="true" grab-cursor="true" 
            parallax="true" className="overflow-visible flex  justify-center content-center items-center "
          > 
          {posts.map((png) => (<>

            <swiper-slide key={png.id}  className=" flex justify-center content-center items-center ">
              <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false}>
                <div className=" duration-300 overflow-visible h-96 w-96">
                    <Image src={png?.page_cover}  alt={png.title} fill className=' rounded-3xl'/>
                </div>
                <div data-swiper-parallax="-300" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                className=" absolute top-3 mx-auto p-3 text-lg rounded-lg bg-white/80 dark:bg-black/10"   >
                {png.title}     
                </div>
                <div data-swiper-parallax="-600" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                className=" absolute top-16 mx-auto p-3 rounded-lg bg-white/50 dark:bg-black/10"   >
                {png.summary}     
                </div>
              </Link>
            </swiper-slide>      

            </>
            ))}
          </swiper-container>
    </div>
    <div className=' card  rounded-xl w-full h-96 relative overflow-hidden'>
       <div className=' absolute top-3 left-8 rotate-12  '>
         <marquee width="180" height="380" behavior="scroll" direction="down" >

          <div className=" flex flex-col  space-y-3 ">
            {posts.map((png) => (<>
              <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false}>
               <Image src={png?.page_cover}  alt={png.title} width={180} height={180} className=' rounded-3xl '/>
               {png.title}
              </Link>
             </>))}
          </div>

         </marquee>

       </div>

    </div> 
</div> */}
    <div id="mainmotionblog" >
      <AnimatePresence
        initial={false}
        exitBeforeEnter
      >
        <motion.div
          key={name}
          variants={variants}
          animate='in'
          initial='out'
          exit='out'
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
