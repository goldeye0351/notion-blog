import BLOG from "@/blog.config"
import Link from 'next/link'
import Image from "next/image"
import MYIMG from "@/public/1.png"
import { UserIcon,PlayIcon,ShareIcon } from "@heroicons/react/outline"
import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import LOGOIMG from "@/public/mycover.jpg"
import { pngdata } from "@/components/Data"
import Mypic from "@/components/Mypic"
import { register } from 'swiper/element/bundle'
register()

export async function getStaticProps() {
    const posts = await getAllPosts({ onlyTravel: true })
    const tags = getAllTagsFromPosts(posts)

    return {
      props: {
        posts,
        tags
      },
      revalidate: 1
    }
  }

const travel = ( {png,posts,index} ) => {
    
    return <>
<div id="travel" className="  ">
    <div id="maintravel" className=" flex flex-col justify-center items-center  content-center">
        <div id="threetags" className="flex flex-row flex-grow  w-full max-w-[80VW] items-center justify-between space-x-2">
            
        {posts.map((png) => (<>

            <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false} 
            key={png.id} 
            className={`px-3 w-1/4 hover:w-1/2 h-16 flex flex-row justify-between content-center items-center rounded-xl   ${ posts.indexOf(png)% 2 === 1 ? 'cai1 ' : 'cai2'}
            overflow-hidden rounded-xl duration-500 `}>

                <div >{png.title}
                <svg className=" inline-block" xmlns="http://www.w3.org/2000/svg" height={28} viewBox="0 0 24 24">

                    <path fill="currentColor"
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z" />
                </svg>
                
                </div>

                <ShareIcon 
                className={`inline-block h-16 w-16 -rotate-45 opacity-50 hover:rotate-0 hover:opacity-100 hover:scale-110     ${ posts.indexOf(png)% 2 === 1 ? 'hidden ' : ''}
                duration-500 `}/>
                <PlayIcon 
                className={`inline-block h-16 w-16 -rotate-45 opacity-50 hover:rotate-0 hover:opacity-100 hover:scale-110     ${ posts.indexOf(png)% 2 === 1 ? ' ' : 'hidden'}
                duration-500 `}/>
            </Link>


        </>))}

        </div>
        <div className=" mt-3 w-full max-w-[80VW] min-h-[60vh] max-h-[60vh]   rounded-2xl relative  overflow-clip  ">
            <swiper-container loop="true" autoplay="true" slides-per-view="auto" autoplay-delay="3000" 
            effect="panorama" panorama-effect-rotate="30" panorama-effect-depth="500" 
            navigation="true"  
            className="" 
            > 
            {posts.map((png) => (<>
                <swiper-slide key={png.id}  >
                    <Link passHref href={`${BLOG.path}/${png.slug}`} scroll={false}  
                    className=" h-[60VH] min-h-[60vh] max-h-[60vh] flex flex-col justify-center ">
                        {png?.page_cover}
                        <Image key={png.id} src={png?.page_cover} alt={png.title} fill className='rounded-3xl  static '/>
                    </Link>
                </swiper-slide>
            </>))}
            </swiper-container>
        </div>
    </div>
</div>
</>
  }
  export default travel