import { useEffect, useState } from 'react'
import { getPageTitle } from 'notion-utils'
import { motion } from 'framer-motion'
import ArticleAdjacent from '@/components/Post/ArticleAdjacent'
import Container from '@/components/Container'
import Content from '@/components/Post/Content'
import Comments from '@/components/Post/Comments'
import Pinglun from '@/components/Post/Pinglun'
const Layout = ({ prev,next,blockMap, frontMatter, fullWidth = false, subPage = false,pingluns }) => {
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)

  const pageTitle = getPageTitle(blockMap)
  useEffect(() => {
    if (frontMatter.title !== pageTitle) {
      setShowSubPageTitle(true)
    }
  }, [frontMatter, pageTitle, subPage])

  return (
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
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
          prev={prev}
          next={next}
        />
      </motion.div>
      <ArticleAdjacent prev={prev} next={next} me={frontMatter} />
      {/* <Comments frontMatter={frontMatter} />  */}
      <Pinglun post={frontMatter}  pingluns={pingluns}  />

    </Container>
  )
}

export default Layout
