"use client"
import Image from 'next/image'
import LOGOIMG from '@/public/images/logo.png'
import Tilt from 'react-parallax-tilt'
import CardTags from '../Card/CardTag.js'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import NotionRenderer from '@/components/Post/NotionRenderer'

const NewsletterHero = ({ blockMap,tags, currentTag }) => {
  const { locale } = useRouter()
  const t = lang[locale]

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        {/* NOTION 文件内容*/}
        <div className='flex flex-col md:w-4/5 md:items-start mb-6 md:mb-0 md:text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
        </div>
        {/* TITL 3D 动图 */}
        <div className="hidden md:flex items-center justify-center p-24 gap-4 flex-wrap rounded-xl">
            <Tilt
              className="my3d shadow-lg 
               max-w-[20rem] min-w-[15rem] rounded-xl bg-cover
              bg-[url('../public/images/news.png')]"
              perspective={500}
              glareEnable={false}
              glarePosition={'all'}
              glareMaxOpacity={1}
              
              glareBorderRadius="12px"
              scale={1.02}
            >
                
              <div className="my3din flex flex-col justify-center items-center">
                <div className="text-3xl font-bold pt-16">{BLOG.author}</div>
                <Image src={LOGOIMG} alt={BLOG.title} width={180} height={180} className=' hover:-rotate-45  duration-300' />
                <CardTags tags={tags} currentTag={currentTag} />  

              <div className=" h-28 py-6">{BLOG.description}</div>

              </div>
            </Tilt>
        </div>
      </div>
    </>
  )
}

export default NewsletterHero
