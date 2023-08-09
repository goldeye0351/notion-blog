import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import React from 'react'
import {EyeIcon, ThumbUpIcon } from '@heroicons/react/outline'
import Umatongji from './umaview'
const BlogPost = ({  post }) => {
  
  return (    
<motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
        <article
          key={post.id}
          className='group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-xl p-5'
        >
          <Image
            fill
            alt={`${post.title}`}
            src={post?.page_cover}
            className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
          />
          <div className='hidden md:block md-cover absolute inset-0'></div>
          <div className='md:hidden sm-cover absolute inset-0'></div>
          <div className='relative mt-auto'>
            <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
              <h2 className='text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100'>
                 <span className="  ">{post.title}</span>
                 <span className=" hover:scale-110 duration-500    ">{post.tags}</span>
               </h2>
              <span className='text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                <FormattedDate className="mytext2" date={post.date} />
              </span>
            </header>
            <p className='font-light hidden md:block leading-8 text-gray-700 dark:text-gray-300'>{post.summary}</p>
          </div>
          <div className='absolute bottom-0 right-0  p-5 text-gray-600 dark:text-gray-400'>
             <EyeIcon className='  mx-3 w-6 h-6 inline-block'/>{Umatongji({slug:post.slug} ) }
             <ThumbUpIcon className=' m-3 w-6 h-6 inline-block' /> <div className=' inline-block   '>{post.up}</div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
