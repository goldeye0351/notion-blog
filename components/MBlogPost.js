import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import React from 'react'
import {EyeIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { useEffect } from 'react';
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'

const BlogPost = ({  post,resdata }) => {

  useEffect(() => {
    const updateDOM = () => {
      for (var value of resdata) {
        const xslug= value.x.substr(1);
        //console.log('slug',xslug)
        try{
          if (value.x.substr(1).length > 0) {
            var demo = document.getElementById(xslug);
            demo.innerHTML = value.y;
          }
        }catch (error) {
          console.log(error);
        }
      }
    };
    updateDOM();
  }, [resdata]);
  const { locale } = useRouter()
  const t = lang[locale]
  return (    
<motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false} data-umami-event={post.id}>
      <motion.div key={post.id} initial="hidden" whileInView="visible"
                transition={{ delay: 0, duration: 1 }}
                variants={{
                 hidden:  { opacity: 0, x:200 ,y: 100, scale:0.8 },
                 visible: { opacity: 1, x:0,   y: 0,   scale:1 },
                }}>  
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
              </h2>
              <span className='text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                <FormattedDate className="mytext2" date={post.date} />
              </span>
            </header>
            <div className=" duration-500   rounded-xl p-1 space-x-3 text-sm flex flex-row justify-between text-gray-700 dark:text-gray-300">
              <div className=' italic'>
                <div className=" duration-500 inline-block   rounded-xl p-1  ">{t.BLOG.CATEGORY}:{post.category}</div>
                <div className=" duration-500 inline-block   rounded-xl p-1  space-x-3 ">{t.BLOG.TAGS}:.{post.tags[0]}.{post.tags[1]}.{post.tags[2]}.{post.tags[3]}.{post.tags[4]}</div>
              </div>
              <div>
                <EyeIcon className=' mx-1  w-6 h-6 inline-block'/><span id={post.slug} ></span>
                <ThumbUpIcon className=' mx-1 w-6 h-6 inline-block' /> <div className=' inline-block   '>{post.up}</div>
             </div>
            </div>

            <p className='font-light hidden md:block leading-8 text-gray-700 dark:text-gray-300'>{post.summary}</p>
          </div>

        </article>
        </motion.div> 
      </Link>
    </motion.div>
  )
}

export default BlogPost
