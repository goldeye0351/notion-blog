import Prevandnext from '@/components/Post/ArticleAdjacent'
import Container from '@/components/Container'
import Content from '@/components/Post/Content'
import Pinglun from '@/components/Post/NotionComment'
const Layout = ({ posts,prev,next,blockMap, frontMatter, fullWidth, tableOfContent,mypls}) => {

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
          prev={prev}
          next={next}
          tableOfContent={tableOfContent}
        />
      <Pinglun  post={frontMatter}  mypls={mypls}/> 
      <Prevandnext prev={prev} next={next} me={frontMatter} />
    </Container>

  </>
  )
}

export default Layout
