import { getAllPosts } from '@/lib/notion'
import FormattedDate from '@/components/Common/FormattedDate'
import Mytesticon from "@/components/Testicon"
import { StarIcon, LightningBoltIcon ,CodeIcon, CubeIcon, AnnotationIcon,  BadgeCheckIcon, BeakerIcon, BellIcon, CogIcon, CubeTransparentIcon } from "@heroicons/react/outline"
import Container from '@/components/Container'
import BLOG from '@/blog.config'
export async function getStaticProps() {
    const posts = await getAllPosts({ onlyUpdate: true })
    return {
      props: {
        posts
      },
      revalidate: 1
    }
  }
const timeline = ( {posts}) => {
  
  return     <Container title={BLOG.title} description={BLOG.description}>

<div  className="  mx-auto  flex flex-col justify-center items-center border-y-2 border-gray-500 dark:border-gray-300 " >
    <div className="h-full w-1  relative  border-gray-500 dark:border-gray-300 border-2 flex flex-col "  >
    {posts.map((post) => (<>
        <div key={post.id}              
             id="timeline"
             className={`min-w-[35vw] w-[35vw] flex flex-row justify-center items-center my-3
             ${ posts.indexOf(post)% 2 === 1 ? 'timeline ' : 'timeline-left'}
             `}>   
                < Mytesticon index ={posts.indexOf(post)% 6} />
                <div 
                id="timeline-panel"
                className={`mx-6 border-2 border-gray-500 dark:border-gray-300 rounded-xl flex flex-col w-full p-3 bg-gray-300 dark:bg-gray-600
             ${ posts.indexOf(post)% 2 === 1 ? 'timeline-panel ' : 'timeline-panel-left'}
             `}>  
                    <div class="text-xl  "> {post.title}</div>
                    <div class="text-sm opacity-80 ">
                        <FormattedDate date={post.date} />
                    </div>
                    <div class=" ">{post.summary} </div>
                </div>        
        </div>
    </>))}
    </div>
</div>

</Container>}
export default timeline