import Container from '@/components/Container'
import BlogPost from '@/components/MBlogPost'
import Hero from '@/components/Hero/Home'
import { getAllPosts, getAllTagsFromPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import Pagination from '@/components/Pagination'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const tags = getAllTagsFromPosts(posts)
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'index')

  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      posts,
      tags,
      hero,
      blockMap
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext, tags, posts, blockMap,hero }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      
      <Hero  tags={tags} heropost={hero} blockMap={blockMap} />
    
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} index={postsToShow.indexOf(post)} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}

export default blog
