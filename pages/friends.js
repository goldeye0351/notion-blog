import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import SupaComments from "@/components/Post/SupaComments"
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyFriend: true })

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}

const Friend = ({  posts }) => {
  return (<>
    <div title={BLOG.title} description={BLOG.description} id="friend" className=' relative flex flex-wrap gap-16 mx-auto justify-center items-center cursor-pointer mb-16 '>
      {posts.map((post) => (
  <article
          key={post.id}
          className='flex mx-5 my-5 max-w-min  items-center cursor-pointer  mb-10 ' 
        >
    <Link  href={post.title} target='new'>
      <Tilt id='blog-ID' key={post.id}
                  className="my3d   bg-slate-200 dark:bg-slate-600 
                  rounded-lg 
                  w-[420px] h-[210px] flex flex-row justify-center"
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
      ))}

    </div>
    <SupaComments />
    </>
  )
}
export default Friend
