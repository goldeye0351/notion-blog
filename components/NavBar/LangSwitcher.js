import { TranslateIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link passHref href={asPath} locale={locale === 'en' ? 'zh' : 'en'} scroll={false}>
        <button
          aria-label='LangSwitcher'
          className='p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg dark:text-gray-100'
        >
          <TranslateIcon className='h-6 w-6' />
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
