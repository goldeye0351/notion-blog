import { RightArrow } from '@/Icon/Icon'
import { useEffect, useState } from 'react'

/**
 * 回顶按钮
 * @returns
 */
export default function ReadingProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  useEffect(() => {
    let requestId

    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollY = window.scrollY || window.pageYOffset

      const percent = Math.floor((scrollY / (scrollHeight - clientHeight)) * 100)
      setScrollPercentage(percent)

      requestId = requestAnimationFrame(handleScroll)
    }

    handleScroll() // 初始化滚动位置

    return () => {
      cancelAnimationFrame(requestId)
    }
  }, [])

  return (<>
        <div title={'%'} data-umami-event="回到顶部" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${scrollPercentage > 0 ? ' w-6 h-6 m-3 ' : 'w-0 h-0 opacity-0'} 
                         cursor-pointer  group-hover:scale-125  rounded-lg flex justify-center items-center duration-200 transition-all `} >
            <RightArrow  className={'w-6 h-6 hidden group-hover:block -rotate-90'} />
            <div className=' group-hover:hidden  flex justify-center items-center rounded-lg   '>
                {scrollPercentage < 100 ? scrollPercentage   : <RightArrow className={'w-7 h-7 -rotate-90  '} />}
            </div>
        </div>

    </>)
}
