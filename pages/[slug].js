import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'
import { ArticleLock } from '@/components/Post/ArticleLock'
import React from 'react'

const Post = props => {
  const { post, blockMap  }=props 
  const router = useRouter()
  const [lock, setLock] = React.useState(post?.password && post?.password !== '')
    const validPassword = passInput => {
    if (passInput  === post.password) {
      setLock(false)
     return true
    }
    return false
  }
  console.log( lock )

  if (router.isFallback) {
    return (
      <Loading />
    )
  }
  if (!post) {
    return <NotFound statusCode={404} />
  }
  
  if (lock) 
  {  return (<ArticleLock validPassword={validPassword} />)} 

  if (!lock)
  { return <Layout blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} /> }

}

export async function getStaticPaths() {
  const posts = await getAllPosts({ onlyNewsletter: false })
  return {
    paths: posts.map((row) => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ onlyNewsletter: false })
  const post = posts.find((t) => t.slug === slug)

  try {
    const blockMap = await getPostBlocks(post.id)
    return {
      props: {
        post,
        blockMap
      },
      revalidate: 1
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        post: null,
        blockMap: null
      }
    }
  }
}

export default Post
