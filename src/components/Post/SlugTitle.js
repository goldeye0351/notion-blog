import {RightArrow } from '@/Icon/Icon'
import Tagitem from './Tagitem'
import Link from 'next/link'

export default function SlugTitle (props) {
  const { post, prev,next} = props

  return (
  <div id="biaoti"  className=' flex flex-col justify-start  p-3 relative '>
      <div className='flex w-full flew-row justify-between cursor-pointer mt-5 blur-0 italic z-50  '>
        <Link passHref href={`/${prev.slug}`} scroll={false} className=' w-1/3 h-6 overflow-hidden hover:text-amber-500'>
          <RightArrow className={'z-50 w-6  inline-block rotate-180 mr-3'} />{prev.title}
        </Link>
        <Link passHref href={`/${next.slug}`} scroll={false} className=' w-1/3 h-6 overflow-hidden flex flex-row-reverse hover:text-amber-500  '>
          <RightArrow className={'z-50 w-6 min-w-[24px] inline-block ml-3 '} /> <div className='inline-block '>{next.title}</div>
        </Link>
      </div>
      <div className='font-bold text-3xl flex justify-center mx-auto md:mt-20 text-gray-200  blur-0   z-50      '>
        {post.title}
      </div> 

      <nav className='flex mt-5 mb-10 items-start z-50'>
        <div className='mr-2 mb-4 md:ml-0'>
          {post.date}
        </div> 
          <div className='flex flex-nowrap max-w-full article-tags'>
          {post.tags.map(tag => (
            <Tagitem key={new Date()+tag}  tag={tag}/>   
          ))}
          </div> 
      </nav>
      

  </div>
  )
}