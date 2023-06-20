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
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li ref={ref} className={`${
                    activeMenu === items.to ? 'bg-gray-200 dark:bg-gray-700' : ''
                  } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg py-1 px-2  relative nav`}
    >
      {items.submenu ? (
        <>
          <div className='font-light'   
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
                {items.icon}
                <span className='inline-block m-1'>{items.name}</span>
                {' '} <span className="arrow" />
          </div>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link passHref href={items.to} key={items.id} scroll={false}>
                {items.icon}
                <span className='inline-block m-1'>{items.name}</span>
        </Link>
      )}



    </li>
  );
};

export default MenuItems;
