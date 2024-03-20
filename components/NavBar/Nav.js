import { useState} from 'react'
import Link from 'next/link.js'
import { useRouter } from 'next/router'
import {MenuIcon,PYQ,VipIcon,PicIcon, GithubIcon} from '@/Icon/Icon.js'
import MenuItem from './MenuItems.js'
import { links } from '../../public/Menudata.js'
import BLOG from '@/blog.config.js'
const NavBar = (props) => {
  const router = useRouter()

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

  return (
    <div className='relative flex  flex-nowrap  justify-start'>
      {/* Desktop Menu */}  
      <ul id="desktopmenu" className="hidden md:flex text-gray-200  ">
        {links.map((menu, index) => {
          return (
            <MenuItem items={menu} key={index}  />
          )})}        
      </ul>

      {/* iphone Menu */}
      <div id="mobilemenu" className='md:hidden  block ' >
          <button
            type='button' aria-label='Menu'
            onClick={toggleOpen}   
            className='hover:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-3  '
          >
            <MenuIcon className='inline-block  h-6 w-6  ' />
          </button>
          <div id='sidebar-wrapper' className=' block md:hidden ' >
            <div id='sidebar-drawer-background' onClick={toggleOpen}   
              className={`${isOpen ? 'block' : 'hidden'} duration-300 
              fixed -top-8 left-0  w-full h-screen 
              bg-black/70 `}>
                <div id="mobilemenu" className='' >
                  <ul>
                    <div 
                    className=' left-[20VW] w-[60VW]  top-[5vh] z-50
                    bg-gray-700 dark:bg-gray-800 my-16 overflow-hidden 
                    rounded-3xl  outline-none fixed block '
                    >
                        <div className=' flex justify-center flex-col   items-center min-h-[50vh]  '>
                        {links.map((menu, index) => {
                          return (
                          <MenuItem items={menu} key={index}  />
                          )})}
                        </div>
                        <div className=' flex justify-center  space-x-3 py-3 border-t border-white/30 '>
                          <Link title='PicHub' href='/pichub' data-umami-event="图床" className=' flex justify-center items-center p-2 ' >
                            <PicIcon className='md:w-8 md:h-8 w-6 h-6   duration-500  hover:scale-125' />
                          </Link>                          
                          <div className=' border-l border-white/30  ' />
                          <Link title='朋友圈' href='/pyq' data-umami-event="朋友圈" className=' flex justify-center items-center p-2 ' >
                                <PYQ   alt='朋友圈' className='md:w-8 md:h-8 w-6 h-6   duration-500  hover:scale-125 ' />
                          </Link>
                          <div className=' border-l border-white/30 ' />
                          <Link title='Vip' href='/tt' data-umami-event="Vip" className=' flex justify-center items-center p-2 ' >
                            <VipIcon className='md:w-8 md:h-8 w-6 h-6   duration-500  hover:scale-125' />
                          </Link>  
                          <Link title='GitHub' href={BLOG.githubUrl} data-umami-event="Vip" className=' flex justify-center items-center p-2 ' >
                             <GithubIcon   /> 
                          </Link>                   
                        </div>
                        
                    </div>
                    
                  </ul>
                    
                </div>
            </div>    
          </div>
    
        
      </div>
      
    </div>
  )
}

export default NavBar
