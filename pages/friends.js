import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import SupaComments from "@/components/Post/SupaComments"
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import Container from '@/components/Container'
import dynamic from 'next/dynamic'
import { useState } from 'react';

const TwikooCompenent = dynamic(() => {return import('@/components/Post/Twikoo')},{ ssr: false })

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
    <div id="friend" className=' relative flex flex-wrap gap-16 mx-auto justify-center items-center cursor-pointer mb-16 '>
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
                  
                </div>
                <div  className='flex flex-col justify-center  text-xl'>    {post.summary}  </div>
            </Tilt>
          </Link>
        </article>
      ))}

    </div>

    <div className=' flex flex-col mx-auto justify-center '>
        <div className='mx-auto flex flex-row text-2xl italic '>自己加个友链吧</div>
      <form onSubmit={submitForm} className='  mx-auto flex flex-col justify-center items-center content-center '>
        <div className=' p-3 bg-slate-300 dark:bg-slate-600 rounded-xl my-3'>
          <input id="title"  name="title"
            type="text" className=' w-96 bg-white/30 dark:bg-black/30'
            placeholder="请在这里输入自己网站的网址,如 http://mynotion.life"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className=' p-3 bg-slate-300 dark:bg-slate-600 rounded-xl my-3'>
          <input id="icon"  name="icon"
            type="text" className=' w-96 bg-white/30 dark:bg-black/30'
            placeholder="请输入网站标志 logo"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            required
          />
        </div>

        <div className=' p-3 bg-slate-300 dark:bg-slate-600 rounded-xl my-3'>
          <textarea    name="summary"  id="summary"  rows="3"
            className=' w-96 bg-white/30 dark:bg-black/30'
            placeholder="请在这里输入网站的介绍."
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
          ></textarea>
        </div>
        
        <button  type="submit" className=' p-3 w-36 bg-slate-300 dark:bg-slate-600 rounded-xl my-3'>
          Submit
        </button>
      </form>
    </div>
        {/*<SupaComments id="supacomments" />*/}
        <TwikooCompenent id="twikoo" />

    </Container>
  )
}
export default Friend
