import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import NewsletterHero from '@/components/Hero/Newsletter'
import { getAllPosts, getAllTagsFromPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyNewsletter: true })
  const tags = getAllTagsFromPosts(posts)
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'newsletter')

  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

  return {
    props: {
      posts,
      tags,
      blockMap
    },
    revalidate: 1
  }
}

const newsletter = ({ tags, posts, blockMap }) => {
  return (
    <Container title={BLOG.newsletter} description={BLOG.description}>
      <NewsletterHero  tags={tags} posts={posts} blockMap={blockMap} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default newsletter
