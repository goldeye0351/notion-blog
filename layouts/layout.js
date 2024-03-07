import { useEffect, useState } from 'react'
import { getPageTitle } from 'notion-utils'
import Prevandnext from '@/components/Post/ArticleAdjacent'
import Container from '@/components/Container'
import Content from '@/components/Post/Content'
import Pinglun from '@/components/Post/NotionComment'
import BLOG from '@/blog.config'
const Layout = ({ posts,prev,next,blockMap, frontMatter, fullWidth, subPage = false,lastposts, tableOfContent}) => {
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)
  const webtitle=BLOG.title
  const pageTitle = webtitle+getPageTitle(blockMap)
  useEffect(() => {
    if (frontMatter.title !== pageTitle) {
      setShowSubPageTitle(true)
    }
  }, [frontMatter, pageTitle, subPage])

  return (<>
    <Container
      title={`${frontMatter.title}`}
      description={frontMatter.summary}
      ogimage={frontMatter.page_cover}
      type='article'
      fullWidth={fullWidth}
      className={' w-full m-auto '}
    >
        <Content
          posts={posts}
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
          prev={prev}
          next={next}
          lastposts={lastposts}
          tableOfContent={tableOfContent}
          fullWidth={fullWidth}
        />
      <Pinglun  post={frontMatter}  /> 
      <Prevandnext prev={prev} next={next} me={frontMatter} />
    </Container>

  </>
  )
}

export default Layout
