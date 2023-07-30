import { getAllPosts, getAllTagsFromPosts,getAllCatsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export default function search({ cats,tags, posts,post }) {
  return <SearchLayout tags={tags} posts={posts}  index={posts.indexOf(post)} />
}
export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const tags = getAllTagsFromPosts(posts)
  const cats = getAllCatsFromPosts(posts)
  return {
    props: {
      tags,cats,
      posts
    },
    revalidate: 1
  }
}
