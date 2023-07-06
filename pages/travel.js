import BLOG from "@/blog.config"
import Link from 'next/link'
import Image from "next/image"
import MYIMG from "@/public/1.png"
import LOGOIMG from "@/public/mycover.jpg"
import { pngdata } from "@/components/Data"
import { register } from 'swiper/element/bundle'
register()

const travel = ( {png} ) => {
  
    return <>

<div className='max-w-[50VW] justify-center content-center items-center mx-auto  duration-500  -rotate-12 border-2 overflow-visible' >
      <swiper-container loop="true" autoplay="true" slides-per-view="3" autoplay-delay="500"  
         parallax="true" className="overflow-visible"
      > 
       {pngdata.map((png) => (<>
        <swiper-slide key={png.id}  >
            <div className=" hover:scale-150 duration-300 overflow-visible ">{png.image}</div>
            <div class="mymenutext"   data-swiper-parallax="-300" data-swiper-parallax-scale="0.05" data-swiper-parallax-duration="600">{png.text}     </div>

        </swiper-slide>
        </>
        ))}
      </swiper-container>

</div>

<div className=" flex justify-center items-center  content-center">
    <div className="p-10 rounded-3xl [&_*]:transition-all [&_*]:ease-linear [&_*]:duration-200">
        <div className="text-4xl font-bold flex justify-center ">Popular Collections</div>
        <div className="hidden md:flex justify-center items-center gap-4 mt-4 mb-8 [&>*]:px-4 [&>*]:py-2 [&>*]:rounded-lg [&>*]:cursor-pointer
         [&>*]:bg-gray-300 dark:[&>*]:bg-gray-600  
          ">
                    <div className=" hover:bg-slate-500 dark:hover:bg-slate-500" >1</div>
                    <div className=" hover:bg-slate-500 dark:hover:bg-slate-500" >New York</div>
                    <div className=" hover:bg-slate-500 dark:hover:bg-slate-500" >Relaxing</div>
                    <div className=" hover:bg-slate-500 dark:hover:bg-slate-500" >Person</div>
                    <div className=" hover:bg-slate-500 dark:hover:bg-slate-500" >Fashion</div>
        </div>


        <div className="flex items-center gap-4 flex-wrap flex justify-center ">  

            <div className="w-full max-w-[25rem] p-6 rounded-2xl bg-gray-300 dark:bg-gray-600">
                <Image  src={LOGOIMG}  alt="" className="h-56 w-full rounded-3xl object-cover object-center cursor-pointer hover:scale-105 hover:-rotate-3" />
                <div className="flex items-center py-4 justify-between [&>*]:mx-2 [&>*>img]:h-28 [&>*>img]:aspect-square [&>*>img]:object-cover [&>*>img]:object-center [&>*>img]:rounded-xl [&>*>img:hover]:scale-110 [&>*>img:hover]:-rotate-12 [&>*>img]:cursor-pointer">
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <h2>Nature</h2>
                    <div className="flex items-center justify-center gap-1 cursor-pointer">
                        <div className="text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z" />
                            </svg>
                        </div>
                        <p className="text-sm">7k</p>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-[25rem] p-6 rounded-2xl bg-gray-300 dark:bg-gray-600">
                <Image  src={LOGOIMG}  alt="" className="h-56 w-full rounded-3xl object-cover object-center cursor-pointer hover:scale-105 hover:-rotate-3" />
                <div className="flex items-center py-4 justify-between [&>*]:mx-2 [&>*>img]:h-28 [&>*>img]:aspect-square [&>*>img]:object-cover [&>*>img]:object-center [&>*>img]:rounded-xl [&>*>img:hover]:scale-110 [&>*>img:hover]:-rotate-12 [&>*>img]:cursor-pointer">
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <h2>Nature</h2>
                    <div className="flex items-center justify-center gap-1 cursor-pointer">
                        <div className="text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z" />
                            </svg>
                        </div>
                        <p className="text-sm">7k</p>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-[25rem] p-6 rounded-2xl bg-gray-300 dark:bg-gray-600">
                <Image  src={LOGOIMG}  alt="" className=" h-56 w-full rounded-3xl object-cover object-center cursor-pointer hover:scale-105 hover:-rotate-3" />
                <div className="flex items-center py-4 justify-between [&>*]:mx-2 [&>*>img]:h-28 [&>*>img]:aspect-square [&>*>img]:object-cover [&>*>img]:object-center [&>*>img]:rounded-xl [&>*>img:hover]:scale-110 [&>*>img:hover]:-rotate-12 [&>*>img]:cursor-pointer">
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                    <div>
                        <Image  src={LOGOIMG}  alt="" />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <h2>Nature</h2>
                    <div className="flex items-center justify-center gap-1 cursor-pointer">
                        <div className="text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14L6 17h12l-3.86-5.14z" />
                            </svg>
                        </div>
                        <p className="text-sm">7k</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>

  </>
  }
  export default travel