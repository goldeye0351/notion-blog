import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import {MenuIcon} from '@/Icon/Icon.js'
import MenuItem from './MenuItems.js'
import { links } from '../../public/Menudata.js'
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
                    bg-gray-700 dark:bg-gray-800 my-16
                    rounded-md outline-none fixed block'
                    >
                        <div className=' rounded leading-5  block pt-8 pb-64 pl-3'>
                        {links.map((menu, index) => {
                          return (
                          <MenuItem items={menu} key={index}  />
                          )})}  

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
