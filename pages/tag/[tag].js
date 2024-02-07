import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import TagLayout from '@/layouts/taglayout'

export default function Tag({ tags, posts, currentTag }) {
  return <TagLayout tags={tags} posts={posts} currentTag={currentTag} />
}

export async function getStaticProps({ params }) {
  const currentTag = params.tag
  const posts = await getAllPosts({ postAndPage:true })
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    (post) => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts({ postAndPage:true })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map((tag) => ({ params: { tag } })),
    fallback: true
  }
}
