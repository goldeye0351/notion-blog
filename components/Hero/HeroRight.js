// import Image from 'next/image'

import BLOG from '@/blog.config'
import { EyeIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useImperativeHandle, useRef, useState } from 'react'

const HeroRight = props => {
  return (
    <hero id="1cover6" className=" flex rounded-xl overflow-x-scroll flex-1 relative w-full " >

        <TopGroup {...props} />
    </hero>
  )
}

/**
 * 置顶文章区域
 */
function TopGroup(props) {
  const { posts } = props
  const todayCardRef = useRef()
  const posts6 = posts.slice(0, 6)
  function handleMouseLeave() {
    todayCardRef.current.coverUp()
  }
  return (
        <div id='hero-right-wrapper' onMouseLeave={handleMouseLeave} className='flex relative w-full '>
            {/* 制定最新文章 */}
            <div id='top-group' className='w-full flex space-x-3 md:space-x-0 md:grid md:grid-cols-3 md:gap-3'>
                {posts6.map((p) =>  (
                   <Link href={`${BLOG.path}/${p?.slug}`} key={p.id}>
                        <div className='cursor-pointer min-h-[150px] group relative flex flex-col w-52 md:w-full overflow-hidden shadow bg-white dark:bg-black dark:text-white rounded-xl object-cover'>
                            <Image fill  src={p?.page_cover} />
                            <div className='group-hover:text-indigo-600 dark:group-hover:text-yellow-600  
                            group-hover:translate-y-2 duration-200 transition-all line-clamp-2 overflow-hidden m-2 font-semibold absolute bottom-2 right-1 bg-white/50 dark:bg-black/50 rounded-xl '>
                            {p?.title}
                            </div>
                            {/* hover 悬浮 */}
                            <div className='opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-200 transition-all absolute -top-2 -left-2 bg-indigo-600 dark:bg-yellow-600  text-white rounded-xl overflow-hidden pr-2 pb-2 pl-4 pt-4 text-xs'>
                                <EyeIcon className='w-6 h-6'/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <TodayCard cRef={todayCardRef} />
        </div>
  )
}

/**
 * 英雄区右侧，今日卡牌
 * @returns
 */
function TodayCard({ cRef }) {
  const router = useRouter()
  // 卡牌是否盖住下层
  const [isCoverUp, setIsCoverUp] = useState(true)

  /**
     * 外部可以调用此方法
     */
  useImperativeHandle(cRef, () => {
    return {
      coverUp: () => {
        setIsCoverUp(true)
      }
    }
  })

  /**
     * 点击更多
     * @param {*} e
     */
  function handleClickMore(e) {
    e.stopPropagation()
    setIsCoverUp(false)
  }

  /**
     * 点击卡片跳转的链接
     * @param {*} e
     */
  function handleCardClick(e) {
    router.push(BLOG.link)
  }

  return <div id='today-card2' className={`${isCoverUp ? ' ' : 'pointer-events-none'} overflow-hidden absolute hidden md:flex flex-1 flex-col h-full top-0 w-full`}>
        <div id='card-body2' onClick={handleCardClick} className={`${isCoverUp ? 'opacity-100 cursor-pointer' : 'opacity-0 transform scale-110 pointer-events-none'} shadow transition-all duration-200 today-card h-full bg-[#0E57D5] rounded-xl relative overflow-hidden flex items-end`}>
            <div id='today-card-info' className='z-10 flex justify-between w-full relative text-white p-10 items-end'>
                <div className='flex flex-col'>
                    <div className='text-xs font-light'>{BLOG.description}</div>
                    <div className='text-3xl font-bold'>{BLOG.title}</div>
                </div>
                <div onClick={handleClickMore} className={`'${isCoverUp ? '' : 'hidden pointer-events-none '} flex items-center px-3 h-10 justify-center bg-[#425aef] hover:bg-[#4259efcb] transition-colors duration-100 rounded-3xl`}>
                    <EyeIcon className={'w-6 h-6 mr-2 bg-white rounded-full stroke-indigo-400'} />
                    <div id='more' className='select-none'>More</div>
                </div>
            </div>
            <div id='16cover' className={`${isCoverUp ? '' : ' pointer-events-none'} cursor-pointer today-card-cover absolute w-full h-full top-0`} >
            <Image fill  src={BLOG.defaultCover} />
            </div>
        </div>
    </div>
}

export default HeroRight
