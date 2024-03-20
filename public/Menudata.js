import BLOG from '@/blog.config'
import { UserIcon,LinkIcon,RssIcon,PicIcon,HomeIcon,Pic1Icon,Pic2Icon,Pic3Icon,PYQ,MenuIcon,VipIcon, LoginIcon, FriendsIcon } from '@/Icon/Icon'
export const links = [
    {
      name: 'HOME',                 // rename, 直接修改名字就可以,注意单引号
      to: BLOG.path || '/',         //  href.  要跳转的地址
      icon: <HomeIcon className='inline-block mb-1 mr-1 h-5 w-5' />,  
    },
    {
      name: 'VIP',                 // rename, 直接修改名字就可以,注意单引号
      to: '/tt',         //  href.  要跳转的地址
      icon: <LoginIcon className='inline-block mb-1 mr-1 h-5 w-5' />,  
    },
    {
      name: 'Pichub',
      to: '/pichub',
      icon: <Pic1Icon className='inline-block mb-1 mr-1 h-5 w-5' />,
      }, 
      {
        name: 'Friends',
        to: '/friends',
        icon: <FriendsIcon className='inline-block mb-1 mr-1 h-5 w-5' />,
      },

  ]

    {/*{
      name: 'About',
      to: '',
      icon: <MenuIcon className='inline-block mb-1 h-5 w-5' />,
      submenu:
      [    
        {
          name: 'Me',
          to: '/about',
          icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
        },
      ]
    }*/}