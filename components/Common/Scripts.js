import Script from 'next/script'
import BLOG from '@/blog.config'

const Scripts = () => (
  <>

    {BLOG.analytics && BLOG.analytics.provider === 'umami' && (
      <Script
        src={BLOG.analytics.umamiConfig.scriptUrl}
        strategy='afterInteractive'
        data-website-id={BLOG.analytics.umamiConfig.websiteId}
      />
    )}
     <script src="/simpleParallax.min.js"></script>
     <script type="module"  src="/up.js"></script>
    {/*<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>*/}
    {/*<script async src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${BLOG.googleadid}'} crossorigin="anonymous"> </script>*/}
  </>
)

export default Scripts
