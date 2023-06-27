import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import 'aos/dist/aos.css' 
import FormattedDate from '@/components/Common/FormattedDate'
import React, { useEffect } from 'react'
const BlogPost = ({ index , post,className }) => {
  

  return (
    <motion.div className={className} >
      <Link passHref href={`${BLOG.path}/${post.slug}`} >
      <article
          key={post.id}
          className='group mb-5 md:mb-8 cursor-pointer rounded-xl p-5 mx-8 my-8 w-full h-full '
        >
          

          <div className='relative mt-auto'>
            <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
              <h2 className='text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100'>{post.title}</h2>
              <span className='text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                <FormattedDate date={post.date} />
              </span>
            </header>
            <p className='font-light block leading-8 text-gray-700 dark:text-gray-300'>{post.summary}</p>
            {/* w-4/5  */}
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
