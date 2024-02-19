import { useEffect, useState } from 'react'
import { getPageTitle } from 'notion-utils'
import { motion } from 'framer-motion'
import Prevandnext from '@/components/Post/ArticleAdjacent'
import Container from '@/components/Container'
import Content from '@/components/Post/Content'
import Pinglun from '@/components/Post/NotionComment'
const Layout = ({ posts,prev,next,blockMap, frontMatter, fullWidth = false, subPage = false,lastposts, tableOfContent}) => {
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)

  const pageTitle = getPageTitle(blockMap)
  useEffect(() => {
    if (frontMatter.title !== pageTitle) {
      setShowSubPageTitle(true)
    }
  }, [frontMatter, pageTitle, subPage])

  return (<>
    <Container
      title={`${frontMatter.title}${frontMatter.title === pageTitle ? '' : ' | ' + pageTitle}`}
      description={frontMatter.summary}
      ogimage={frontMatter.page_cover}
      type='article'
      fullWidth={fullWidth}
    >
      <motion.div className=''>
        <Content
          posts={posts}
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
          prev={prev}
          next={next}
          lastposts={lastposts}
          tableOfContent={tableOfContent}
        />
      </motion.div>
      <Pinglun  post={frontMatter}  /> 
      <Prevandnext prev={prev} next={next} me={frontMatter} />
    </Container>

  </>
  )
}

export default Layout
