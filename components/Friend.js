import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'




const Friend = ({ post }) => {
  return (
    <article    key={post.id}  className='flex m-5  cursor-pointer w-56 rounded-full    '    >
    <Link  href={post.title} target='new'>
      <Tilt id='blog-ID' key={post.id}
                  className="my3d   bg-gray-100 dark:bg-gray-700 rounded-lg  flex flex-row justify-center  "
                  perspective={800}
                  glareEnable={false}
                  glarePosition={'all'}
                  glareMaxOpacity={1}              
                  glareBorderRadius="9999px"
                  scale={1}
                >
          <div className="my3din  flex flex-col justify-center  ">
            <Image src={post?.page_cover}  alt={post.title} width={100} height={100}
            className=' rounded-lg translate-x-[30%]  '  />
          </div>
          <div  className='flex flex-col justify-center h-20 max-h-20  overflow-scroll p-3  '> {post.summary}  </div>
      </Tilt>
    </Link>
  </article>


  )
}

export default Friend
