import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import React from 'react'
import { useEffect } from 'react';

import { EyeIcon, ThumbUpIcon } from '@heroicons/react/outline'
const BlogPost = ({ index , post,resdata }) => {
  useEffect(() => {
    const updateDOM = () => {
      for (var value of resdata) {
        const xslug= value.x.substr(1);
        console.log('slug',xslug)
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
  return (
<div>
  <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false} data-umami-event={post.title} >
    <motion.div key={post.id} initial="hidden" whileInView="visible"
                transition={{ delay: 0, duration: 1 }}
                variants={{
                 hidden: { opacity: 0,y: 100,scale:0.8 },
                 visible: { opacity: 1,y: 0,scale:1 },
                }}>  
      <article
          key={post.id}
          className='  bg-gray-200 dark:bg-gray-700 duration-500 relative m-3  cursor-pointer rounded-xl p-5 w-[80vw] lg:w-[45vw] xl:w-96  overflow-hidden '
        >
         <div 
         id='blog-ID' key={post.id}  className="group  justify-between  rounded-xl   " >
            <div   className=' w-full h-full '   >
                <h2 className='   text-lg md:text-xl font-medium mb-2 text-gray-600  dark:text-gray-200 backdrop-blur-sm '>{post.title}</h2>
                <span className=' flex font-light justify-between  text-gray-600 dark:text-gray-400'>
                  <FormattedDate date={post.date} />
                  <div>
                    <EyeIcon className='  mx-3 w-6 h-6 inline-block'/><span id={post.slug} ></span>
                    <ThumbUpIcon className='  mx-3 w-6 h-6 inline-block'/>{post.up}
                  </div>
                </span>
                <p className=' font-light leading-8 text-gray-700 dark:text-gray-100'>{post.summary}</p>

 
                <Image src={post?.page_cover}  alt={post.title} fill
                className=' absolute top-0 left-0  rounded-xl opacity-100 group-hover:opacity-10  translate-x-[100%] duration-500  group-hover:translate-x-0'/>
 
            </div>

        </div>
      </article>
    </motion.div> 
  </Link>
</div>
  )
}

export default BlogPost
