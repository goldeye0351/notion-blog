import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import InfoCard from '@/components/Card/InfoCard'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyNewsletter: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}

export default function My3d({ tags, posts }) {
  return <InfoCard tags={tags} posts={posts} />
}
