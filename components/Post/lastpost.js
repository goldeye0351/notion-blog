"use client"
import Link from 'next/link'
import BLOG from '@/blog.config'
import Image from 'next/image'
const Lastpost = props => {
  const  { posts ,className} =props

  return <div className={`${className} `}>
            {posts?.slice(0,8).map((data, i) => (
              <div>
              <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false}   key={i} data-umami-event="点击推荐" 
              className=' rounded-lg  my-1 hover:scale-110 duration-300 overflow-hidden
               flex-row w-full flex hover:bg-gray-600 hover:dark:bg-gray-700  '>
                <div className=' h-12 aspect-square relative inline-block' >
                    <Image src={data.page_cover} alt={data.title} width={40} height={40} className="aspect-square  rounded-lg " />
                </div>
                <div className=' flex w-full rounded-lg px-1  '>
                    {data.title}
                </div> 
              </Link></div>
            ))}
</div>}
export default Lastpost