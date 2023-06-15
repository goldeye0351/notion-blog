import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export default function search({ tags, posts,post }) {
  return <SearchLayout tags={tags} posts={posts}  index={posts.indexOf(post)} />
}
export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}
