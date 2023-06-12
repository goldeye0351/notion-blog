"use client"
import BLOG from '@/blog.config'
import Image from 'next/image'
import LOGOIMG from '@/public/images/logo.png'
import Tilt from 'react-parallax-tilt'
import CardTags from "./CardTag"


const InfoCard = ({tags, currentTag  }) => {
  return (
<>
  <div className="flex items-center justify-center p-24 gap-4 flex-wrap rounded-xl">
  <Tilt
              className="my3d shadow-2xl shadow-gray-500 rounded-xl
              bg-slate-200 dark:bg-slate-600 max-w-[50rem] min-w-[20rem] "
              perspective={500}
              glareEnable={true}
              glarePosition={'all'}
              glareMaxOpacity={0.5}
              glareColor="#000000"
              glareBorderRadius="12px"
              scale={1.02}
            >
               
              <div className="my3din flex flex-col justify-center items-center mb-10">
                <Image src={LOGOIMG} alt={BLOG.title} width={180} height={180} className=' hover:-rotate-45  duration-300' />
                <CardTags tags={tags} currentTag={currentTag} />  

              </div>
              <span className=" animate-pulse  rounded-b-full w-full absolute bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"><span class="hidden ">1</span></span>

            </Tilt>
 </div>



</>
  )
}
export default InfoCard