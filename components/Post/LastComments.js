import Image from "next/image";
import { useRouter } from 'next/router';
import DaysAgo from "../Common/DaysAgo";
import { lang } from '@/public/lang'
import md5 from 'md5'


function LastPinglun({post} ){
    const { locale } = useRouter()
    const t = lang[locale]
    const myemail = post.Email;
    const parts = myemail ? myemail.split('@'): '';
    const part0 = parts[0];
    const part1 = parts[1];
    const emailHash = myemail ? md5(myemail.trim().toLowerCase()) : '';
    const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;


return<div className="  px-3 py-1   "> 
    <div id="comment" >
          <ol className=" w-64   ">
            <li key={post.id} className='  flex-row flex space-x-1'>
              <div id='左边头像' className="  ">
                    <Image src={gravatarUrl} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-12 w-12 min-w-[48px]   '/>                    
              </div>
              <div id='右边主体'  className="  text-gray-200 flex flex-col ">
                <div id='姓名' className=" font-extrabold text-lg text-blue-300  ">
                  {post.Ren }<span>{DaysAgo(post.date) }</span>
                </div>
                <article id='主体文字' className="  break-words italic max-w-[180px] ">
                  {post.Text }
                </article>                
              </div>
            </li>
          </ol>
    </div> 
  </div>  
}
export default LastPinglun
