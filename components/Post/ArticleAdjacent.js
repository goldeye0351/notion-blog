import Image from "next/image"
import Link from "next/link"
import BLOG from "@/blog.config"
const prevandnext = ( {prev, next, me } ) => {
  return <>

  <div className='flex  justify-center mx-auto relative  py-5 '>
  <div className=" rounded-full flex flex-grow overflow-hidden ">
    
    
      <div className="md:w-2/5 md:h-36 w-3/5 h-16 scale-110 duration-500 overflow-hidden hover:w-4/5 relative" >
      <Link passHref href={`${BLOG.path}/${prev.slug}`} scroll={false}>
        <Image src={prev?.page_cover}  alt={prev.title} fill className='  relative  rounded-xl object-cover object-center'/>
        <div className=' absolute top-[35%] left-[10%]  flex justify-center md:text-7xl ' >
        &larr;<div className=' md:text-2xl inline-block my-auto '>{prev.title}</div>
        </div>
        </Link>
      </div>
   

      <div className="md:w-1/5 md:h-36 w-0 h-16 -skew-x-12 scale-110  relative   z-10    duration-500 overflow-hidden hover:w-2/5" >
        <Image src={me?.page_cover}  alt={me.title} fill className='  relative skew-x-12 scale-125  rounded-xl object-cover object-center'/>
      </div>
    

      <div className="md:w-2/5 md:h-36 w-3/5 h-16 scale-110 duration-500 overflow-hidden hover:w-4/5 relative  " >
      <Link passHref href={`${BLOG.path}/${next.slug}`} scroll={false}>
        <Image src={next?.page_cover}  alt={next.title} fill className='  relative  rounded-xl object-cover object-center'/>
        <div className=' absolute top-[35%] right-[10%]  flex justify-center md:text-7xl text-right ' >
        <div className=' md:text-2xl inline-block my-auto '>{next.title}</div> &rarr;
        </div>
      </Link>
      </div>

  </div>
</div>
</>}
export default prevandnext