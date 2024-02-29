import Image from "next/image"
import svglogo from '@/public/51xmi.svg'
import bjIMG from '@/public/pyq.png'
import logoimg from '@/public/pyqlogo.png'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import Container from '@/components/Container'
import FormattedDate from "@/components/Common/FormattedDate"
import DaysAgo from "@/components/Common/DaysAgo"
import md5 from 'md5'
import Pinglun from "@/components/Post/NotionComment"
export async function getStaticProps() {
  const posts = await getAllPosts({onlyMoment:true})
  return {
    props: {
    posts,
    },
    revalidate: 1
  }
}

const Saysay = ({posts}) => {
  const saysaytext=BLOG.saysay
  const post = {
    id: BLOG.saysay+'评论',
    title: BLOG.saysay+'评论'
  };



  return (<>
<Container  title={`${BLOG.title}${BLOG.saysay}`} description={BLOG.description}  ogimage={BLOG.pyqog} className=' m-auto min-h-screen flex flex-col  ' >
    <Image src={bjIMG} alt='朋友圈' className=" absolute top-0 left-0 right-0    mx-auto w-screen   h-64 max-h-64  opacity-80  rounded-3xl  "/>
    <div className=" relative ">
        <div className=" sticky top-28 flex flex-row text-white  justify-end     ">
          <div  className="  flex-row flex   mt-28  p-2   text-white justify-center content-center items-center ">
            <Image src={logoimg} alt='朋友圈' className='h-24 w-24 mx-auto   ' />
            <span className=" inline-block  text-3xl italic ">
              {saysaytext} 
            </span>
          </div>
        </div>
  
    </div>
    < div className=" flex  lg:flex-row flex-col justify-center items-center content-center" >

      <div id='展示框' key='dispbox' className=" mx-auto  "> 
        <div className="  mx-auto  mt-3   ">
              <ol >
                {posts.map((post) => {
                  const tolink= post.Link;


                  return<li key={post.id} className='   my-3 flex-row flex space-x-3'>
                    <div id='左边头像' className="  ">
                          <Image src={svglogo} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-16 w-16 min-w-[64px]   '/>                    
                    </div>
                    <div id='右边主体'  className=" space-y-1 text-gray-200 flex flex-col w-80 ">
                      <div id='姓名' className=" font-extrabold text-lg text-blue-300  ">
                        {`51xMI` }
                      </div>
                      <article id='主体文字' className="  break-words italic  ">
                        {post.summary }
                      </article>
                      <div id='图' >
                      {tolink && tolink.slice(-3) === 'mp4' &&
                        <video controls>
                          <source src={tolink} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      }
                      {tolink && tolink.slice(-3) !== 'mp4' &&
                        <Image src={tolink} alt={tolink} width={384} height={384} className="rounded-sm" />
                      }
                      </div>
                      <div className=" flex flex-grow w-full justify-between ">                   
                        <div>{DaysAgo(post.date) }</div>
                        <div><FormattedDate date={post.date} /></div>
                      </div>
                      
                    </div>
                  </li>
                })}
              </ol>
        </div> 
      </div>  

    </div>
   {/* <Pinglun post={post}/> */}
</Container >
</>
)}
export default Saysay