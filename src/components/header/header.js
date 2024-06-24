import { useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
//import ThemeSwitcher from './ThemeSwitcher'
import { LoginIcon } from '@/Icon/Icon'
import FullWidth from './FullWidth'
import Image from 'next/image'

import NavBar from './Nav'

import styles from './header.module.css'
const removesticky= styles.removesticky
const stickynavfull= styles.stickynavfull

import { SignInButton,UserButton,SignedIn,SignedOut} from "@clerk/nextjs";
const Header = ({ navBarTitle, toggleFullWidth,fullWidth}) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const sentinelRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const handler = useCallback(([entry]) => {
    if (useSticky && navRef.current) {
      navRef.current?.classList.toggle(stickynavfull, !entry.isIntersecting)
    } else {
      navRef.current?.classList.add(removesticky)
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
  
  return (<>
    <div className='observer-element h-3 w-screen  ' ref={sentinelRef}>
      
    </div>
    <div
      className={`${styles.stickynav} duration-1000  mx-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-3 py-8 bg-opacity-60 cursor-pointer text-gray-200 dark:text-gray-200
      ${fullWidth ? 'max-w-[100VW] px-3 ' : '  w-full max-w-7xl' }`}
      id='sticky-nav'
      ref={navRef}
    >

        <Link id='51xMI'  passHref href='/' scroll={false} aria-label={BLOG.title} > 
          <Image src='/51xmi.svg'  alt='51xmi.com' width={100} height={40} priority className=' w-20  md:w-24   duration-300 md:ml-3 min-w-[80px]' />
        </Link>
          {/*<div   className='ml-2 font-medium max-h-5  overflow-hidden ' >
            {navBarTitle}
          </div> */}
        <div className=' flex flex-row'>  
        <NavBar />
        {/*<ThemeSwitcher />*/}
        
        </div>       
        <div className='  flex flex-row items-center  '>
          <div title='fullwidth' className='  cursor-pointer rounded-lg  '>
            <FullWidth fullWidth={fullWidth} toggleFullWidth={toggleFullWidth} />
          </div>
          <div className='md:w-12 w-10 mr-2'>
            <SignedOut>
              <SignInButton>
                <div title='SignIn' className=' p-2 hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer rounded-lg  '>
                  <LoginIcon  className="md:w-8 md:h-8 w-6 h-6   duration-500  hover:scale-125 " />
                </div>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
    </div>
</>
  )
}

export default Header
