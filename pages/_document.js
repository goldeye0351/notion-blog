import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={BLOG.lang}>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <link
            rel='apple-touch-icon'
            sizes='192x192'
            href='/favicon.png'
          ></link>
          <link
            rel='alternate'
            type='application/rss+xml'
            title='RSS 2.0'
            href='/feed'
          ></link>

              <meta
                name='theme-color'
                content={BLOG.darkBackground}
                media='(prefers-color-scheme: dark)'
              />


        </Head>
        <body className='bg-night'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
