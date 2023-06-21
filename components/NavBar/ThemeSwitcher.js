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
        // title={`Toggle theme - current ${theme}`}
        aria-label='ThemeSwitcher'
        onClick={() =>
          setTheme(
            theme === 'light' ? 'dark' : theme === 'system' ? 'dark' : 'light'
          )
        }
        className='p-2 ml-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100'
      >
        {hasMounted && theme === 'dark' ? (
          <SunIcon className='h-6 w-6' />
        ) : (
          <MoonIcon className='h-6 w-6' />
        )}
      </motion.button>
    </>
  )
}

export default ThemeSwitcher
