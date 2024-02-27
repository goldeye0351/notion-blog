import Image from "next/image"
import bjIMG from '@/public/pyq.png'
import logoimg from '@/public/pyqlogo.png'
import { useState } from "react"
import BLOG from '@/blog.config'
import Container from '@/components/Container'
import WeChat from "@/components/Post/WeChat"

const Saysay = () => {
  const saysaytext=BLOG.saysay
  const [xie,setXie]=useState(false);
  const toggleXie = () => {      setXie(prevState => !prevState);    };
  const post = {
    id: BLOG.saysay,
    title: BLOG.saysay,
  };
  return (<>
<Container  title={`${BLOG.title}${BLOG.saysay}`}  description={BLOG.description}  ogimage={BLOG.pyqog} className=' m-auto min-h-screen flex flex-col  ' >
    <Image src={bjIMG} alt='朋友圈' className=" absolute top-0 left-0 right-0    mx-auto w-screen   h-64 max-h-64  opacity-80  rounded-3xl  "/>
        <div className=" relative ">
            <div className=" sticky top-28 flex flex-row text-white  justify-end     ">
              <div onClick={toggleXie} className="  flex-row flex   mt-28  p-2   text-white justify-center content-center items-center ">
                <Image id='comment' src={logoimg} alt='朋友圈' className='h-24 w-24 mx-auto    hover:animate-spin  ' />
                <span className=" inline-block  text-3xl italic ">
                  {saysaytext} 
                </span>
              </div>
            </div>      
        </div>        
    < WeChat key='Notion Database' post={post} xie={xie}   />
</Container >
</>
)}
export default Saysay

