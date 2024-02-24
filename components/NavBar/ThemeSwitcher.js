import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  return (
    <>
      <motion.button drag 
      dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
        // title={`Toggle theme - current ${theme}`}
        aria-label='ThemeSwitcher'
        onClick={() =>
          setTheme(
            theme === 'light' ? 'dark' : theme === 'system' ? 'dark' : 'light'
          )
        }
        className=' p-2 hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer rounded-lg  '
      >
        {hasMounted && theme === 'dark' ? (
          <SunIcon className='md:w-8 md:h-8 w-6 h-6  rotate-0  transition-transform duration-500 dark:-rotate-90  text-gray-200  hover:scale-125  " ' />
        ) : (
          <MoonIcon className='md:w-8 md:h-8 w-6 h-6 rotate-90  transition-transform duration-500 dark:rotate-0 text-gray-200 hover:scale-125' />
        )}
      </motion.button>
    </>
  )
}

export default ThemeSwitcher
