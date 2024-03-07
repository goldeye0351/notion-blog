import BLOG from '@/blog.config'
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

export default function Loading({ notionSlug }) {
  const { locale } = useRouter()
  const [showNotion, setshowNotion] = useState(false)

  if (notionSlug) {
    setTimeout(() => {
      setshowNotion(true)
    }, 3000)
  }

  const t = lang[locale]
  return (
        <div className='flex flex-col items-center justify-center mx-auto text-gray-200'>
          <div className='flex flex-col items-center justify-center mx-auto text-3xl'>
            <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
              <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
              <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
            </svg>
            {t.ERROR.LOADING}
          </div>
          {showNotion &&
            <Link
              passHref
              href={`https://${BLOG.notionDomain}/${notionSlug}`} scroll={false}
              className='text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 transition duration-100'
            >
              <span className='m-1'>{t.ERROR.TIMEOUT_TEXT}</span>
            </Link>
          }
        </div>
  )
}

// export default Loading
