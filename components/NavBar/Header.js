import { useEffect, useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import ThemeSwitcher from './ThemeSwitcher'
import LangSwitcher from './LangSwitcher'
import FullWidth from './FullWidth'
import Image from 'next/image'
import xmisvglogo from '@/public/51xmi.svg'
import { PYQ } from '@/Icon/Icon'
//import { UserButton } from "@clerk/nextjs";
const Header = ({ navBarTitle, toggleFullWidth,fullWidth}) => {
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
    return () => {
      sentinelEl && observer.unobserve(sentinelEl)
    }
  }, [handler, sentinelRef])
  return (
    <>
      <div className='observer-element h-3  ' ref={sentinelRef}></div>
      <div
        className={`sticky-nav duration-1000 mx-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-3 py-8 bg-opacity-60 cursor-pointer text-gray-200 dark:text-gray-200
        ${fullWidth ? 'max-w-[100VW] px-3 ' : '  w-full max-w-7xl' }`}
        id='sticky-nav'
        ref={navRef}
      >

          <Link id='51xMI'  passHref href='/' scroll={false} aria-label={BLOG.title} data-umami-event="主页"> 
            <Image src={xmisvglogo}  alt='' className=' w-20 h-20 md:w-24 md:h-24  duration-300 md:ml-3 min-w-[80px]' />
          </Link>


        {navBarTitle ? (
            <div
              className='ml-2 font-medium max-h-5  overflow-hidden '
            >
              {navBarTitle}
            </div>
          ) : (
            <div className='ml-2 max-h-8 overflow-hidden font-medium text-xl' >
              {BLOG.title}{' '}
              <span className='font-normal text-base italic'>{BLOG.description}</span>
            </div>
          )}
        <div className=' min-w-[120px] flex flex-row items-center  '>
          <Link href='/pyq' data-umami-event="朋友圈" className=' ' >
                <PYQ   alt='朋友圈' className='md:w-8 md:h-8 w-6 h-6   duration-500  hover:scale-125 ' />
          </Link>
          <ThemeSwitcher />
          <LangSwitcher />
          <FullWidth fullWidth={fullWidth} toggleFullWidth={toggleFullWidth} />
        </div>
      </div>
    </>
  )
}

export default Header
