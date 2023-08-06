import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import React from 'react'
import { ThumbUpIcon } from '@heroicons/react/outline'

const BlogPost = ({ index , post }) => {
  return (
    <motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
      <article
          key={post.id}
          className='  bg-gray-300 dark:bg-gray-600 duration-500 relative m-3  cursor-pointer rounded-xl p-5 w-[80vw] lg:w-[45vw] xl:w-96  overflow-hidden '
        >
         <motion.div id='blog-ID' key={post.id}  className="group  justify-between  rounded-xl   " >
            <motion.div   className=' z-10  '   >
                <h2 className='   text-lg md:text-xl font-medium mb-2 text-gray-600  dark:text-gray-200 backdrop-blur-sm '>{post.title}</h2>
                <span className='  hidden md:block text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                  <FormattedDate date={post.date} /><ThumbUpIcon className='  ml-8 mr-1 w-6 h-6 inline-block'/>{post.up}
                </span>
                <p className='   font-light leading-8 text-gray-700 dark:text-gray-100'>{post.summary}</p>

 
                <Image src={post?.page_cover}  alt={post.title} fill
                className=' absolute top-0 left-0  rounded-xl opacity-100 group-hover:opacity-10  translate-x-[100%] duration-1000  group-hover:translate-x-0'/>
                <Image src={post?.page_cover}  alt={post.title} fill
                className=' absolute top-0 left-0  rounded-xl opacity-100 group-hover:opacity-10  -translate-x-[100%] duration-1000  group-hover:translate-x-0'/>
            </motion.div>

        </motion.div>
        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
