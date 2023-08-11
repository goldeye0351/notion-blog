import BLOG from '@/blog.config'
import { AcademicCapIcon, HomeIcon,CodeIcon, SearchIcon, GlobeIcon,  TerminalIcon, GlobeAltIconicon, CloudIcon,CloudDownloadIcon ,CloudUploadIcon,FingerPrintIcon,EyeOffIcon,EyeIcon, MenuIcon,  UserIcon,  UsersIcon,  MailIcon,  ClipboardListIcon} from '@heroicons/react/outline'
   //https://heroicons.com/ find icon  从这里查找喜欢的图标
export const links = [
    {
      id: 0,
      name: 'HOME',                 // rename, 直接修改名字就可以,注意单引号
      to: BLOG.path || '/',         //  href.  要跳转的地址
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,  //change 从上面找你想要的图标.
    },
    {
      id: 1,
      name: 'Blog',
      to: '/blog',
      icon: <ClipboardListIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 3,
      name: 'Search',
      to: '/search',
      icon: <SearchIcon className='inline-block mb-1 h-5 w-5' />,
    },
    {
      id: 4,
      name: 'About',
      to: '',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [
        {
          id: 5,
          name: 'Me',
          to: '/about',
          icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 6,
          name: 'Contact',
          to: '/contact',
          icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 7,
          name: 'Friends',
          to: '/friends',
          icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 8,
          name: 'Umami',
          to: '/umami',
          icon: <CodeIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          id: 9,
          name: 'Privacy',
          to: '/privacy',
          icon: <EyeOffIcon className='inline-block mb-1 h-5 w-5' />,
        }
      ]
    }
  ]
