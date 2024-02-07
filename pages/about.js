import Image from "next/image"
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import NotionRenderer from '@/components/Post/NotionRenderer'
import Tilt from 'react-parallax-tilt'
//import SupaComments from "@/components/Post/SupaComments"
import Container from '@/components/Container'
import Pinglun from "@/components/Post/NotionComment"
import { getDefComments } from "@/lib/notionapi";
  

export async function getStaticProps() {
  const pinglunId = BLOG.notionCommentId;
  const heros = await getAllPosts({ onlyHidden: true })
  const hero = heros.find((t) => t.slug === 'about')
  const postid=hero.id
  const mypingluns = await getDefComments(pinglunId,postid);
  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

  return {
    props: {
      hero,
      blockMap,
      pingluns: mypingluns,
    },
    revalidate: 1
  }
}
const About = ({ blockMap,hero,pingluns }) => {
  return (
<Container  title="About Me. Notion Blog" description={BLOG.description} ogimage={BLOG.link+BLOG.defaultIcon}  className='about' >
  <div className="relative  flex flex-col justify-center content-center items-center pb-12  space-y-16">
    
     <Tilt className="my3d rounded-xl  max-w-[80VW] "
              perspective={1500}
              glareEnable={true}
              glarePosition={'all'}
              glareMaxOpacity={0.5}
              glareColor="#000000"
              glareBorderRadius="12px"
              scale={1.02}
            >
            <Image src={hero.page_cover} alt={hero.title} fill className=" rounded-3xl" />   
              <div className=" my3din500  flex mx-auto flex-col text-xl  items-center content-center justify-center p-6 absolute top-[30%] inset-x-[30%]   ">
              About

              </div>
              <div className="my3din flex flex-col justify-center items-center flex-wrap p-12  ">


                <NotionRenderer blockMap={blockMap} frontMatter={{}} subPageTitle={null} />
              </div>
              
    </Tilt>
 </div>
   {/*<SupaComments />*/}
   <Pinglun post={hero}  pingluns={pingluns}  />
</Container >

)}
export default About

