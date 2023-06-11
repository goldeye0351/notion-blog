import BLOG from '@/blog.config'
import Image from "next/image"
import LOGOIMG from "@/public/images/logo.png"
import LVIMG from "@/public/images/travel.jpg"
import Link from 'next/link'
import Social from '../Common/Social.js'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { UserIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import NotionRenderer from '@/components/Post/NotionRenderer'
import Tags from '@/components/Common/Tags'


const AboutHero = ({ blockMap, tags, currentTag  }) => {
  const [showCopied, setShowCopied] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-4/5 md:items-start mb-6 md:mb-0 md:text-left'>
          <NotionRenderer
            className='md:ml-0'
            blockMap={blockMap}
            frontMatter={{}}
            subPageTitle={null}
          />
        </div>

        <div className=" relative flex justify-center items-center gap-4 flex-wrap">
            <div className="relative bg-slate-200 dark:bg-slate-600  max-w-[50rem]  rounded-2xl">
                <div className="text-4xl font-bold mx-auto my-auto flex justify-center ">{BLOG.author}</div>

                <Image  src={LOGOIMG} alt="" className="w-full rounded-3xl object-cover object-center cursor-pointer hover:scale-105 hover:-rotate-3"  />
                <span className=" animate-pulse  rounded-2xl w-full absolute bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"><span class="hidden ">1</span></span>
                <div className=" mx-auto my-auto flex justify-center ">{BLOG.bio}</div>
                
                <div
                    className="flex items-center py-4 justify-between [&>*]:mx-2 [&>*>img]:h-20 [&>*>img]:aspect-square [&>*>img]:object-cover [&>*>img]:object-center [&>*>img]:rounded-xl [&>*>img:hover]:scale-110 [&>*>img:hover]:-rotate-12 [&>*>img]:cursor-pointer">
                <Tags tags={tags} currentTag={currentTag} />  

                </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default AboutHero
