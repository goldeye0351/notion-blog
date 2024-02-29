import Image from "next/image"
import qianimg from '@/public/before.png'
import houimg from '@/public/after.png'
//import logoimg from '@/public/51xmi.svg'
/**
 * @param {{ hi: text or any ,logoimg: image src }} 
 */
function Hello({hi,logoimg}) {
    return (<div className=" m-auto flex justify-center ">
      <div id="form-wrap" className=" group relative  ">
        <div className=" w-80 h-80 overflow-hidden ">
        {/* Logo 图片 */}
        <div className="absolute  z-10 mt-52  group-hover:mt-0 duration-1000  ">
            {logoimg}
            <div className=" bg-gray-700 dark:bg-gray-800 scale-90  rounded-xl  
            h-0 group-hover:h-28 duration-1000 ease-out  w-80 
            overflow-hidden   flex justify-center items-center content-center ">
            {hi}
            </div>
        </div>
        {/* 前面的图片 */}
        <div className="absolute  z-0 mt-24 ">
          <Image src={qianimg} alt='' className="mt-0" />
        </div>
        {/* 后面的图片 */}
        <div className="absolute z-20 mt-52">
          <Image src={houimg} alt='' className="" />
        </div>
        </div>
      </div>
      <div className="h-72"></div>
    </div>
    );
  }
  
  export default Hello;
