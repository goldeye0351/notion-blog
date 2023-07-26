"use client"
import BubbleUI from "@/components/Myswiper/Bb";
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAllTagsFromPosts} from '@/lib/notion'
import BLOG from '@/blog.config'
import { register } from 'swiper/element/bundle'
register()
import Container from '@/components/Container'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  const hots = await getAllPosts({ onlyHot: true })
  const tags = getAllTagsFromPosts(posts)

  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      hots,
      showNext,
      posts,
      tags,
    },
    revalidate: 1
  }
}
const my3d = props => {
  const  { postsToShow, posts,tags,hots} =props
   const options = {
		size: 150,
		minSize: 50,
		gutter: 5,
		provideProps: true,
		numCols: 6,
		fringeWidth: 200,
		yRadius: 120,
		xRadius: 120,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}


  return <div className=' block flex-col justify-center items-center content-center max-w-[100VW] space-y-3'>
    <Container title={BLOG.title} description={BLOG.description} >   </Container>
    <div id="shoubiaoui" className="md:hidden">
      <BubbleUI options={options} className={"myBubbleUI h-[90VH]  rounded-3xl  "}>
            {posts.map((data, i) => (
              <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false}   key={i}>
                <Image src={data.page_cover} alt={data.title} fill  
                className=" rounded-full max-w-[150px] max-h-[150px] " /> 
              </Link>
            ))}
      </BubbleUI>
    </div>

{/*  这里是swiper插件 多图的模式  小屏隐藏  中等屏幕开始出现,  */}
  <div className='hidden md:block  '>
    <div className='   flex justify-center items-center content-center h-screen'>
      <swiper-container slides-per-view="3"
        grab-cursor="true" autoplay="true" autoplay-disable-on-interaction="true" speed="100" space-between="0" 
        effect="coverflow" coverflow-effect-rotate="10" coverflow-effect-depth="500" coverflow-effect-slide-shadows="false" loop="true"
        coverflow-effect-stretch="10" coverflow-effect-modifier="1" loop-additional-slides="2" navigation="true" parallax="true" pagination="true" scrollbar="true" 
            className=" w-screen"
        > 
        {posts.slice(0,9).map((post) => (<>
        <swiper-slide key={post.id} post={post} index={posts.indexOf(post)} > 
          <Link key={post.id} href={`${BLOG.path}/${post.slug}`} scroll={false}>
          <div key={post.id} className=' relative w-[800px] h-[600px] flex flex-col justify-between object-fill'>  
              <Image key={post.id} src={post?.page_cover} alt={post.title} fill
              className='rounded-3xl                
              '/>             

              <div data-swiper-parallax="0" data-swiper-parallax-scale="1.2" data-swiper-parallax-duration="500"
                        className=" absolute top-[30%] flex justify-center left-[20%] right-[20%]  p-3 text-xl rounded-lg bg-white/80 dark:bg-black/50"   >
                        {post.title}     
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