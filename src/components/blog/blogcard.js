import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import { ChatIcon, EyeIcon } from '@/Icon/Icon'
import ULike from '../uLike'
import UmamiView from '../uView'
const variants = {
  scaleDown: {
    scale: 0.8,
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
      delay: 0,
    }
  },
}

const BlogCard = ({ post,myplslength,umamiview,umamilike}) => {
  return (<>
<motion.div variants={variants} key={"a"+post.id} className=' blogcard relative my-3 border-b border-gray-600 text-gray-200  '>
  <Link passHref href={`${post.slug}`} scroll={false} >
    <motion.div key={post.id} 
    initial="hidden"     whileInView="visible"    transition={{ delay: 0, duration: 0.25 }}
    variants={{      hidden: { opacity: 0,scale:0.9 },      visible: { opacity: 1,scale:1 },    }}
    >  
        
      <article
          className=' relative mx-3  cursor-pointer rounded-xl p-5  overflow-hidden hover:scale-105  duration-300'
        >
         <div className="group  rounded-xl w-full h-full " >
         
                <div className=' text-lg md:text-xl font-medium mb-2  flex duration-300 '>
                  {post.emoji}{post.title}
                </div>

                <div className='flex flex-row '>
                  <div className=' flex flex-col'>
                    <div className=' font-light text-base '>
                    {post.date}
                    </div>  
                    <div className=' font-light m-2 flex justify-center items-center'>
                      {post.summary}
                    </div>
                  </div>
                  
                  {post.Link &&
                  <div className=' relative h-36  w-full '>
                  <Image src={post.Link} alt={post.title} fill className=' object-fill rounded-xl  ' />
                  </div>
                  }
                </div>

        </div>
      </article>
    </motion.div>
  </Link>

  <div className='   flex justify-end mr-8 mb-3 '>
    <UmamiView slugview={umamiview[0]?.y}  />
    <ULike slug={post.slug} ulike={umamilike[0]?.y} />
    💬<span className=' inline-block ml-1  '> {myplslength} </span>
  </div>

  </motion.div>
</>
  )
}

export default BlogCard