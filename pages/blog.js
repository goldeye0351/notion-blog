import Container from '@/components/Container'
import BlogPost from '@/components/MBlogPost'
import Hero from '@/components/Hero/Home'
import { getAllPosts, getAllTagsFromPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import Pagination from '@/components/Pagination'
import Link from 'next/link'
import Image from 'next/image'
import { register } from 'swiper/element/bundle'
register()

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

const blog = ({ postsToShow, page, showNext, tags, posts, blockMap,hero }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      
      {/*<Hero  tags={tags} heropost={hero} blockMap={blockMap} />*/}

<div className='flex flex-row space-x-3'>
    <div className=' md:w-4/5 w-full rounded-lg mb-5 md:mb-8 flex justify-center content-center items-center mx-auto  ' >
          <swiper-container loop="true" autoplay="true" slides-per-view="1" autoplay-delay="1500"  navigation="true" pagination="true" scrollbar="true" grab-cursor="true" 
            parallax="true" className="overflow-visible flex  justify-center content-center items-center "
          > 
          {posts.map((png) => (<>

            <swiper-slide key={png.id}  className=" flex justify-center content-center items-center ">
              <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false}>
                <div className=" duration-300 overflow-visible h-96 w-96">
                    <Image src={png?.page_cover}  alt={png.title} fill className=' rounded-3xl'/>
                </div>
                <div data-swiper-parallax="-300" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                className=" absolute top-3 mx-auto p-3 text-lg bg-white/50 dark:bg-black/50"   >
                {png.title}     
                </div>
                <div data-swiper-parallax="-600" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600"
                className=" absolute top-16 mx-auto p-3 bg-white/50 dark:bg-black/50"   >
                {png.summary}     
                </div>
              </Link>
            </swiper-slide>      

            </>
            ))}
          </swiper-container>
    </div>
    <div className=' card  rounded-xl w-full h-96 relative overflow-hidden'>
       <div className=' absolute top-3 left-8 rotate-12  '>
         <marquee width="180" height="380" behavior="scroll" direction="down" >

          <div className=" flex flex-col  space-y-3 ">
            {posts.map((png) => (<>
              <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false}>
               <Image src={png?.page_cover}  alt={png.title} width={180} height={180} className=' rounded-3xl '/>
               {png.title}
              </Link>
             </>))}
          </div>

         </marquee>

       </div>

    </div> 
</div>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} index={postsToShow.indexOf(post)} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} />}
    </Container>
  )
}

export default blog
