"use client"
import BLOG from '@/blog.config'

import Image from 'next/image'
import LOGOIMG from '../public/images/logo.png'
import InfoCard from '@/components/Card/InfoCard'
import Tilt from 'react-parallax-tilt'
import { getAllPosts, getAllTagsFromPosts,getPostBlocks } from '@/lib/notion'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyNewsletter: false })
  const tags = getAllTagsFromPosts(posts)
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'about')
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
const My3d = ({ posts, tags,  blockMap }) => {

  return (
  <div className="flex items-center justify-center p-24 gap-4 flex-wrap rounded-xl">
  <Tilt
    className="my3d shadow-lg 
     bg-slate-200 dark:bg-slate-600 max-w-[20rem] rounded-xl"
    perspective={500}
    glareEnable={true}
    glarePosition={'all'}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <span className=" animate-pulse  rounded-2xl w-full absolute bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"><span class="hidden ">1</span></span>
    <span className=" animate-pulse  rounded-2xl w-full absolute top-0 h-2 bg-gradient-to-r from-purple-600 via-blue-500 to-green-300"><span class="hidden ">1</span></span>
       
    <div className="my3din flex flex-col justify-center items-center">
      <div className="text-3xl font-bold pt-8">{BLOG.author}</div>
      <Image src={LOGOIMG} alt={BLOG.title} width={180} height={180} className=' hover:-rotate-45  duration-300' />

     <InfoCard blockMap={blockMap} tags={tags} posts={posts} />
     <div className="h-16 py-2">{BLOG.description}</div>

    </div>
  </Tilt>
 </div>
)}

export default My3d