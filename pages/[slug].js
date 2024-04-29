import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'
import { ArticleLock } from '@/components/Post/ArticleLock'
import React from 'react'
import {  getPageTableOfContents,  uuidToId} from 'notion-utils'
import Prevandnext from '@/components/Post/ArticleAdjacent'

const Post = props => {
  const { posts,post, blockMap,prev,next,tableOfContent,fullWidth ,mypls }=props 
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
  {  return (<div className=' flex flex-col    items-center content-center w-screen h-[83vh] md:h-[84VH]'>
    <ArticleLock validPassword={validPassword} />
  <div className='flex   '>
  </div>
  <div className=' mt-auto w-full '>
      <Prevandnext prev={prev} next={next} me={post} />
  </div>
  </div>)} 

  if (!lock)
  { return <Layout tableOfContent={tableOfContent} posts={posts.slice(0,5)} blockMap={blockMap} frontMatter={post} fullWidth={fullWidth} prev={prev} next={next}  mypls={mypls} /> }

}

export async function getStaticPaths() {
  const posts = await getAllPosts({ onlyPost:true })
  return {
    paths: posts.map((row) => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts({ postAndComment:true })
  const defposts= posts.filter( post => post.type[0] ==="Post")

  const post = posts.find((t) => t.slug === slug)

  const allpl= posts.filter( post=> post.type[0] ==="Comment")
  const mypls= allpl.filter(pl => pl.title === post.id)

  const index = defposts.indexOf(post)
  const prev = defposts.slice(index - 1, index)[0] ?? defposts.slice(-1)[0]
  const next = defposts.slice(index + 1, index + 2)[0] ?? defposts[0]

  try {
    const blockMap = await getPostBlocks(post.id)
    const keys = Object.keys(blockMap?.block || {})
    const block = blockMap?.block?.[keys[0]]?.value 
  
    const tableOfContent =
      getPageTableOfContents(block, blockMap)?.map(
        ({ id, text, indentLevel }) => ({
          id: uuidToId(id),
          text,
          indentLevel
        })
      ) || []

    return {
      props: {
        posts:defposts,
        post,
        prev,
        next,
        blockMap,
        tableOfContent,
        mypls
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
        tableOfContent:null,
        mypls:null
      }
    }
  }
}

export default Post
