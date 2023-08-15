import BLOG from "@/blog.config";
import { useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChatIcon,ChatAltIcon,ChatAlt2Icon, UserCircleIcon } from '@heroicons/react/outline';

import FormattedDate from "../Common/FormattedDate";

function Pinglun({post,pingluns} ){
  const router = useRouter();
  const ForceRefresh = () => {
    router.reload();
  };
  const handleRefresh = () => {
    setTimeout(() => {
      router.reload();
      location.reload();
    }, 5000);
  };
    const [ren, setRen] = useState('');
    const [pinglun, setPinglun] = useState('');
    const [showResult, setShowResult] = useState(true);
    const postid = post.id;
    const title = post.title
        //console.log('postid',postid)
    const submitForm = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/pinglunapi', {
          method: 'POST',
          body: JSON.stringify({ postid,ren,pinglun,title }),
        });
        // Success if status code is 201
        if (res.status === 201) {
          //alert('已成功.请刷新查看');
          setShowResult(false);
          //console.log('看不见评论栏了?')
          handleRefresh;
          ForceRefresh;
          //console.log('强制刷新了?')
        } else {
          alert('信号不好, 出错了')    
        }
      };

return<>
<div onClick={ForceRefresh} className="  mx-auto  flex flex-row justify-center">
      <ol >
        {pingluns.map((post) => (
          <li key={post.id} className='  m-3 flex  w-[90vw] max-w-screen-md  
           even:flex-row-reverse  even:text-right even:rounded-e-full
           odd:flex-row  odd:text-left odd:rounded-s-full  '>
            <div className=' px-3  flex flex-col justify-center
              rounded-2xl '>
              <div className='flex justify-center  w-24  overflow-hidden  '>
              < UserCircleIcon className=" h-8 "/>
              {post.properties.Ren.rich_text[0].text.content }  </div>
              <span className='italic text-xs flex justify-center '><FormattedDate  date={post.created_time} /></span>  
            </div>
            
            <div className=' p-3 bg-gray-200  dark:bg-gray-700 rounded-2xl  text-sm w-full   '>
            < ChatAlt2Icon className={` h-6 inline-block  ${ pingluns.indexOf(post)% 2 === 0 ? 'block ' : 'hidden'}
                `}/>
              {post.properties.Text.rich_text[0].text.content }
              < ChatAltIcon className={` h-6 inline-block  ${ pingluns.indexOf(post)% 2 === 0 ? 'hidden ' : 'block'}
                `}
               />
            </div>
          </li>
        ))}
      </ol></div> 
 { showResult&& <form onSubmit={submitForm} className=' max-w-screen-md grid sm:grid-cols-2 gap-3  mx-auto'>
      <div className='  p-3 sm:col-span-2 bg-gray-100 dark:bg-gray-700 rounded-xl '>
          <input id="REN"  name="REN"
              type="text" className=' block w-full duration-500 bg-white/30 dark:bg-black/30'
              placeholder='这是notion自带评论, 评论人昵称'
              value={ren}
              onChange={(e) => setRen(e.target.value)}
              required
          />
      </div>
      <div className='p-3 sm:col-span-2 bg-gray-100 dark:bg-gray-700 duration-500 rounded-xl'>
          <textarea    name="PINGLUN"  id="PINGLUN"  rows="3"
            className=' block w-full bg-white/30 dark:bg-black/100 duration-500 rounded-xl'
            placeholder='评论内容.这是notion自带评论, '
            value={pinglun}
            onChange={(e) => setPinglun(e.target.value)}
            required
          ></textarea>
      </div>
  <button  type="submit" className='sm:col-span-2  p-3 text-2xl   bg-gray-100 dark:bg-gray-700  hover:bg-gray-200 dark:hover:bg-gray-600 duration-500 rounded-xl  '>

  <p className='text-gray-400 ' >提交评论(notion自带评论 )</p>

  
  
  </button>

  </form>}
</>
}
export default Pinglun
