import Image from "next/image"
import Card from '../components/card';
import svglogo from '@/public/51xmi.svg'
import { PYQ } from "@/Icon/Icon"
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'
import Container from '@/components/Container'
import DaysAgo from '@/components/Common/DaysAgo';
import FormattedDate from '@/components/Common/FormattedDate';
import { motion,useScroll} from 'framer-motion';
import {  useRef } from 'react';
export async function getStaticProps() {
  const posts = await getAllPosts({onlyMoment:true})
  return {
    props: {
    posts,
    },
    revalidate: 1
  }
}

const PyqPage = ({posts,fullWidth}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const saysaytext=BLOG.saysay

  return (<>
<Container fullWidth={fullWidth} title={`${BLOG.title}${BLOG.saysay}`} description={BLOG.description}  ogimage={BLOG.pyqog} className=' m-auto min-h-screen flex flex-col  ' >
    <div className=" relative ">
        <div className=" flex flex-row text-white  justify-end     ">
          <div  className="  flex-row flex   p-2   text-white justify-center content-center items-center ">
            <PYQ className='h-24 w-24 mx-auto   ' />
            <span className=" inline-block  text-3xl italic ">
              {saysaytext} 
            </span>
          </div>
        </div>  
    </div>
    < div className=" flex  lg:flex-row flex-col justify-center items-center content-center" >

      <div id='展示框' key='dispbox' className={`${fullWidth ? 'max-w-[100VW]  ' : 'w-80 ' } mx-auto mt-8 `} > 
      <main ref={container} >
      {
        posts.map( (post, i) => {
          const targetScale = 1 - ( (posts.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i}  progress={scrollYProgress} range={[i * .01, 1]} targetScale={targetScale} >
                    <div key={post.id} className={` bg-day dark:bg-night bg-opacity-100 flex-col flex space-x-3 rounded-xl p-3 duration-300 mx-auto ${fullWidth ? 'w-[90VW]  ' : 'w-96 '}  `}>
                      <div className=" flex flex-row">
                        <div id='左边头像' className="  ">
                              <Image src={svglogo} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-16 w-16 min-w-[64px]   '/>                    
                        </div>
                        <div id='右边主体'  className=" space-y-1 text-gray-200 flex flex-col  w-full ">
                          <div id='姓名' className=" font-extrabold text-lg text-blue-300  ">
                            {`51xMI` }
                          </div>
                          <article id='主体文字' className="  break-words italic w-full ">
                            {post.summary }
                          </article>
                          <div id='图' className=" flex justify-center" >
                          {post.Link && post.Link.slice(-3) === 'mp4' &&
                            <video controls width={384} height={384} >
                              <source src={post.Link} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          }
                          {post.Link && post.Link.slice(-3) !== 'mp4' &&
                            <div className=" overflow-hidden ">
                            <motion.div
                            initial={{ scale: 2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 2,  ease: 'easeOut' }}
                                className="  rounded-2xl "
                              >
                                <Image src={post.Link} alt={post.Link} width={384} height={384} className="rounded-3xl   " />
                            </motion.div>
                            </div>
                          }
                          </div>
                          <div className=" flex flex-grow w-full justify-between ">                   
                            <div>{DaysAgo(post.date) }</div>
                            <div><FormattedDate date={post.date} /></div>
                          </div>     
                        </div>
                      </div>
                        <div className='   cursor-pointer pt-8 flex justify-center bg-transparent text-gray-200'>
                          <emoji-reaction endpoint="https://up.51xmi.com" reactTargetId={post.slug}  ></emoji-reaction>  
                        </div>
                    </div>

            </Card>
        })
      }
    </main>
      </div>  
    </div>
</Container >
</>
)}
export default PyqPage