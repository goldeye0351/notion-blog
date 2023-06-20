import { useEffect, useCallback, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {
  HomeIcon,  SearchIcon,  MenuIcon,  UserIcon,  UsersIcon,  MailIcon,  ClipboardListIcon
} from '@heroicons/react/outline'
import Social from '../Common/Social.js'
import MenuItem from './MenuItems.js'
import { motion } from 'framer-motion'
import Collapse from './Collapse.js'
const NavBar = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]
  const [showMenu, setShowMenu] = useState(false)

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const links = [
    {
      id: 0,
      name: t.NAV.INDEX,
      to: BLOG.path || '/',
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 1,
      name: t.NAV.BLOG,
      to: '/blog',
      icon: <ClipboardListIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 2,
      name: t.NAV.BLOG,
      to: '',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [
        {
          id: 3,
          name: t.NAV.BLOG,
          to: '/jz01',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 4,
          name: t.NAV.BLOG,
          to: '/jz01',
          icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
        }
      ]
    },
    {
      id: 5,
      name: t.NAV.SEARCH,
      to: '/search',
      icon: <SearchIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 6,
      name: t.NAV.ABOUT,
      to: BLOG.path || '/about',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [
        {
          id: 7,
          name: t.NAV.FRINEDS,
          to: '/friends',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 8,
          name: t.NAV.CONTACT,
          to: '/contact',
          icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 9,
          name: t.NAV.FRINEDS,
          to: '/friends',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 10,
          name: t.NAV.FRINEDS,
          to: '/friends',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        }
      ]
    }
  ]

  const [isOpen, changeOpen] = useState(false)
  const toggleOpen = () => {
    changeOpen(!isOpen)
  }
  const collapseRef = useRef(null)

  return (
    <motion.div className='flex'>
      {/* Desktop Menu */}  
      <ul id="desktopmenu" className="hidden md:flex md:gap-1">
        {links.map((menu, index) => {
          return (
            <MenuItem items={menu} key={index}  />
          )})}        
      </ul>         

      <ul id="mobilemenu" className='md:hidden '>
        <MenuIcon onClick={toggleOpen} className='w-16 h-16 relative  bg-gray-600  cursor-pointer px-5 block md:hidden' />
            <Collapse collapseRef={collapseRef} isOpen={isOpen} type='vertical' className='  fixed block top-16 w-48 right-6'>
                <div className='rounded  p-2 text-sm self-end '>
                {links.map((menu, index) => {
                  return (
                  <MenuItem items={menu} key={index}  />
                  )})}  

                </div>
            </Collapse>
      </ul>  

    </motion.div>
  )
}

export default NavBar
