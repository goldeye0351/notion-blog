import Image from "next/image"
import Logoimg from "@/public/favicon.png"
import { getAllPosts, getAllTagsFromPosts,getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import NotionRenderer from '@/components/Post/NotionRenderer'
import Tilt from 'react-parallax-tilt'
import SupaComments from "@/components/Post/SupaComments"
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
      hero,
      blockMap
    },
    revalidate: 1
  }
}
const About = ({ blockMap,hero }) => {
    return (
<div title={BLOG.about} description={BLOG.description} className='about' >
  <div className="flex flex-col justify-center content-center items-center pb-12  space-y-16">
    
     <Tilt 
              className="my3d shadow-lg shadow-indigo-500 rounded-xl  max-w-[80VW] 
              bg-[url('../public/mycover.jpg')]
              bg-cover
              "
              perspective={1500}
              glareEnable={true}
              glarePosition={'all'}
              glareMaxOpacity={0.5}
              glareColor="#000000"
              glareBorderRadius="12px"
              scale={1.02}
            >
               
              <div className="my3din flex flex-col justify-center items-center flex-wrap p-12  ">
                {/*<Image  src={hero?.page_cover} alt={BLOG.title} fill className=' rounded-3xl  '/>*/}
                <Image  src={Logoimg}  alt='Logo'  width={100}  height={100}  className=' animate-bounce  '/>
                <NotionRenderer blockMap={blockMap} frontMatter={{}} subPageTitle={null} />
              </div>
              
    </Tilt>
 </div>
   <SupaComments />
</div>

)}
export default About

