import { ArrowSmUpIcon } from '@heroicons/react/outline'
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
        <div title={'阅读进度'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`${scrollPercentage > 0 ? ' w-6 h-6 ' : 'w-0 h-0 opacity-0'} group cursor-pointer  hover:bg-opacity-10 hover:scale-125  rounded-lg flex justify-center items-center duration-200 transition-all`} >
            <ArrowSmUpIcon className={'w-6 h-6 hidden group-hover:block'} />
            <div className=' group-hover:hidden  flex justify-center items-center rounded-lg   '>
                {scrollPercentage <= 100 ? scrollPercentage : <ArrowSmUpIcon className={'p-2  '} />}
            </div>
        </div>

    </>)
}
