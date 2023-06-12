import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import FormattedDate from '@/components/Common/FormattedDate'

const BlogPost = ({ index , post }) => {
  return (
    <motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
      <article
          key={post.id}
          className='group hover:ring-2 shadow-lg dark:shadow-emerald-900  hover:scale-105 duration-500 overflow-hidden relative my-5 md:my-8 cursor-pointer rounded-xl p-5'
        >
         <div
                id='blog-ID'
                key={post.id}
                className={`h-96 w-full md:flex justify-between  ${index % 2 === 1 ? 'flex-row-reverse ' : ''}
                overflow-hidden rounded-xl `}>

                {/* 文字内容 */}
            <div className='relative my-auto mx-auto w-5/12 flex justify-center flex-col items-center  self-center  z-10'>
                <h2 className='text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100'>{post.title}</h2>
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
