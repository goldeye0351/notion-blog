import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import DaysAgo from './Common/DaysAgo'
import React from 'react'
import { useEffect } from 'react';
import { ChatIcon, EyeIcon, HeartIcon} from '@/Icon/Icon'
const BlogPost = ({ index , post,resdata,allpls }) => {
  const mypls= allpls.filter(pl => pl.Name === post.id)
  useEffect(() => {
    const updateDOM = () => {
      for (var value of resdata) {
        const xslug= value.x.substr(1);
        //console.log('slug',xslug)
        try{
          if (value.x.substr(1).length > 0) {
            var demo = document.getElementById(xslug);
            if (demo) {
              demo.innerHTML = value.y;
            }
          }
        }catch (error) {
          console.log(error);
        }
      }
    };
    updateDOM();
  }, [resdata]);
  return (
<div className=' relative border border-gray-700 dark:border-gray-800 text-gray-200 dark:text-gray-200 '>
  <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false} data-umami-event={post.title} >
    <motion.div key={post.id} initial="hidden" whileInView="visible"
                transition={{ delay: 0, duration: 1 }}
                variants={{
                 hidden: { opacity: 0,y: 100,scale:0.8 },
                 visible: { opacity: 1,y: 0,scale:1 },
                }}>  
        
      <article
          className='   relative m-3  cursor-pointer rounded-xl p-5  overflow-hidden hover:scale-105  duration-300'
        >
         <div 
           className="group  justify-between  rounded-xl   " >
            <div   className=' w-full h-full '   >
                <div className='   text-lg md:text-xl font-medium mb-2  backdrop-blur-sm justify-between flex duration-300 '>
                  {post.title}
                  <div className=' font-light text-base '>
                  {DaysAgo(post.date)}
                  </div>  
                </div>
                {post.Link && <Image src={post.Link} alt={post.title} width={10000} height={300} />}
                <span className=' flex font-light justify-between  '>
                  <FormattedDate date={post.date} />
                </span>
                <div className=' font-light leading-8 '>{post.summary}</div>
                {/*<Image src={post?.page_cover}  alt={post.title} fill className=' absolute top-0 left-0  rounded-xl opacity-100 group-hover:opacity-10  translate-x-[100%] duration-500  group-hover:translate-x-0'/>*/}
             </div>
        </div>
      </article>
    </motion.div>
  </Link>

  <div className='   flex justify-end m-2 '>
    <emoji-reaction endpoint="https://up.51xmi.com" reactTargetId={post.title}  ></emoji-reaction>  
    <EyeIcon className=' mx-1  w-6 h-6 inline-block'/><span id={post.slug} ></span>
    <ChatIcon className=' mx-1 w-6 h-6 inline-block' /> <div className=' inline-block   '> {mypls.length} </div>
  </div>

</div>
  )
}

export default BlogPost