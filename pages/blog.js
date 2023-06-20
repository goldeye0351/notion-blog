import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import NewsletterHero from '@/components/Hero/Newsletter'
import Hero from '@/components/Hero/Home'
import { getAllPosts, getAllTagsFromPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

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
      blockMap
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext, tags, posts, blockMap }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Hero  tags={tags} posts={posts} blockMap={blockMap} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} index={postsToShow.indexOf(post)} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}

export default blog
