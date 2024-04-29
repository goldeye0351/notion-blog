import Image from "next/image";
import DaysAgo from "../Common/DaysAgo";
import md5 from 'md5'


function LastPinglun({post ,className} ){
    const myemail = post.Email;
    const parts = myemail ? myemail.split('@'): '';
    const part0 = parts[0];
    const part1 = parts[1];
    const emailHash = myemail ? md5(myemail.trim().toLowerCase()) : '';
    const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;


return<div key={post.id}   className={className}> 
              <div id='左边头像' className="  flex my-auto ">
                    <Image src={gravatarUrl} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-10 w-10 min-w-[40px]   '/>                    
              </div>
              <div id='右边主体'  className="   flex flex-col  w-full">
                <div id='姓名' className=" font-extrabold  text-blue-300 flex flex-row   w-full justify-between   ">
                  <div>{post.vip }</div>
                  <div>{DaysAgo(post.date) }</div>
                </div>
                <article id='主体文字' className=" border-b border-green-400/10  break-words text-sm  max-w-[190px] ">
                  {post.summary }
                </article>                
              </div>
  </div>  
}
export default LastPinglun
