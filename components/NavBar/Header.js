import { useEffect, useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import Logo from '../Common/Logo'
import ThemeSwitcher from './ThemeSwitcher'
import LangSwitcher from './LangSwitcher'
import FullWidth from './FullWidth'
const Header = ({ navBarTitle, toggleFullWidth,fullWidth}) => {
  const [showTitle, setShowTitle] = useState(false)
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const sentinelRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const handler = useCallback(([entry]) => {
    if (useSticky && navRef.current) {
      navRef.current?.classList.toggle('sticky-nav-full', !entry.isIntersecting)
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }, [useSticky])

  useEffect(() => {
    const sentinelEl = sentinelRef.current
    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinelEl)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    })
    return () => {
      sentinelEl && observer.unobserve(sentinelEl)
    }
  }, [handler, sentinelRef])
  return (
    <>
      <div className='observer-element h-3  ' ref={sentinelRef}></div>
      <div
        className={`sticky-nav duration-1000 m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-3 py-8 bg-opacity-60
        ${fullWidth ? 'max-w-[100VW] px-3 ' : '  w-full max-w-7xl' }`}
        id='sticky-nav'
        ref={navRef}
      >
        <div id='51xMI' className='flex items-center text-gray-200 dark:text-gray-200 '>
          <Link passHref href='/' scroll={false} aria-label={BLOG.title}>
            <div className='relative  flex-row flex justify-center items-center content-center ' >
              <Logo className='h-12 w-12 md:h-16 md:w-16    hover:text-green-400  hover:animate-spin fill-current ' />
              <div className=" ml-3 w-fit h-min   items-center mx-auto   border-2 border-green-500 rounded-lg text-green-500  dark:text-green-500  text-xl  md:text-2xl    flex flex-row text cursor-pointer  font-bold  ">
                <div className="   ">&nbsp;51&nbsp;</div>
                <div className=" flex flex-row border-0 bg-green-500 rounded-l-lg rounded-r-sm  dark:bg-green-500  text-white dark:text-white ">
                    &nbsp;xMI&nbsp;             
                </div>
              </div>
             
            </div>
          </Link>
          {navBarTitle ? (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {navBarTitle}
            </p>
          ) : (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {BLOG.title},{' '}
              <span className='font-normal'>{BLOG.description}</span>
            </p>
          )}
        </div>
        <div>
          <ThemeSwitcher />
          <LangSwitcher />
          <FullWidth fullWidth={fullWidth} toggleFullWidth={toggleFullWidth} />

        </div>
      </div>
    </>
  )
}

export default Header
