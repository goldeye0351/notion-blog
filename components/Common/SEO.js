import BLOG from '@/blog.config'
import Head from 'next/head'
import { useRouter } from 'next/router'

const SEO = ({ meta }) => {

  const router = useRouter()
  const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link
  return (
    <Head>
      <title>{meta.title}</title>
      {/* <meta content={BLOG.darkBackground} name='theme-color' /> */}
      <meta name='robots' content='follow, index' />
      <meta name="baidu-site-verification" content="codeva-NbJTIfMImr" />
      <meta name="baidu-site-verification" content="codeva-rIJI3e52aI" />
      <meta charSet='UTF-8' />
      {BLOG.seo.googleSiteVerification && (
        <meta
          name='google-site-verification'
          content={BLOG.seo.googleSiteVerification}
        />
      )}
      {BLOG.seo.keywords && (
        <meta name='keywords' content={BLOG.seo.keywords.join(', ')} />
      )}
      <meta name='description' content={meta.description} />
      <meta property='og:locale' content={BLOG.lang} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:url' content={meta.slug ? `${url}/${meta.slug}` : `${url}${router.asPath}`} />
      <meta property='og:image' content={meta.image || BLOG.defaultIcon}  />
      <meta property="og:site_name" content={BLOG.title} />
      <meta property='og:type' content={meta.type} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:title' content={meta.title} />
      <meta
        name='twitter:image'
        content={meta.image || BLOG.defaultCover}
      />
      {meta.type === 'article' && (
        <>
          <meta
            property='article:published_time'
            content={meta.date}
          />
          <meta property='article:author' content={BLOG.author} />
        </>
      )}
    </Head>
  )
}

export default SEO
