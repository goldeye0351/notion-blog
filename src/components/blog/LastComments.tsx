import Image from "next/image";
import { sha256 } from "js-sha256";
import { Post } from "@/types/post";
export default function LastPinglun({allpls}:{allpls:Post[]}){

  return(

  allpls.slice(0,5).map((post)=>{
    const myemail = post.Email;
    const parts = myemail ? myemail.split('@'): '';
    const part0 = parts[0];
    const part1 = parts[1];
    const emailHash = myemail ? sha256(myemail.trim().toLowerCase()) : '';
    const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;

  return<>
    <div key={post.id}   className='flex flex-row even:italic '> 
      <div id='左边头像' className="  flex my-auto ">
            <Image src={gravatarUrl} alt="Gravatar" width={40}  height={40} priority  className='rounded-lg h-10 w-10 min-w-[40px]   '/>                    
      </div>
      <div id='右边主体'  className="   flex flex-col  w-full">
        <div id='姓名' className=" font-extrabold  text-blue-300 flex flex-row   w-full justify-between   ">
          <div>{post.vip }</div>
          <div>{post.date}</div>
        </div>
        <div id='主体文字' className=" border-b border-green-400/10  break-words text-sm  ">
          {post.summary }
        </div>                
      </div>
  </div>
</>  
})
)}
