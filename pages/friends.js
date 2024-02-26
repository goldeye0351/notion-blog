import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import Friend from '@/components/Friend'
import Container from '@/components/Container'
import { useState } from 'react';
import { useRouter } from 'next/router'
import FlipCard from '@/components/Myswiper/FlipCard'
import { lang } from '@/public/lang'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyFriend: true })
  return {
    props: {      posts    },
    revalidate: 1
  }
}

const FriendS = ({  posts }) => {
  const [showResult, setShowResult] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]
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
      //alert('已成功.请刷新查看');
      setShowResult(true)
    } else {
      //alert('出错了');
      alert(t.FRIENDS.FAILED_MESSAGE)

    }
  };

  return (<Container  title={`${BLOG.title}---Friends`} description={BLOG.description} ogimage={BLOG.ogimg} className='friend m-auto flex-grow min-h-screen ' >
    <div id="friend" className=' relative flex  flex-wrap  mx-auto justify-center   items-center cursor-pointer mb-16  '>
      {posts?.map((post) => (
        <Friend post={post} />
      ))}

    </div>
    {showResult ? (
        <div>
          <p className='max-w-screen-md font-bold md:text-lg text-center mx-auto'>
            {t.FRIENDS.SUCCESS_MESSAGE}
          </p>
        </div>
      ) : (
    <div className='  flex flex-col mx-auto  justify-center mb-8 '>
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
      <form onSubmit={submitForm} className=' max-w-screen-md grid sm:grid-cols-2 gap-3  mx-auto'>

        

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
              className=' block w-full bg-black/30 dark:bg-black/100 duration-500 rounded-xl'
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
      )}


    </Container>
  )
}
export default FriendS
