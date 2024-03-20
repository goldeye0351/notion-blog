import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { useRouter } from 'next/router'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter()
  let ref = useRef();

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={closeDropdown}
    ref={ref} className={`${
                    activeMenu === items.to ? 'bg-gray-700 dark:bg-gray-800 shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] ' 
                    :
                     ''
                  } hover:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer rounded-lg px-1 flex items-center   w-24 h-10 relative nav
                       hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)] duration-300
                       hover:ring-1 hover:ring-green-400  dark:hover:ring-green-400
                  `}
    >
      {items.submenu ? (
        <>
          <div   
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
                {/*<svg height="40" width="112" xmlns="http://www.w3.org/2000/svg" className="myshape" > <rect  className='w- 28  h-10  ' /> </svg>*/}
                <div className=' '>{items.icon}{items.name}{' '} <span className="arrow" /></div>
                
          </div>
          <Dropdown className=""
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (<>
        <Link passHref href={items.to} key={items.id} scroll={false} data-umami-event={`Menu:${items.name}`}  >
          <div className='   '>{items.icon}{items.name}</div>
        </Link></>
      )}
    </li>
  );
};

export default MenuItems;
