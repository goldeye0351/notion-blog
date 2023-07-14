
import { StarIcon } from "@heroicons/react/outline"
import { getAllPosts } from '@/lib/notion'

export async function getStaticProps() {
    const posts = await getAllPosts({ onlyPost: true })
    return {
      props: {
        posts
      },
      revalidate: 1
    }
  }
const test = ( {posts}) => {
  
  return <>
<div  className="  w-[90vw] mx-auto  flex flex-col justify-center items-center border-y-2 border-gray-500 dark:border-gray-300 " >
    <div className="h-full w-1  relative  border-gray-500 dark:border-gray-300 border-2 flex flex-col "  >
    {posts.map((post) => (<>
        <div key={post.id}              
             id="timeline"
             className={`min-w-[45vw] w-[45vw] flex flex-row justify-center items-center my-3
             ${ posts.indexOf(post)% 2 === 1 ? 'timeline ' : 'timeline-left'}
             `}>   
                <StarIcon className=" -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-blue-500"/>
                <div 
                id="timeline-panel"
                className={`mx-6 border-2 border-gray-500 dark:border-gray-300 rounded-xl flex flex-col w-full p-3 bg-gray-300 dark:bg-gray-600
             ${ posts.indexOf(post)% 2 === 1 ? 'timeline-panel ' : 'timeline-panel-left'}
             `}>  
                    <div class="text-xl  "> {post.title}</div>
                    <div class="text-sm opacity-80 "> 2023-07-07</div>
                    <div class=" ">{post.summary}</div>
                </div>        
        </div>
    </>))}
    </div>
</div>
</>}
export default test