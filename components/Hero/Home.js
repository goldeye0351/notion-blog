"use client"
import Image from 'next/image'
import LOGOIMG from '@/public/images/logo.png'
import Tilt from 'react-parallax-tilt'
import CardTags from '../Card/CardTag.js'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import NotionRenderer from '@/components/Post/NotionRenderer'



const Hero = ({ blockMap,tags, currentTag  }) => {
  const { locale } = useRouter()
  const t = lang[locale]


  return (
<>
      <div className='container mx-auto flex justify-center px-5 py-2 mb-1 md:flex-row flex-col items-center'>
        {/* NOTION 文件内容*/}
        <div className='hidden md:hidden lg:hidden flex-col md:w-3/5 md:items-start mb-0 md:mb-0 text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
        </div>
                {/* TITL 3D 动图 */}
        <div className="lg:hidden  flex items-center justify-center p-8 gap-4 flex-wrap rounded-3xl">

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
      </div>
</>
  )
}

export default Hero
