import BLOG from "@/blog.config";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FormattedDate from "../Common/FormattedDate";
import { lang } from '@/public/lang'
import md5 from 'md5'
import { RefreshIcon } from "@heroicons/react/outline";


function Pinglun({post,pingluns} ){
    const { locale } = useRouter()
    const t = lang[locale]
    const router = useRouter();
    const ForceRefresh = () => {
      router.reload();
    };
    const [ren, setRen] = useState('');
    const [pinglun, setPinglun] = useState('');
    const [email, setEmail] = useState('');
    const [visitorIp, setVisitorIp] = useState('');
    const [dizhi, setDizhi] = useState('');
    const apiKey = '42f57ba8b461aaa41f1673d23d268d21';
  
    useEffect(() => {
      fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => setVisitorIp(data.ip))
        .catch(error => console.log(error));
    }, []);
    useEffect(() => {
      fetch(`http://api.ipstack.com/${visitorIp}?access_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setDizhi(' ' + data.region_name + data.location.country_flag_emoji + data.city ) )
        .catch(error => console.log(error));
      }, []);
    const parts = email.split('@');
    const part0 = parts[0];
    const part1 = parts[1];
    const emailHash = email ? md5(email.trim().toLowerCase()) : '';
    const gravatarUrl2 = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;
    const [showResult, setShowResult] = useState(true);
    const [showcom, setShowcom] = useState(false);
    const postid = post.id;
    const title = post.title
        //console.log('postid',postid)
    const submitForm = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/pinglunapi', {
          method: 'POST',
          body: JSON.stringify({ postid,ren,pinglun,title,email }),
        });
        // Success if status code is 201
        if (res.status === 201) {
          //alert('已成功.请刷新查看');
          setShowResult(false);
          setShowcom(true);
          //ForceRefresh;
          //setTimeout(() => {      router.reload(); }, 10000);
          window.scrollTo({ top: document.getElementById('comment').offsetTop, behavior: 'smooth' })
          //console.log('强制刷新了?')
        } else {
          alert('errer 信号不好, 出错了')    
        }
      };

return<>
        <div onClick={ForceRefresh}  className=" flex justify-center cursor-pointer  ">
          <div className=" max-w-screen-md w-full  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-8 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </div>
        </div>
  { showResult&& <form onSubmit={submitForm} className=' max-w-screen-md grid grid-cols-8  gap-3  mx-auto'>

      <div className='p-3 col-span-8 bg-gray-200 dark:bg-gray-700 duration-500 rounded-xl'>
          <textarea    name="PINGLUN"  id="PINGLUN"  rows="3"
            className=' block italic p-1 w-full bg-white/30 dark:bg-black/100 duration-500 rounded-xl'
            placeholder={t.LAYOUT.COMMENT_MAIN}
            value={pinglun}
            onChange={(e) => setPinglun(e.target.value)}
            required
          ></textarea>
      </div>

      <div className=" hidden sm:block  col-span-2 p-3  bg-gray-200 dark:bg-gray-700 text-gray-400  rounded-xl  justify-center duration-300 ">
        <input type="hidden" name="ip" value={visitorIp}  className=" text-gray-400 italic text-sm px-3  mx-3  "/>
        IP: {visitorIp} 
         {dizhi} 
        </div>
      <div className=' col-span-3 sm:col-span-2 p-3  bg-gray-200 dark:bg-gray-700 rounded-xl flex flex-col justify-center duration-300 ' >
          <input id="REN"  name="REN"
              type="text" className='  italic px-3  mx-3 block  duration-500 bg-transparent '
              placeholder={t.LAYOUT.COMMENT_NAME}
              value={ren}
              onChange={(e) => setRen(e.target.value)}
              required
          />
      </div>
      <div className=' col-span-3 sm:col-span-2 p-3  bg-gray-200 dark:bg-gray-700 rounded-xl flex flex-col justify-center duration-300 ' >
          <input id="EMAIL"  name="EMAIL"
              type="text" className='  italic px-3  mx-3 block  duration-500 bg-transparent '
              placeholder={t.LAYOUT.COMMENT_EMAIL}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
      </div>
      <button  type="submit" className=' col-span-2 text-gray-400  p-3 text-2xl  bg-gray-200 dark:bg-gray-700  hover:bg-gray-200 dark:hover:bg-gray-600 duration-500 rounded-xl  '>
      {t.LAYOUT.COMMENT_SUBMIT}
      </button>
  </form>}
    {/*  temp    */}
    {showcom && 
    <div className="  mx-auto  flex flex-row justify-center">
      <li  className='  m-3 flex  w-[90vw] max-w-screen-md  '>
        <div className=" justify-center flex-col flex text-center duration-300 hover:text-blue-500 ">
        <Image src={gravatarUrl2} alt="Gravatar" width={100}  height={100} priority  className=' rounded-full h-12 w-12 mr-3 hover:animate-pulse   '/>
        </div>
        <div id="temppl" className=' p-3 bg-gray-200  dark:bg-gray-700 rounded-2xl  text-sm w-full ring-1 ring-white/30    '>
          {pinglun}
          <hr />
          <div className=" flex-row flex justify-between ">
            <div id="tempname" className=" font-extrabold text-lg ">
            {ren}
            </div>
            <FormattedDate   />
          </div>
        </div>
      </li>
    </div> }

   {/*  temp    */}
<div id="comment" className="  mx-auto  flex flex-row justify-center">
      <ol >
        {pingluns.map((post) => {
          const myemail = post.properties.Email.email;
          const parts = myemail ? myemail.split('@'): '';
          const part0 = parts[0];
          const part1 = parts[1];
          const emailHash = myemail ? md5(myemail.trim().toLowerCase()) : '';
          const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;


          return<li key={post.id} className='  m-3 flex  w-[90vw] max-w-screen-md  even:italic  '>

            <div className=" justify-center flex-col flex text-center duration-300 ">
               <Image src={gravatarUrl} alt="Gravatar" width={100}  height={100} priority  className=' rounded-full h-12 w-12 mr-3 hover:animate-pulse   '/>
            </div>
            <div className=' p-3 bg-gray-200  dark:bg-gray-700 rounded-2xl  text-sm w-full ring-1 ring-white/30    '>
              {post.properties.Text.rich_text[0].text.content }
              <hr />
              <div className=" flex-row flex justify-between ">
                <div className=" font-extrabold text-lg ">{post.properties.Ren.rich_text[0].text.content } </div>
                <FormattedDate  date={post.created_time} />
              </div>
            </div>
          </li>
        })}
      </ol>
</div> 

</>
}
export default Pinglun
