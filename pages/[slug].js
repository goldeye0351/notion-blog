import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'
import { ArticleLock } from '@/components/Post/ArticleLock'
import React from 'react'
import { getDefComments } from "@/lib/notionapi";
  const pinglunId = BLOG.notionCommentId;
  


const Post = props => {
  const { posts,post, blockMap,prev,next,pingluns  }=props 
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
  { return <Layout posts={posts} blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} prev={prev} next={next}  pingluns={pingluns}/> }

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
  const postid = post.id
  const index = posts.indexOf(post)
  const prev = posts.slice(index - 1, index)[0] ?? posts.slice(-1)[0]
  const next = posts.slice(index + 1, index + 2)[0] ?? posts[0]

  const  mypingluns = await getDefComments(pinglunId,postid);
  try {
    const blockMap = await getPostBlocks(post.id)
    return {
      props: {
        posts,
        post,
        prev,
        next,
        blockMap,
        pingluns: mypingluns,
      },
      revalidate: 1
    }
  } catch (err) {
    console.error(err)
    return {
      props: {
        posts:null,
        post: null,
        prev: null,
        next: null,
        blockMap: null,
        pingluns:null
      }
    }
  }
}

export default Post
