import BLOG from '@/blog.config'
import Friend from '@/components/Friend'
import Container from '@/components/Container'
import {  useState } from 'react';
import { useRouter } from 'next/router'
import FlipCard from '@/components/Myswiper/FlipCard'
import { lang } from '@/public/lang'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import NotionRenderer from '@/components/Post/NotionRenderer'
import { FriendsIcon } from '@/Icon/Icon';

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyFriend: true })
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'friends')
  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
  }

  return {
    props: {
      posts,blockMap,
    },
    revalidate: 3600
  }
}
const FriendS = ({ blockMap,posts }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [summary, setSummary] = useState('');
  const [xie,setXie]=useState(false);
  const toggleXie = () => {      setXie(prevState => !prevState);    };
  const time1 = new Date();
  const fslug = 'f'+ time1.getTime() ;    
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit-form', {
      method: 'POST',
      body: JSON.stringify({ title,icon, summary ,fslug}),
    });
    if (res.status === 201) {
      window.scrollTo({ top: document.getElementById('friend').offsetTop, behavior: 'smooth' })
      setTimeout(() => {
        location.reload(); // 刷新页面
      }, 2000); // 等待2秒后刷新
    } else {
      alert(t.FRIENDS.FAILED_MESSAGE)
    }
  };

  return (<Container  title={`${BLOG.title}---Friends`} description={BLOG.description} ogimage={BLOG.ogimg} className='friend m-auto flex-grow min-h-screen ' >
    <div id="friend" className=' relative flex  flex-wrap  mx-auto justify-center   items-center cursor-pointer mb-16  '>
      {posts?.map((post) => {
        return<Friend post={post} />
      })}
    </div>
    <button onClick={toggleXie} className=' fixed  top-96  lg:right-36 animate-bounce z-50 md:right-16 right-6 text-green-400 dark:text-green-500'><FriendsIcon className={' w-12 h-12 ' }/></button>
    <div className={`${xie ? 'w-full h-full' : 'w-0 h-0 '} flex duration-1000 overflow-hidden flex-col mx-auto justify-center mb-8`}>

        <div id='自主提交' className='group w-full mx-auto flex flex-col content-center items-center text-2xl  justify-center rounded-xl    '>
          < div className='h-3 ' />
          <FlipCard
                className=' rounded-xl  duration-500 text-gray-200 '
                frontContent={
                  <div className=' flex w-full  mx-auto justify-center items-center content-center '>{t.FRIENDS.TITLEA}</div>
                    }
                backContent={
                  <div className='group-hover:scale-y-150 duration-500 flex w-full  mx-auto justify-center items-center content-center '>{t.FRIENDS.TITLEB}</div>
                }
            />
          < div className='h-8 my-3' />
        </div>
      <form onSubmit={submitForm} className=' max-w-screen-md grid sm:grid-cols-2 gap-3  mx-auto text-gray-200'>

        

            <div className='  p-3 w-96 bg-gray-700 dark:bg-gray-800 rounded-xl '>
              <input id="title"  name="title"
                type="text" className=' block w-full duration-500 bg-black/30 dark:bg-black/30'
                placeholder={t.FRIENDS.FORM_SITE}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className='  p-3  bg-gray-700 dark:bg-gray-800 rounded-xl '>
              <input id="icon"  name="icon"
                type="text" className=' block w-full duration-500 bg-black/30 dark:bg-black/30'
                placeholder={t.FRIENDS.FORM_ICON}
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                required
              />
            </div>


          <div className='p-3 sm:col-span-2 bg-gray-700 dark:bg-gray-800 duration-500 rounded-xl'>
            <textarea    name="summary"  id="summary"  rows="3"
              className=' block w-full bg-black/30 dark:bg-black/30 duration-500 rounded-xl'
              placeholder={t.FRIENDS.FORM_CONTENT}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            ></textarea>
          </div>

        

        
        <button  type="submit" className='sm:col-span-2  p-3 text-2xl   bg-gray-700 dark:bg-gray-800  hover:bg-gray-500 dark:hover:bg-gray-600 duration-500 rounded-xl  '>
        <p className='text-gray-400 '>{t.FRIENDS.SUBMIT}</p>
        </button>
      </form>
    </div>

    <div className=' flex flex-col mx-auto justify-center  items-center content-center '>
      <NotionRenderer blockMap={blockMap} className='flex flex-col mx-auto justify-center  items-center content-center' />
    </div>
    </Container>
  )
}
export default FriendS
