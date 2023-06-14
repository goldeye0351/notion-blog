import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const Friend = ({ index , post }) => {
  return (
  <article
          key={post.id}
          className='flex flex-wrap  justify-center items-center cursor-pointer  mb-10'
        >
  <Link  href={post.summary} target='new'>
  <Tilt id='blog-ID' key={post.id}
              className="my3d  
              rounded-lg 
              w-[210px] h-[210px] flex flex-col justify-center"
              perspective={800}
              glareEnable={false}
              glarePosition={'all'}
              glareMaxOpacity={1}              
              glareBorderRadius="9999px"
              scale={1}
            >
      <div className="my3din  flex flex-col justify-center items-center  self-center  ">

        <Image src={post?.page_cover}  alt={post.title} width={300} height={300}
        className=' rounded-lg -z-10'          />
        <div  className='flex flex-col justify-between  text-xl'>    {post.title}  </div>
        
      </div>
      <div  className='flex flex-col justify-center  text-xl'>    {post.summary}  </div>
  </Tilt>
  </Link>
</article>


  )
}

export default Friend
