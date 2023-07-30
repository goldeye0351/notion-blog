import Link from 'next/link'
import Image from 'next/image.js'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {  UserIcon,  UsersIcon,  MailIcon,EyeIcon, StarIcon, CursorClickIcon, HeartIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
import ThemeSwitcher from './ThemeSwitcher.js'

const Footer = ({ fullWidth }) => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since

  const links = [
    {
      id: 0,
      name: t.NAV.ABOUT,
      to: BLOG.path || '/about',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    },
    {
      id: 1,
      name: t.NAV.FRINEDS,
      to: '/friends',
      icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.friends
    },
    {
      id: 2,
      name: t.NAV.CONTACT,
      to: '/contact',
      icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.contact
    }
  ]

  return (
    <motion.div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-300 transition-all ${
        !fullWidth ? 'max-w-5xl md:px-8' : 'px-4 md:px-24'
      }`}
    >
      <footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-row justify-center border-b dark:border-gray-600 '>
            <ThemeSwitcher  />
        </div>

        <div className='text-sm flex justify-between'>
            <div className="flex items-center space-x-1">
              <span className="mr-1 ">Built with</span>
              <div className="flex space-x-1.5 hover:animate-bounce  ">
               <Link href="https://github.com/goldeye0351/notion-blog">
                 <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className=' fill-black dark:fill-white w-5 h-5 hover:w-8 hover:h-8 '>
                  <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                 </svg>  
                </Link>     

              </div>
            </div>
            <div>                
              <EyeIcon className='inline-block my-2 w-5 h-5 '/>
              <div id="busuanzi_container_site_pv" className='hidden'>
                <span id="busuanzi_value_site_pv" className='my-2 inline-block '></span>
              </div> 

            </div>
            <div className='float-right my-2 flex space-x-2 text-sm '>
                <div>{`© ${new Date().getFullYear()}`}</div>  
                <HeartIcon className=' h-5 inline-block hover:animate-ping ' />
            </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer
