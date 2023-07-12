import Link from 'next/link'
import BLOG from '@/blog.config'
import {  HomeIcon,  SearchIcon, CloudIcon,CloudDownloadIcon ,CloudUploadIcon,FingerPrintIcon,EyeOffIcon,EyeIcon, MenuIcon,  UserIcon,  UsersIcon,  MailIcon,  ClipboardListIcon} from '@heroicons/react/outline'

export const links = [
    {
      id: 0,
      name: 'Home',
      to: BLOG.path || '/',
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 1,
      name: 'Blog',
      to: '/blog',
      icon: <ClipboardListIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 2,
      name: 'Search',
      to: '/search',
      icon: <SearchIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 3,
      name: 'About',
      to: '',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [
        {
          id: 4,
          name: 'Me',
          to: '/about',
          icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 5,
          name: 'Contact',
          to: '/contact',
          icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 6,
          name: 'Friends',
          to: '/friends',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 7,
          name: 'Privacy',
          to: '/privacy',
          icon: <EyeOffIcon className='inline-block mb-1 h-5 w-5' />,
        }
      ]
    }
  ]
