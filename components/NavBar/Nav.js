import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import {MenuIcon} from '@heroicons/react/outline'
import MenuItem from './MenuItems.js'
import Collapse from './Collapse.js'
import { links } from '../../public/Menudata.js'
import ThemeSwitcher from './ThemeSwitcher.js'
import LangSwitcher from './LangSwitcher.js'
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
  const collapseRef = useRef(null)

  return (
    <div className='relative flex flex-row flex-nowrap  justify-start'>
      {/* Desktop Menu */}  
      <ul id="desktopmenu" className="hidden md:flex ">
        {links.map((menu, index) => {
          return (
            <MenuItem items={menu} key={index}  />
          )})}        
      </ul>

         <ThemeSwitcher /> 
         <LangSwitcher />


      {/* iphone Menu */}
      <div id="mobilemenu" className='md:hidden  block ' >
          <button
            type='button' aria-label='Menu'
            onClick={toggleOpen}   
            className='hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3 '
          >
            <MenuIcon className='inline-block mb-1 h-5 w-5 right-0 ' />
          </button>
          <div id='sidebar-wrapper' className=' block md:hidden ' >
            <div id='sidebar-drawer-background' onClick={toggleOpen}   
              className={`${isOpen ? 'block' : 'hidden'} duration-300 
              fixed -top-8 left-0  w-full h-screen
              bg-black/70 `}>
                <div id="mobilemenu" className='' >
                  <ul>
                    <Collapse isOpen={isOpen} {...props} collapseRef={collapseRef}  type='vertical' 
                    className=' left-[25VW] w-[50VW]  
                    bg-gray-400 dark:bg-gray-600 my-16
                    rounded-md outline-none fixed block'
                    >
                        <div className=' rounded leading-5  block pt-8 pb-64 '>
                        {links.map((menu, index) => {
                          return (
                          <MenuItem items={menu} key={index}  />
                          )})}  

                        </div>
                      
                    </Collapse>
                    
                  </ul>
                    
                </div>
            </div>    
          </div>
    
        
      </div>
      
    </div>
  )
}

export default NavBar
