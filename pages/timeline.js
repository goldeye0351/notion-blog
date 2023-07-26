import { getAllPosts } from '@/lib/notion'
import FormattedDate from '@/components/Common/FormattedDate'
import { CodeIcon, CubeIcon,  CogIcon,  } from "@heroicons/react/outline"
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

<div id="dapin" className=" flex h-screen overflow-scroll mx-auto flex-col justify-center items-center" >
    <div className="md:h-[500VH] h-[100VH] md:w-1 w-100VW overflow-scroll md:overflow-visible    md:relative  border-gray-500 dark:border-gray-300 md:border-2  flex flex-col py-16 "  >
    {posts.map((post) => (<>
        <div key={post.id}              
             id="timeline"
             className="w-96 flex flex-row justify-center items-center my-6
             first:mt-8 md:first:mt-[1500px]
             odd:timeline md:odd:-translate-x-[100%] md:odd:rotate-12
             even:timeline-left md:even:-rotate-12 " 
             >   
                <CogIcon className=" md:hidden  min-w-[48px] h-min w-12 border-2 rounded-full bg-gray-300 dark:bg-slate-500"/>
                <div className=' hidden md:flex'>
                  <CodeIcon className={`${ posts.indexOf(post)% 2 === 1 ? ' ' : 'hidden'} 
                  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-blue-300 dark:bg-blue-500
                  `}  />
                </div>  
                <div 
                id="timeline-panel"
                className={`  group   mx-6 border-2 border-gray-500 dark:border-gray-300 rounded-xl  flex flex-col w-full p-3 bg-gray-300 dark:bg-gray-600
             ${ posts.indexOf(post)% 2 === 1 ? 'timeline-panel  ' : 'timeline-panel-left  '}
             `}>  
                    <div className="text-xl  "> {post.title}</div>
                    <div className="text-sm opacity-80 "><FormattedDate date={post.date} /></div>
                    <div className=" -translate-x-96 opacity-0 group-hover:translate-x-0 group-hover:opacity-100  duration-500  "> {post.summary}</div>
                </div>
                <div className=' hidden md:flex'>
                  <CubeIcon className={`${ posts.indexOf(post)% 2 === 1 ? 'hidden' : ' '} 
                  -mx-6 min-w-[48px] h-min w-12 border-2 rounded-full bg-indigo-300 dark:bg-indigo-500
                  `}  />  
                </div>
        </div>
    </>))}
    </div>
</div>
</Container>}
export default timeline