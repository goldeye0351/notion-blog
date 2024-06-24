import { useState } from "react"
import Image from "next/image"
export default function MyNewPay() {
    const [isOpen, changeOpen] = useState(false)
    const toggleOpen = () => { changeOpen(!isOpen) }
    return (  <div className="mb-10 mx-6 flex md:flex-row flex-col rounded-lg border-2 border-amber-500 p-5 justify-between  md:p-10    ">
    
        <div className=" flex flex-col justify-between">
          <h3 className="mb-2 font-heading text-2xl font-bold text-slate-100 dark:text-slate-100">Did you find this article valuable?</h3>
          <p className="mb-5 text-lg leading-snug text-slate-400 dark:text-slate-400">
            Support <strong>Me </strong>. 
            来杯<span className=" text-amber-500">咖啡</span>?⬇️ <span className=" mx-3">来个<span className=" text-amber-500">鸡蛋灌饼</span>?➡️</span>  
          </p>
    
    
        </div>
    
        <div onClick={toggleOpen}  className="flex  flex-row items-center justify-end pl-2 text-slate-300 ">
          <svg className={`${isOpen? 'w-0 h-0' : 'w-28 h-28'} fill-amber-500   rounded-full  duration-300 `   } viewBox="0 0 512 512">
            <path d="M289.94 249.05l-59.06-16.86c-8.75-2.52-14.88-10.61-14.88-19.7 0-11.3 9.19-20.48 20.47-20.48h36.91c8.24 0 16.08 2.56 22.63 7.32 2.99 2.17 7.22 1.46 9.84-1.16l11.42-11.42c3.5-3.5 2.94-9.22-.99-12.23-12.26-9.41-27.18-14.51-42.9-14.51H272v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24h-3.53c-30.59 0-55.13 26.3-52.24 57.48 2.06 22.16 19.06 40.12 40.45 46.22l56.44 16.11c8.75 2.52 14.88 10.61 14.88 19.7 0 11.3-9.19 20.48-20.47 20.48h-36.91c-8.24 0-16.08-2.56-22.63-7.32-2.99-2.17-7.22-1.46-9.84 1.16l-11.42 11.42c-3.5 3.5-2.94 9.21.99 12.23 12.26 9.41 27.18 14.51 42.9 14.51H240v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h1.36c22.81 0 44.33-13.59 51.72-35.17 10.15-29.65-7.28-59.8-35.14-67.78zM512 256c0-35.5-19.4-68.2-49.6-85.5 9.1-33.6-.3-70.4-25.4-95.5s-61.9-34.5-95.5-25.4C324.2 19.4 291.5 0 256 0s-68.2 19.4-85.5 49.6c-33.6-9.1-70.4.3-95.5 25.4s-34.5 61.9-25.4 95.5C19.4 187.8 0 220.5 0 256s19.4 68.2 49.6 85.5c-9.1 33.6.3 70.4 25.4 95.5 26.5 26.5 63.4 34.1 95.5 25.4 17.4 30.2 50 49.6 85.5 49.6s68.1-19.4 85.5-49.6c32.7 8.9 69.4.7 95.5-25.4 25.1-25.1 34.5-61.9 25.4-95.5 30.2-17.3 49.6-50 49.6-85.5zm-91.1 68.3c5.3 11.8 29.5 54.1-6.5 90.1-28.9 28.9-57.5 21.3-90.1 6.5C319.7 433 307 480 256 480c-52.1 0-64.7-49.5-68.3-59.1-32.6 14.8-61.3 22.2-90.1-6.5-36.8-36.7-10.9-80.5-6.5-90.1C79 319.7 32 307 32 256c0-52.1 49.5-64.7 59.1-68.3-5.3-11.8-29.5-54.1 6.5-90.1 36.8-36.9 80.8-10.7 90.1-6.5C192.3 79 205 32 256 32c52.1 0 64.7 49.5 68.3 59.1 11.8-5.3 54.1-29.5 90.1 6.5 36.8 36.7 10.9 80.5 6.5 90.1C433 192.3 480 205 480 256c0 52.1-49.5 64.7-59.1 68.3z">
            </path>
          </svg>
          <Image  src="/mypay.png" alt='mypay' width={240} height={240} className={`${isOpen? 'w-60 h-60' : 'w-0 h-0'} rounded-full  duration-300 `   } />

        </div>
    
      </div>
    )
}