import Image from "next/image"
import Link from "next/link"
const Prevandnext = ( {prev, next, me } ) => {
  return <>

  <div className=' justify-center mx-auto  py-5 relative md:flex  md:h-36 h-16  opacity-70  -z-10'>
  <div className=" absolute -bottom-16  w-screen rounded-t-full flex flex-grow overflow-hidden text-gray-200 dark:text-gray-200">
        
      <div className="md:w-2/5 md:h-36 w-3/5 h-28 scale-110 duration-500 overflow-hidden hover:w-4/5 relative" >
        <Link passHref href={`${prev.slug}`} scroll={false}>
          <Image src={prev?.cover}  alt={prev.title} width={1000} height={1000} className='  relative  rounded-xl object-cover object-center'/>
          <div className=' absolute top-[35%] left-[10%]  flex justify-center md:text-7xl ' >
          &larr;<div className=' md:text-xl inline-block my-auto bg-gray-700 dark:bg-gray-800 p-3 rounded-xl   '>{prev.title}</div>
          </div>
        </Link>
      </div>
   

      <div className="md:w-1/5 md:h-36 w-0 h-28 -skew-x-12 scale-110  relative  duration-500 overflow-hidden hover:w-2/5" >
        <Image src={me?.cover}  alt={me.title} width={1000} height={1000}  className='  relative skew-x-12 scale-125  rounded-xl object-cover object-center'/>
      </div>
    

      <div className="md:w-2/5 md:h-36 w-3/5 h-28 scale-110 duration-500 overflow-hidden hover:w-4/5 relative  " >
      <Link passHref href={`${next.slug}`} scroll={false}>
        <Image src={next?.cover}  alt={next.title} width={1000} height={1000} className='  relative  rounded-xl object-cover object-center'/>
        <div className=' absolute top-[35%] right-[10%]  flex justify-center md:text-7xl text-right ' >
        <div className='  md:text-xl inline-block my-auto bg-gray-700 dark:bg-gray-800 p-3 rounded-xl '>{next.title}</div> &rarr;
        </div>
      </Link>
      </div>

  </div>
</div>
</>}
export default Prevandnext