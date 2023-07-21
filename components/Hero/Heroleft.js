// import Image from 'next/image'
import BLOG from '@/blog.config'
import {EyeIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import CardTags from '../Card/CardTag'


const HeroLeft = props => {
  return (
        <div id='bannerGroup' className='flex flex-col  flex-1 rounded-xl w-full '>
            <Banner {...props} />
            <CardTags {...props} />
        </div>
  )
}

function Banner(props) {
  const router = useRouter()
  const { posts } = props

  // 跳转到任意文章
  function handleClickBanner() {
    const randomIndex = Math.floor(Math.random() * posts.length)
    const randomPost = posts[randomIndex]
    router.push(randomPost.slug)
  }

  return <div id='banners' onClick={handleClickBanner} 
          className="group h-full bg-white dark:bg-[#1e1e1e] rounded-xl border dark:border-gray-700 mb-3 relative hidden md:flex md:flex-col overflow-hidden">

        <div id='banner-title' className='flex flex-col absolute top-10 left-10'>
            <div className='text-3xl font-bold mb-3  dark:text-white'>{BLOG.title}</div>
            <div className='text-xs text-gray-600  dark:text-gray-200'>{BLOG.link}</div>
        </div>

        {/* 斜向滚动的图标 *   */}
        <TagsGroupBar  {...props} />
        {/* 遮罩 */}
        <div id='banner-cover' className={'opacity-0 group-hover:opacity-90 duration-300 transition-all bg-[#4259efdd]  cursor-pointer absolute w-full h-full top-0 flex justify-start items-center'}>
            <div className='ml-12 -translate-x-32 group-hover:translate-x-0 duration-300 transition-all ease-in'>
                <div className='text-5xl text-white font-extrabold'>Random &rarr;</div>
            </div>
        </div>

    </div>
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

/**
 * 英雄区左下角3个指定分类按钮
 * @returns
 */
function GroupMenu() {
  return (
        <div className="h-[165px] select-none  md:h-20 flex flex-col w-48 justify-between md:space-y-0 md:flex-row md:w-full md:flex-nowrap md:space-x-3">
            <Link href={BLOG.link} className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-400 flex h-20 justify-start items-center text-white rounded-xl md:hover:w-1/2 md:w-1/3 transition-all duration-500 ease-in">
                <div className="font-bold text-lg pl-5 relative -mt-2">
                    ONE
                    <span className="absolute top-6 left-3 w-1/2 h-1 bg-gradient-to-r from-white  to-white rounded-full
                         group-hover:h-3  ease-in-out transition-all duration-700 group-hover:w-full
                    "> </span>
                </div>
                <div className='absolute right-6  duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0'>
                    <EyeIcon className='w-16 h-16'/>
                </div>
            </Link>
            <Link href={BLOG.link} className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-yellow-500 flex h-20 justify-start items-center text-white rounded-xl md:hover:w-1/2 md:w-1/3 transition-all duration-500 ease-in">
                <div className="font-bold text-lg pl-5 relative -mt-2">
                    TWO
                    <span className="absolute top-6 left-3 w-1/2 h-1 bg-gradient-to-r from-white to-white  rounded-full
                         group-hover:h-3  ease-in-out transition-all duration-700 group-hover:w-full
                    "> </span>
                </div>
                <div className='absolute right-6  duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0'>
                     <EyeIcon className='w-16 h-16'/>   
                </div>
            </Link>
            {/* 第三个标签在小屏上不显示 */}
            <Link href={BLOG.link} className="group relative overflow-hidden bg-gradient-to-r from-teal-300 to-cyan-300 hidden h-20 md:flex justify-start items-center text-white rounded-xl md:hover:w-1/2 md:w-1/3 transition-all duration-500 ease-in">
                <div className="font-bold text-lg pl-5 relative -mt-2">
                THREE
                <span className="absolute top-6 left-3 w-1/2 h-1 bg-gradient-to-r from-white  to-white   rounded-full
                         group-hover:h-3  ease-in-out transition-all duration-700 group-hover:w-full
                    "> </span>
                </div>
                <div className='absolute right-6 duration-700 ease-in-out transition-all scale-[2] translate-y-6 rotate-12 opacity-20 group-hover:opacity-80 group-hover:scale-100 group-hover:translate-y-0 group-hover:rotate-0'>
                    <EyeIcon className='w-16 h-16'/>
                </div>

            </Link>
        </div>
  )
}



export default HeroLeft
