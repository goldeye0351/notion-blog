import { useEffect, useState } from 'react'
import { getPageTitle } from 'notion-utils'
import { motion } from 'framer-motion'
import ArticleAdjacent from '@/components/Post/ArticleAdjacent'
import Container from '@/components/Container'
import Content from '@/components/Post/Content'
import Aside from '@/components/Post/Aside'
import Comments from '@/components/Post/Comments'
import PostFooter from '@/components/Post/PostFooter'

const Layout = ({ prev,next,blockMap, frontMatter, fullWidth = false, subPage = false }) => {
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
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type='article'
      fullWidth={fullWidth}
    >
      <motion.div className='flex flex-row'>
        <Content
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
          prev={prev}
          next={next}
        />
        <Aside
          frontMatter={frontMatter}
          blockMap={blockMap}
          pageTitle={showSubPageTitle ? pageTitle : null}
        />
      </motion.div>
      <ArticleAdjacent prev={prev} next={next} me={frontMatter} />
      <Comments frontMatter={frontMatter} />
    </Container>
  )
}

export default Layout
