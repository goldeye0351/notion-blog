import Link from 'next/link'
import BLOG from '@/blog.config'
import {  HomeIcon,  SearchIcon, CloudIcon,CloudDownloadIcon ,CloudUploadIcon,FingerPrintIcon,EyeOffIcon,EyeIcon, MenuIcon,  UserIcon,  UsersIcon,  MailIcon,  ClipboardListIcon} from '@heroicons/react/outline'

export const links = [
    {
      id: 0,
      name: '首页',
      to: BLOG.path || '/',
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 1,
      name: '博客',
      to: '/blog',
      icon: <ClipboardListIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 2,
      name: '建站指引',
      to: '',
      icon: <CloudIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [
        {
          id: 3,
          name:'建站指引',
          to: '/jz01',
          icon: <CloudDownloadIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 4,
          name: '进阶说明',
          to: '/jz02',
          icon: <CloudUploadIcon className='inline-block mb-1 h-5 w-5' />,
        }
      ]
    },
    {
      id: 5,
      name: '搜索',
      to: '/search',
      icon: <SearchIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 6,
      name: '关于',
      to: '',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [
        {
          id: 7,
          name: 'Me',
          to: '/about',
          icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 8,
          name: '私信',
          to: '/contact',
          icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 9,
          name: '友链',
          to: '/friends',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 10,
          name: '隐私',
          to: '/privacy',
          icon: <EyeOffIcon className='inline-block mb-1 h-5 w-5' />,
        }
      ]
    }
  ]
