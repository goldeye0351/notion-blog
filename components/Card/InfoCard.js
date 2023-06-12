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
    className="my3d shadow-lg 
     bg-slate-200 dark:bg-slate-600 max-w-[20rem] rounded-xl"
    perspective={500}
    glareEnable={true}
    glarePosition={'all'}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <span className=" animate-pulse  rounded-2xl w-full absolute bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"><span class="hidden ">1</span></span>
    <span className=" animate-pulse  rounded-2xl w-full absolute top-0 h-2 bg-gradient-to-r from-purple-600 via-blue-500 to-green-300"><span class="hidden ">1</span></span>
       
    <div className="my3din flex flex-col justify-center items-center">
      <div className="text-3xl font-bold pt-8">{BLOG.author}</div>
      <Image src={LOGOIMG} alt={BLOG.title} width={180} height={180} className=' hover:-rotate-45  duration-300' />
      <CardTags tags={tags} currentTag={currentTag} />  

     <div className="h-16 py-2">{BLOG.description}</div>

    </div>
  </Tilt>
 </div>



</>
  )
}
export default InfoCard