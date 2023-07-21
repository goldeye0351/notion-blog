// import Image from 'next/image'
import BLOG from '@/blog.config'
import {EyeIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'



const Banner = props => {
    const router = useRouter()
    const { posts } = props
  
    // 跳转到任意文章
    function handleClickBanner() {
      const randomIndex = Math.floor(Math.random() * posts.length)
      const randomPost = posts[randomIndex]
      router.push(randomPost.slug)
    }
  return (
        <div id='bannerGroup' className='group flex flex-col  flex-1 rounded-xl w-auto  '>
            <div id='banners' onClick={handleClickBanner} 
          className=" h-full bg-white dark:bg-[#1e1e1e] rounded-xl border dark:border-gray-700  relative hidden md:flex md:flex-col overflow-hidden">

        <div id='banner-title' className='flex flex-col absolute top-10 left-10'>
            <div className='text-3xl font-bold mb-3  dark:text-white'>{BLOG.title}</div>
            <div className='text-xs text-gray-600  dark:text-gray-200'>{BLOG.link}</div>
        </div>

        {/* 斜向滚动的图标 *   */}
        <TagsGroupBar  {...props} />
        {/* 遮罩 */}
        <div id='banner-cover' className={'group '}>
       
            <div id='leftdown' className={' opacity-50 group-hover:opacity-90 translate-x-full  group-hover:-translate-x-0 group-hover:w-1/12 group-hover:animate-spin  group-hover:left-[50%] duration-300 transition-all bg-[#4259efdd]  cursor-pointer absolute w-7/12 h-1/2 bottom-0 flex justify-start items-center rounded-r-full'}></div>

            
            <div className='ml-12 -translate-x-32 opacity-0 group-hover:opacity-90 group-hover:translate-x-0 duration-300 transition-all ease-in absolute top-[50%]'>
                <div className='text-5xl text-white font-extrabold'>Random &rarr;</div>
            </div>

        </div>
        {/* 遮罩2 */}
        <div id='banner-cover' className={'group'}>
            <div id='rup' className={'opacity-50 group-hover:opacity-90 -translate-x-full    group-hover:w-1/12 group-hover:left-[50%] duration-300 transition-all bg-[#ef42d8dd]  cursor-pointer absolute w-7/12 h-1/2 top-0 right-0 flex justify-start items-center  rounded-l-full'}></div>

            <div className='ml-12 translate-x-32 opacity-0 group-hover:opacity-90 group-hover:-translate-x-12 duration-300 transition-all ease-in absolute top-[50%] right-0'>
                <div className='text-5xl text-white font-extrabold'>&larr;Random </div>
            </div>
        </div>
    </div>

        </div>
  )
}


/**
 * 图标滚动标签组
 * 英雄区左上角banner条中斜向滚动的图标
 */
function TagsGroupBar( props) {
  const { posts } = props
  const bg2 = "#" + Math.floor(Math.random()*16777215).toString(16);

  return (
        <div className=" tags-group-all flex -rotate-[30deg] h-56  flex-col space-y-3 ">
            <div className="myiconlunbo  tags-group-wrapper flex flex-nowrap mt-8 ">
                {posts?.map((g) => (<>
                        <div className="tags-group-icon-pair ml-6 select-none">
                            <div className={'tags-group-icon bg-gray-300 dark:bg-gray-600  w-28 h-28 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-md'}>
                                <Image src={g.page_cover} width={100} height={100}  className=' rounded-xl w-[80px] h-[80px]' />
                            </div>
                        </div>
                    </>)
                )}
            </div>
            <div className="myiconlunbo  tags-group-wrapper flex flex-nowrap   ">
                {posts?.map((g) => (<>
                        <div className="tags-group-icon-pair ml-12 select-none">
                            <div style={{ background: bg2 }}  className={'tags-group-icon  w-28 h-28 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-md'}>
                                <Image src={g.page_cover} width={100} height={100}    className='rounded-xl max-h-[100px] max-w-[100px] w-[100px] h-[100px]' />
                            </div>
                        </div>
                    </>)
                )}
            </div>
        </div>
  )
}




export default Banner
