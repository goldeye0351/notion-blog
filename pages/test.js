import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAllTagsFromPosts , getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { register } from 'swiper/element/bundle'
register()
import Container from '@/components/Container'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const tags = getAllTagsFromPosts(posts)
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'index')
  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
      posts,
      tags,
      hero,
      blockMap
    },
    revalidate: 1
  }
}
const my3d = props => {
  const  { postsToShow,blockMap,hero, posts,tags} =props
  return <div className=' block flex-col justify-center items-center content-center max-w-[100VW] space-y-3'>
    <Container title={BLOG.title} description={BLOG.description}>
      </Container>
{/*  这里是swiper插件 多图的模式  小屏隐藏  中等屏幕开始出现,  */}
  <div className='hidden md:block '>
    <div className=' h-[70VH]  flex justify-center items-center content-center'>
      <swiper-container slides-per-view="3"
        grab-cursor="true" autoplay="true" autoplay-disable-on-interaction="true" speed="100" space-between="0" 
        effect="coverflow" coverflow-effect-rotate="10" coverflow-effect-depth="500" coverflow-effect-slide-shadows="false" loop="true"
        coverflow-effect-stretch="10" coverflow-effect-modifier="1" loop-additional-slides="2"
        > 
        {postsToShow.map((post) => (<>
        <swiper-slide key={post.id} post={post} index={postsToShow.indexOf(post)} > 
          <Link key={post.id} href={`${BLOG.path}/${post.slug}`} scroll={false}>
          <div key={post.id} className=' max-w-[800px] max-h-[600px] min-w-[600px] min-h-[480px] flex flex-col justify-between'>  
              <Image key={post.id} src={post?.page_cover} alt={post.title} fill 
              className='rounded-3xl  static w-[600px] h-[480px]
              
              '/>
              <div key={post.id} className='absolute flex flex-col justify-between  p-8  text-xl '>{post.title} 
              <div key={post.id} className=' hidden lg:block text-sm '>{post.summary}</div>
              </div>
          </div>
          </Link>
        </swiper-slide>
        </>
        ))}
      </swiper-container>
      </div>
  </div>

</div>}
export default my3d