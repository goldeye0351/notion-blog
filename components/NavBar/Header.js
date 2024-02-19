import { useEffect, useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import Logo from '../Common/Logo'
import ThemeSwitcher from './ThemeSwitcher'
import LangSwitcher from './LangSwitcher'
const Header = ({ navBarTitle, fullWidth }) => {
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
        className={`sticky-nav  m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-3 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-screen-2xl ' : 'px-4 md:px-24'
        }`}
        id='sticky-nav'
        ref={navRef}
      >
        <div className='flex items-center '>
          <Link passHref href='/' scroll={false} aria-label={BLOG.title}>
            <div className='relative ' >
               <Logo className='h-12 w-12 md:h-16 md:w-16    hover:text-green-400  hover:animate-spin fill-current ' />
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
        </div>
      </div>
    </>
  )
}

export default Header
