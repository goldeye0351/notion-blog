"use client"
import Tilt from 'react-parallax-tilt'
import CardTags from '../Card/CardTag.js'
import Typed from 'typed.js'
import { useEffect } from 'react'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const Hero = ({ blockMap,tags, currentTag  }) => {
  const { locale } = useRouter()
  const t = lang[locale]

  useEffect(() => {
  new Typed('#typed', {
          strings: ['<i>I am</i>',' ccc.', '535251.xyz','我想,我爱, 我要!','535251.xyz。我想我爱我要.xyz!'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,  
          smartBackspace: true,
          showCursor: true,
          loop: false,
          loopCount: 3
        })})

  return (
<>
      <div className='container mx-auto flex justify-center px-5 py-2 mb-1 md:flex-row flex-col items-center'>
        {/* NOTION 文件内容*/}

        <div className=' block w-56 h-40  relative  '> 
        I am 
        <span className=' p-5  inline ' id='typed' /> 


        </div>
        {/* TITL 3D 动图 */}
        <div className="lg:hidden  flex items-center justify-center p-12 gap-4 flex-wrap rounded-3xl relative w-96 h-48
        bg-cover dark:bg-[url('../public/images/nh.png')] bg-[url('../public/images/dh.png')]

        ">
            <Tilt
              className="my3d shadow-2xl shadow-gray-500 rounded-xl
              "
              perspective={500}
              glareEnable={true}
              glarePosition={'all'}
              glareMaxOpacity={0.5}
              glareColor="#000000"
              glareBorderRadius="12px"
              scale={1.02}
            >
               
              <div className="my3din flex flex-col justify-center items-center mb-10">
                
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
