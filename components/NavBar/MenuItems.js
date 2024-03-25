import { useState, useEffect, useRef } from 'react';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
const perspective = {
  initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
  },
  enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
          duration: 0.65, 
          delay: 0.1 + (i * 0.1), 
          ease: [.215,.61,.355,1],
          opacity: { duration: 0.35}
      }
  }),
  exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
  }
}

const MenuItems = ({ items, depthLevel ,index,uuid,mobile}) => {
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
            key={items.name} 
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
          >
                {/*<svg height="40" width="112" xmlns="http://www.w3.org/2000/svg" className="myshape" > <rect  className='w- 28  h-10  ' /> </svg>*/}
                {mobile && <motion.div key={`${uuid},${items.name}`}  custom={index}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                className=' '>
                  {items.icon}{items.name}{' '} <span className="arrow" />
                </motion.div>}
                {!mobile && <div key={`${uuid},${items.name}`}  custom={index}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                className=' '>
                  {items.icon}{items.name}{' '} <span className="arrow" />
                </div>}
          </div>
          <Dropdown className=""
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (<>
        <Link passHref href={items.to} key={`'link:'${items.name}`} scroll={false} data-umami-event={`Menu:${items.name}`}  >
          {mobile && <motion.div  key={`${uuid},${items.name}`}  custom={index}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        className='   '>
              {items.icon}{items.name}
          </motion.div>}
          {!mobile && <div  key={`${uuid},${items.name}`}  custom={index}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        className='   '>
              {items.icon}{items.name}
          </div>}
        </Link></>
      )}
    </li>
  );
};

export default MenuItems;
