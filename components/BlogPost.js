import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import React from 'react'

const BlogPost = ({ index , post }) => {
  return (
    <motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
      <article
          key={post.id}
          className=' bg-gray-300 dark:bg-gray-600  hover:scale-105 duration-500  relative  my-16  cursor-pointer rounded-xl p-5'
        >
         <motion.div
                id='blog-ID'
                key={post.id}
                className={`group h-56 w-full md:flex justify-between  ${index % 2 === 1 ? 'flex-row-reverse ' : ''}
                 rounded-xl `}>

                {/* 文字内容 */}
            <motion.div
              initial={false} 
              whileInView={{ scale: 2 }}
              className='relative my-auto mx-auto md:w-5/12 flex justify-center flex-col  items-center  self-center z-10'
              >
              <div className=' scale-50'>
                <h2 className='   text-lg md:text-xl font-medium mb-2 text-gray-600  dark:text-gray-200 bg-black/50 md:bg-black/0  backdrop-blur-sm '>{post.title}</h2>
                <span className='  hidden md:block text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                  <FormattedDate date={post.date} />
                </span>
                <p className='   font-light leading-8 text-gray-700 dark:text-gray-300'>{post.summary}</p>
              </div>
            </motion.div>
                {/* 图片封面 */}
            <div className="md:relative md:w-6/12 rounded-lg"> 
                <Image src={post?.page_cover}  alt={post.title} fill  />
            </div>

        </motion.div>

        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
