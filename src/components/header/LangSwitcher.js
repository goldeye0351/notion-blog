import { Translate } from '@/Icon/Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link passHref href={asPath} locale={locale === 'en' ? 'zh' : 'en'} scroll={false}>
        <button
          aria-label='LangSwitcher' data-umami-event="切换语言"
          className='p-2 hover:bg-gray-700 dark:hover:bg-gray-800 cursor-pointer rounded-lg '
        >
          <Translate className='md:w-8 md:h-8 w-6 h-6 text-gray-200  dark:text-gray-200 duration-500 hover:scale-125  ' />
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
