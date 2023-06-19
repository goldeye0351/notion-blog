import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import FormattedDate from '@/components/Common/FormattedDate'
import React, { useEffect } from 'react'

const BlogPost = ({ index , post }) => {

  useEffect(() => {    AOS.init()  }, [])

  return (
    <motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
      <article
          key={post.id}
          className='group hover:ring-2 shadow-lg shadow-gray-500   hover:scale-105 duration-500 overflow-hidden relative my-16  cursor-pointer rounded-xl p-5'
        >
         <div
                         data-aos="fade-up"
                         data-aos-offset="200"
                         data-aos-delay="50"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-out"
                         data-aos-once="false"
                         data-aos-anchor-placement="top-bottom"
                id='blog-ID'
                key={post.id}
                className={`h-56 w-full md:flex justify-between  ${index % 2 === 1 ? 'flex-row-reverse ' : ''}
                overflow-hidden rounded-xl `}>

                {/* 文字内容 */}
            <div className='relative my-auto mx-auto md:w-5/12 flex justify-center flex-col items-center  self-center  z-10'>
                <h2 className='text-lg md:text-xl font-medium mb-2 text-gray-100  backdrop-blur-sm '>{post.title}</h2>
                <span className='hidden md:block text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                  <FormattedDate date={post.date} />
                </span>
                <p className='font-light leading-8 text-gray-700 dark:text-gray-300'>{post.summary}</p>
            </div>
                {/* 图片封面 */}
            <div className="md:relative md:w-7/12 z-0 
                            w-full h-full overflow-hidden bg-center bg-cover rounded-lg"> 
                <Image src={post?.page_cover}  alt={post.title} fill  />
            </div>

            </div>

        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
