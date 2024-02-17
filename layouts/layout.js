import { useEffect, useState } from 'react'
import { getPageTitle } from 'notion-utils'
import { motion } from 'framer-motion'
import Prevandnext from '@/components/Post/ArticleAdjacent'
import Container from '@/components/Container'
import Content from '@/components/Post/Content'
//import Comments from '@/components/Post/Comments'
import Pinglun from '@/components/Post/NotionComment'
const Layout = ({ posts,prev,next,blockMap, frontMatter, fullWidth = false, subPage = false,pingluns, tableOfContent}) => {
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
      // date={new Date(frontMatter.publishedAt).toISOString()}
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
