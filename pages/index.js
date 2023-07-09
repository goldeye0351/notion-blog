
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAllTagsFromPosts , getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { register } from 'swiper/element/bundle'
register()
import Container from '@/components/Container'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyHot: true })
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
      blockMap
    },
    revalidate: 1
  }
}
const my3d = ({ postsToShow }) => {
  
  return <div className=' block flex-col justify-center items-center content-center max-w-[100VW]'>

<Container title={BLOG.title} description={BLOG.description}></Container>
{/*  这里是swiper插件 很多图的模式  小屏隐藏  中等屏幕开始出现,  */}
  <div className='hidden md:block '>
    <div className=' h-[68VH] flex justify-center items-center content-center'>
      <swiper-container slides-per-view="3"
        grab-cursor="true" autoplay="true" autoplay-disable-on-interaction="true" speed="100" space-between="0" 
        effect="coverflow" coverflow-effect-rotate="10" coverflow-effect-depth="500" coverflow-effect-slide-shadows="false" loop="true"
        coverflow-effect-stretch="10" coverflow-effect-modifier="1" loop-additional-slides="2"
        > 
        {postsToShow.map((post) => (<>
        <swiper-slide key={post.id} post={post} index={postsToShow.indexOf(post)} > 
          <Link key={post.id} href={post.Link} scroll={false}>
          <div key={post.id} className=' max-w-[1024px] max-h-[768px] min-w-[480px] min-h-[360px] flex flex-col justify-between'>  
              <Image key={post.id} src={post?.page_cover} alt={post.title} width={1024} height={768} 
              className='rounded-3xl  static 
              
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

   {/*  单图 模式 中屏开始隐藏  */}
  <div className='visible md:hidden '>
    <div className='max-w-[95VW] justify-center content-center items-center mx-auto' >
      <swiper-container loop="true" autoplay="true" slides-per-view="1" autoplay-delay="1500"  navigation="true" pagination="true" scrollbar="true" grab-cursor="true" 
            parallax="true" className="overflow-visible flex  justify-center content-center items-center "
          > 
        {postsToShow.map((post) => (
        <>
        <swiper-slide key={post.id} post={post} index={postsToShow.indexOf(post)} > 
          <Link key={post.id} href={post.Link} scroll={false}>
      
          

          <div className=" duration-300 overflow-visible max-w-[calc(100vw-10rem)] min-h-[calc(100vh-19rem)]  flex flex-col justify-between">
            <Image src={post?.page_cover}  alt={post.title} fill className=' rounded-3xl'/>
          </div>
          <div data-swiper-parallax="-300" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                className=" absolute top-3 mx-auto p-3 text-lg bg-white/50 dark:bg-black/50"   >
            {post.title}     
          </div>
          <div data-swiper-parallax="-600" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                className=" absolute top-16 mx-auto p-3 bg-white/50 dark:bg-black/50"   >
            {post.summary}     
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