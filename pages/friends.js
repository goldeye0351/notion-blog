import Container from '@/components/Container'
import FBlogPost from '@/components/Friend'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import SupaComments from "@/components/Post/SupaComments"

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyFriend: true })

  return {
    props: {
      posts
    },
    revalidate: 1
  }
}

const Friend = ({  posts }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      {posts.map((post) => (
        <FBlogPost key={post.id} post={post} />
      ))}

    <SupaComments />
    </Container>
  )
}

export default Friend
