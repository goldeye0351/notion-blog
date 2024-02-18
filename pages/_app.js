'use client'

import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import '@/styles/ccc.css'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import Scripts from '@/components/Common/Scripts'
import { ThemeProvider } from 'next-themes'
import TransitionEffect from '@/components/Common/TransitionEffect'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NProgress from 'nprogress'
import '@/styles/nprogress.css'
import Header from '@/components/NavBar/Header'
import Footer from '@/components/NavBar/Footer'


const StarrySky = dynamic(() => import('@/components/StarrySky'), { ssr: false })

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <div className='flex flex-col min-h-screen'>
      <Scripts />
      <StarrySky />
      <ThemeProvider attribute='class' defaultTheme = 'dark' >
        <Header
          navBarTitle={pageProps.post ? pageProps.post.title : null}
          fullWidth={pageProps.post ? pageProps.post.fullWidth : false}
        />

        <TransitionEffect>
            <div
              className={`flex  ${
                BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
              }`}
            >
              <Component {...pageProps} />
            </div>
        </TransitionEffect>
        
        {/*<Footer  />*/}
      </ThemeProvider>
    </div>
  )
}

export default MyApp
