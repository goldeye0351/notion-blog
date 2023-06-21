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
import { links } from './Menudata.js'
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

  const [isOpen, changeOpen] = useState(false)
  const toggleOpen = () => {
    changeOpen(!isOpen)
  }
  const collapseRef = useRef(null)

  return (
    <motion.div className='flex relative'>
      {/* Desktop Menu */}  
      <ul id="desktopmenu" className="hidden md:flex md:gap-1">
        {links.map((menu, index) => {
          return (
            <MenuItem items={menu} key={index}  />
          )})}        
      </ul>         
      {/* iphone Menu */}
      <div  id="mobilemenu" className='md:hidden  block absolute right-0 top-0 ' >
          <button
            type='button' aria-label='Menu'
            onClick={toggleOpen}   
            onDoubleClick={() => setShowMenu((showMenu) => !showMenu)}
            className='hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3 '
          >
            <MenuIcon className='inline-block mb-1 h-5 w-5 right-0 ' />
          </button>
       <div className=' aaa'>
          <ul>
            <Collapse collapseRef={collapseRef} isOpen={isOpen} type='vertical' className='  left-[20VW] w-[60VW]  
             dark:bg-gray-700/60 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none fixed block'
            >
                <div className='rounded leading-5  hover:bg-gray-100 dark:hover:bg-gray-600 block pt-8 pb-96 '>
                {links.map((menu, index) => {
                  return (
                  <MenuItem items={menu} key={index}  />
                  )})}  

                </div>
            </Collapse>
          </ul>  
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar
