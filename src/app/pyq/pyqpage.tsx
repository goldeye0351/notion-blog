"use client"
import Image from 'next/image';
import { useState } from 'react';
import { motion,useScroll} from 'framer-motion';
import Card from '@/components/card';
import { randomcolor } from '@/utils/random-color';
import { Post } from '@/types/post';
import ULike from '../../components/uLike';
import Pinglun from '@/components/Post/NotionComment';
const PYQPAGE =({ pyq ,allpls,resdata}: { pyq: Post[],allpls: Post[],resdata:any }) =>{
    const { scrollYProgress } = useScroll()
    const [xie, setXie] = useState(false);
    const [activeComment, setActiveComment] = useState(""); // 新增状态

    return<>
      <main>
        {
        pyq.map( (post, i) => {
          const defumami = resdata.filter((xyz: { x: string; y:number }) => xyz.x == post.slug);
          const targetScale = 1 - ( (pyq.length - i) * 0.02);
          const mypls= allpls.filter(pl => pl?.title === post.id)
          const toggleXie = () => {
            setXie((prevState) => !prevState);
            setActiveComment(post.id);
          };
          const toggleXie2 = () => {
            setXie(false);
          };
          return <><Card key={`p_${i}`} i={i}  progress={scrollYProgress} targetScale={targetScale}  >
                    <div  key={post.id} className=" bg-day dark:bg-night flex-col flex  rounded-xl duration-300 mx-auto  w-[96VW] lg:w-96  ">
                      <div className=" flex flex-row">
                        <div id='左边头像' onClick={toggleXie2} className="flex justify-center  ">
                              <Image src='/51.svg' alt="Gravatar" width={88}  height={88} priority  className='   rounded-lg h-16 w-16 scale-90   '/>                    
                        </div>
                        <div id='右边主体'  className=" space-y-1 text-gray-200 flex flex-col  w-full ">
                          <div id='姓名' className=" font-extrabold text-lg text-blue-300  ">
                            {`51xMI` }
                          </div>
                          <article id='主体文字' className="  break-words italic w-full max-h-36 overflow-y-scroll ">
                            {post.summary }
                          </article>
                          <div id='图' className=" flex justify-center" onClick={toggleXie2}  >                         
                              {post.link && post.link.slice(-3) === 'mp4' &&
                                <video controls width={384} height={384} >
                                  <source src={post.link} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              }
                            {post.link && post.link.slice(-3) !== 'mp4' &&
                              <div className=" overflow-hidden ">
                              <motion.div
                              initial={{ scale: 2 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 2,  ease: 'easeOut' }}
                                  className="  rounded-2xl "
                                >
                                  <Image src={post.link} alt={post.link} width={384} height={384} placeholder='blur' blurDataURL={randomcolor()} className="rounded-3xl   " />
                              </motion.div>
                              </div>
                            }
                          </div>
                          <div className=" flex flex-grow w-full justify-between py-3  ">                   
                            <div>{post.date.substring(0,10)}</div>
                            <button onClick={toggleXie}  className='  flex justify-center items-center group '>
                                <div className=' ml-3 justify-center items-center inline-block'>
                                  💬       
                                </div>
                                <div className=' ml-1 mr-3 justify-center items-center inline-block'>
                                      {mypls.length}
                                </div>
                            </button>
                            <div className='  cursor-pointer px-6 flex justify-end  items-end bg-transparent text-gray-200'>
                              <ULike slug={post.slug} ulike={defumami[0]?.y} />
                            </div>
                          </div>     
                        </div>
                      </div>
                    </div>

            </Card>
            { activeComment===post.id ?
                        <div  className={`${xie && activeComment===post.id ? "w-96 h-full " : "w-0 h-full" } 
                        fixed duration-1000 bg-gray-800 ring-1 ring-green-400 overflow-y-scroll top-0 bottom-0  -right-1 z-50 `}
                        >
                           <Pinglun post={post} mypls={mypls} ip="ip" className={'mt-16'}/>
                        </div>
                        :null}


            </>
        })
        }

    </main>
    </>
}

export default PYQPAGE