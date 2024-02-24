"use client"
import Link from 'next/link'
import BLOG from '@/blog.config'
import Image from 'next/image'


const Lastpost = props => {
  const  { posts} =props

  return <div className=" flex flex-col  ">
            {posts?.slice(0,8).map((data, i) => (
              <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false}   key={i} className=' rounded-lg h-10 my-1 hover:scale-110 duration-300 overflow-hidden flex-row flex  hover:bg-gray-600 hover:dark:bg-gray-700  '>
                <div className='h-10 w-10 aspect-square relative inline-block' >
                    <Image src={data.page_cover} alt={data.title} fill  className=" rounded-lg " />
                    
                </div>
                <div className='inline-block rounded-lg text-sm px-1  '>
                    {data.title}
                </div> 
              </Link>
            ))}
</div>}
export default Lastpost