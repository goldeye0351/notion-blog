"use client"
import Tilt from 'react-parallax-tilt'
import Image from "next/image"
import HomewatchIMG from "@/public/homewatcht.png"
import CardTags from '../Card/CardTag.js'
import NotionRenderer from '@/components/Post/NotionRenderer'

const Hero = ({ blockMap,tags, currentTag,heropost }) => {


  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center justify-center md:space-x-16 '>
        {/* TITL 3D 动图 */}
        <div className=" -rotate-90 duration-1000 sm:rotate-0 
        flex items-center justify-center p-0 gap-4 flex-wrap rounded-xl ">
            <Tilt
              className="my3d shadow-lg  flex justify-center w-[210px] h-[330px] rounded-xl 
              bg-cover bg-[url('../public/homewatcht.png')]
              "
              perspective={500}
              glareEnable={false}
              glarePosition={'all'}
              glareMaxOpacity={1}
              
              glareBorderRadius="12px"
              scale={1.02}
            >
              {/* <Image src={HomewatchIMG}  alt="" fill  /> */}
              <div className="my3din flex flex-col justify-center items-center  ">
                <CardTags tags={tags} currentTag={currentTag}  className=" duration-1000 rotate-90 sm:rotate-0 p-3" />  

              </div>
            </Tilt>
        </div>
        {/* NOTION 3D文件内容*/}
        <div className='flex flex-col justify-center'>
          <Tilt 
              className="my3d shadow-2xl shadow-gray-500 rounded-xl  max-w-[80VW] 
              
              "
              perspective={1500}
              glareEnable={true}
              glarePosition={'all'}
              glareMaxOpacity={0.5}
              glareColor="#000000"
              glareBorderRadius="12px"
              scale={1.02}
            >
              <Image  src={heropost?.page_cover} alt="" fill className=' rounded-3xl '/>
              <div className="my3din flex flex-col justify-center items-center flex-wrap p-12">
                <NotionRenderer blockMap={blockMap} frontMatter={{}} subPageTitle={null} />
              </div>
              
          </Tilt>
        </div>
        
      </div>
    </>
  )
}

export default Hero
