import Image from "next/image"
import mypaypng from'@/public/mypay.png'
import BLOG from "@/blog.config"
import { useState } from "react"
export default function MyPay() {
    const [isOpen, changeOpen] = useState(false)
    const toggleOpen = () => { changeOpen(!isOpen) }
    return (<div className="   flex flex-col justify-center items-center content-center mx-auto  p-3 ">
                <Image onClick={toggleOpen}  src={mypaypng} alt='12' className={`${isOpen? 'w-60 h-60' : 'w-0 h-0'} rounded-full  duration-300 `   } />
                <div onClick={toggleOpen} className={`${!isOpen? ' w-full  p-3' : 'hidden '}  
                justify-center cursor-pointer flex mx-auto rounded-xl  text-amber-500 bg-gray-700 dark:bg-gray-800  
                  `}>
                        {BLOG.paytext}
                </div>

        </div>
    )
}