import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/types/post'
export default function Lastpost({posts}:{posts:Post[]}) {

  return<>   
<div className='flex flex-col  ' >
            {posts?.slice(0,8).map((data, i) => (
            <div key={data.slug+i} className=' flex even:italic'>
              <Link passHref href={`${data.slug}`} key={i} data-umami-event="点击推荐" 
              className=' rounded-lg  my-1 hover:scale-110 duration-300 overflow-hidden
               flex-row w-full flex hover:bg-gray-600 hover:dark:bg-gray-700  '>
                <div className=' relative inline-block' >
                    <Image src={data.cover} alt={data.slug} width={40}  height={40} priority  className='rounded-lg h-10 w-10 min-w-[40px]   ' />
                </div>
                <div className=' flex rounded-lg px-3 text-sm border-b border-green-400/10  break-words  '>
                    {data.title}
                </div> 
              </Link>
            </div>
            ))}
</div>
</>
}
