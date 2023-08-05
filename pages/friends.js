import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import SupaComments from "@/components/Post/SupaComments"
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import Container from '@/components/Container'
//import dynamic from 'next/dynamic'
import { useState } from 'react';
import FlipCard from '@/components/Myswiper/FlipCard'

{/*const TwikooCompenent = dynamic(() => {return import('@/components/Post/Twikoo')},{ ssr: false })*/}

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyFriend: true })
  return {
    props: {      posts    },
    revalidate: 1
  }
}

const Friend = ({  posts }) => {
  // Input states
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [summary, setSummary] = useState('');
  const time1 = new Date();
  const fslug = 'f'+ time1.getTime() ;
  // Form submit handler
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify({ title,icon, summary ,fslug}),
    });
    // Success if status code is 201
    if (res.status === 201) {
      alert('已成功.请刷新查看');

    } else {
      alert('出错了');
    }
  };

  return (<Container  title="Friend. Notion Blog" description={BLOG.description} className='friend' >
    <div id="friend" className=' relative flex  flex-wrap  mx-auto justify-center   items-center cursor-pointer mb-16  '>
      {posts.map((post) => (
        <article    key={post.id}  className='flex m-5  cursor-pointer w-56 rounded-full    '    >
          <Link  href={post.title} target='new'>
            <Tilt id='blog-ID' key={post.id}
                        className="my3d   bg-slate-200 dark:bg-slate-600 rounded-lg  flex flex-row justify-center  "
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
      ))}

    </div>
    <div className='  flex  max-w-fit mx-auto  justify-center mypingcard opacity-80 dark:opacity-100  '>
      <form onSubmit={submitForm} className=' z-50   mx-auto flex flex-col justify-center items-center content-center p-3   '>
        <div className='group w-full mx-auto flex flex-col content-center items-center text-2xl  justify-center rounded-xl    '>
          < div className='h-3 ' />
          <FlipCard
                className=' rounded-xl  duration-500'
                frontContent={
                  <div className=' flex w-full  mx-auto justify-center items-center content-center '>Try</div>
                    }
                backContent={
                  <div className='group-hover:scale-y-150 duration-500 flex w-full  mx-auto justify-center items-center content-center '>自主添加友链,快来试试吧!</div>
                }
            />
          < div className='h-8 ' />
        </div>
        <div className='flex flex-row justify-center space-x-3'> 
          <div>
            <div className=' p-3 bg-slate-300/30 dark:bg-slate-600/30 rounded-xl my-3'>
              <input id="title"  name="title"
                type="text" className=' w-auto xl:w-96 duration-500 bg-white/30 dark:bg-black/30'
                placeholder="Your Site:eg:https://mynotion.life"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className=' p-3 bg-slate-300/30 dark:bg-slate-600/30 rounded-xl my-3'>
              <input id="icon"  name="icon"
                type="text" className=' w-auto xl:w-96 duration-500 bg-white/30 dark:bg-black/30'
                placeholder="Your Logo,eg:https://mynotion.life/favicon.ico"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                required
              />
            </div>
          </div>

          <div className=' p-3 bg-slate-300/30 dark:bg-slate-600/30 rounded-xl my-3'>
            <textarea    name="summary"  id="summary"  rows="3"
              className=' md:w-96 bg-white/30 dark:bg-black/30'
              placeholder="Your Description,.请在这里输入网站的介绍."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            ></textarea>
          </div>

        </div>

        
        <button  type="submit" className=' p-3 text-2xl w-full bg-slate-300/30 dark:bg-slate-600/30 rounded-xl  '>
          Submit
        </button>
      </form>
    </div>
       <SupaComments id="supacomments" />
       {/* <TwikooCompenent id="twikoo" />*/}

    </Container>
  )
}
export default Friend
