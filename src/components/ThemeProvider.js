'use client';
//import TransitionEffect from './Common/TransitionEffect';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence,motion } from 'framer-motion';
import { usePathname } from 'next/navigation'
import Header from './header/header';
import { useState } from 'react';
export default function TmProvider({ children } ) {
  const keyid= usePathname()
  const [fullWidth, setFullWidth] = useState(false);
  const toggleFullWidth = () => {      setFullWidth(prevState => !prevState);    };
  
  return (
    <ThemeProvider attribute="class"  defaultTheme='light' >
      <Header navBarTitle={""} fullWidth={fullWidth}  toggleFullWidth={toggleFullWidth}/>
      <AnimatePresence mode='wait' initial={true} >
        <motion.div   key={keyid}
        animate={{opacity:1,  scale:1,y:0,    transition: {duration: 0.5} }}

        initial={{opacity:0.1, scale:0.5, y:40 }}
        exit=   {{opacity:0.1, scale:0.5, y:40 }}
        className={`duration-300 mx-auto  ${fullWidth ? 'max-w-[100VW] px-3 ' : '  w-full max-w-7xl' }`} 
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

const variants = {
  init: {    opacity: 0,    scale: 0.1,    y: 200,
    transition: {      duration: 0.25
    }
  },
  in: {    opacity: 1,    scale: 1,         y: 0,
    transition: {      duration: 0.25,      delay: 0
    }
  },
  out: {    opacity: 0,    scale: 0.5,    y: 100,
    transition: {      duration: 1
    }
  },
}