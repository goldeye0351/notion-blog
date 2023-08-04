'use clent'
import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'
import { ArticleLock } from '@/components/Post/ArticleLock'
import React from 'react'

const Post = props => {
  const { post, blockMap,prev,next  }=props 
  const router = useRouter()
  const [lock, setLock] = React.useState(post?.password && post?.password !== '')
    const validPassword = passInput => {
    if (passInput  === post.password) {
      setLock(false)
     return true
    }
    return false
  }

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
  { return <>  
  <div id="busuanzi_container_page_pv" className=" ">
    <span id="busuanzi_value_page_pv"></span>
  </div>
  <Layout blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} prev={prev} next={next} />

  </>}

}

export async function getStaticPaths() {
  const posts = await getAllPosts({ postAndPage:true })
  return {
    paths: posts.map((row) => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ postAndPage:true })
  const post = posts.find((t) => t.slug === slug)
  const index = posts.indexOf(post)
  const prev = posts.slice(index - 1, index)[0] ?? posts.slice(-1)[0]
  const next = posts.slice(index + 1, index + 2)[0] ?? posts[0]
  try {
    const blockMap = await getPostBlocks(post.id)
    return {
      props: {
        post,
        prev,
        next,
        blockMap
      },
      revalidate: 1
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        post: null,
        prev: null,
        next: null,
        blockMap: null
      }
    }
  }
}

export default Post
