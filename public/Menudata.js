import BLOG from '@/blog.config'
import { UserIcon,LinkIcon,RssIcon,PicIcon,HomeIcon,Pic1Icon,Pic2Icon,Pic3Icon,PYQ,MenuIcon } from '@/Icon/Icon'
export const links = [
    {
      name: 'HOME',                 // rename, 直接修改名字就可以,注意单引号
      to: BLOG.path || '/',         //  href.  要跳转的地址
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,  
    },
    {
      name: 'About',
      to: '',
      icon: <MenuIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [    
        {
        name: 'Pichub',
        to: '/pichub',
        icon: <PicIcon className='inline-block mb-1 h-5 w-5' />,
        }, 
        {
          name: 'Pic',
          to: 'https://pic.51xmi.com',
          icon: <Pic3Icon className='inline-block mb-1 h-5 w-5' />,
          }, 
        {
          name: '朋友圈',
          to: '/pyq',
          icon: <PYQ className='inline-block mb-1 h-5 w-5' />,
        },
        {
          name: 'Me',
          to: '/about',
          icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
        },
        {
          name: 'Friends',
          to: '/friends',
          icon: <LinkIcon className='inline-block mb-1 h-5 w-5' />,
        },

      ]
    }
  ]
