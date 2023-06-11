import Image from "next/image"
import LOGOIMG from "../public/images/logo.jpg"
import LVIMG from "../public/images/travel.jpg"
import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import AboutHero from '@/components/Hero/About'
import { getAllPosts, getAllTagsFromPosts,getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

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
const About = ({ posts, tags,  blockMap }) => {
    return (

        <Container title={BLOG.about} description={BLOG.description}>
        <AboutHero blockMap={blockMap} tags={tags} posts={posts} />
        </Container>

)}
export default About

