"use client"
import BubbleUI from "@/components/Myswiper/Bb";
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import { register } from 'swiper/element/bundle'
register()
import Container from '@/components/Container'

export async function getStaticProps() {
  const posts = await getAllPosts({ onlyPost: true })
  return {
    props: {
      posts
    },
    revalidate: 1
  }
}
const my3d = props => {
  const  { posts} =props
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
            {posts.slice(0,21).map((data, i) => (
              <Link passHref href={`${BLOG.path}/${data.slug}`} scroll={false}   key={i}>
                <Image src={data.page_cover} alt={data.title} fill  
                className=" rounded-full max-w-[150px] max-h-[150px] " /> 
              </Link>
            ))}
      </BubbleUI>
    </div>

{/*  这里是swiper插件 多图的模式  小屏隐藏  中等屏幕开始出现,  */}
  <div className='hidden md:block  '>
    <div className='flex justify-center items-center content-center h-[90VH]'>
      <swiper-container effect="coverflow" coverflow-effect-rotate="10" coverflow-effect-depth="500" coverflow-effect-slide-shadows="false" 
        coverflow-effect-stretch="10" coverflow-effect-modifier="1" 
        slides-per-view="3" grab-cursor="true" speed="100" space-between="0" loop="true" 
        autoplay="true" autoplay-disable-on-interaction="true" 
    > 
        {posts.slice(0,7).map((post) => (<>
        <swiper-slide key={post.id}  > 
          <Link key={post.id} href={`${BLOG.path}/${post.slug}`} scroll={false}>
          <div key={post.id} className=' relative w-[50VW] h-[65VH] max-w-[800px] max-h-[600px]  -translate-x-[5VW]'>  
              <Image key={post.id} src={post?.page_cover} alt={post.title} fill  className='rounded-3xl '/>             
              <div className=" absolute bottom-[0%] flex justify-center left-[20%] right-[20%]  p-3 text-xl rounded-lg bg-white/80 dark:bg-black/50"   >
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