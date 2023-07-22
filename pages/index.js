"use client"
import BubbleUI from "@/components/Myswiper/Bb";
import { Sbdata } from "@/components/Sbdata";
import { pngdata } from "@/components/Data";
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAllTagsFromPosts , getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import Herohome from '@/components/Hero/Home'
import { register } from 'swiper/element/bundle'
register()
import Container from '@/components/Container'
import HeroLeft from '@/components/Hero/Heroleft'
import HeroRight from '@/components/Hero/HeroRight'
import CardTags from '@/components/Card/CardTag'
import Hero from '@/components/Hero/Hero'
import Banner from '@/components/Hero/Banner'

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
  const options = {
		size: 150,
		minSize: 50,
		gutter: 5,
		provideProps: true,
		numCols: 8,
		fringeWidth: 200,
		yRadius: 120,
		xRadius: 260,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}


  return <div className=' block flex-col justify-center items-center content-center max-w-[100VW] space-y-3'>

    <Container title={BLOG.title} description={BLOG.description} >
        
    </Container>
    <BubbleUI options={options} className={"myBubbleUI h-[70VH]  md:h-72 "}>
          {posts.map((data, i) => (
            <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false}   key={i}>
               <Image src={data.page_cover} alt={data.title} fill  
               className=" rounded-full max-w-[120px] max-h-[120px] " /> 
            </Link>
          ))}
        </BubbleUI>
{/*  这里是swiper插件 多图的模式  小屏隐藏  中等屏幕开始出现,  */}
  <div className='hidden md:block  '>
    <div className='   flex justify-center items-center content-center'>
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

   {/*  单图 模式 中屏开始隐藏  */}
   {/* 
<div className='visible md:hidden border-2'>

  <div className='max-w-[95VW] relative flex flex-col justify-center content-center items-center mx-auto  ' >
    
    <div className=' relative  justify-center self-center content-center items-center w-full h-full '>
      <swiper-container loop="true" autoplay="true" slides-per-view="1" autoplay-delay="1500"  navigation="true" pagination="true" scrollbar="true" grab-cursor="true" 
            parallax="true" className="overflow-visible flex  justify-center content-center items-center "
          > 
        {postsToShow.map((post) => (
        <>
        <swiper-slide key={post.id} post={post} index={postsToShow.indexOf(post)} > 
          <Link key={post.id} href={`${BLOG.path}/${post.slug}`}  scroll={false}>
          <div className=" duration-300 overflow-visible max-w-[calc(100vw-10rem)] min-h-[38VH]  flex flex-col justify-between">
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
</div>
*/}



</div>}
export default my3d