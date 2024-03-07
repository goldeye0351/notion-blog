import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FormattedDate from "../Common/FormattedDate";
import DaysAgo from "../Common/DaysAgo";
import { lang } from '@/public/lang'
import md5 from 'md5'
import IpComponent from "../IpComponent";
import { TgIcon } from "@/Icon/Icon";

function WeChat({post,xie,email} ){
    const postid = post?.id
    const title = post?.title
    const { locale } = useRouter()
    const t = lang[locale]
    const [ren, setRen] = useState('');
    const [comments, setComments] = useState([]);
    const [pinglun, setPinglun] = useState('');
    const [linkTo, setLinkTo] = useState('');
    const visitorIp = IpComponent();    
    const addcomment = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/pinglunapi', {
          method: 'POST',
          body: JSON.stringify({ postid,ren,pinglun,title,email,visitorIp,linkTo }),
        });
        if (res.status === 201) {
          fetchComments(); // 在提交评论成功后再次获取评论数据
          window.scrollTo({ top: document.getElementById('comment').offsetTop, behavior: 'smooth' })
          //清空输入框中的内容
          setRen('');          setPinglun('');          setLinkTo('');
        } else {
          alert('errer 信号不好, 出错了')    
        }
      };

      useEffect(() => {
        fetchComments(); // 在组件加载时获取评论数据
      }, []);
    
      async function fetchComments() {
        try {
          const tgUrl = '/api/pinglunapiget';
          const response = await fetch(tgUrl, {
            method: 'POST',
            body: JSON.stringify({ postid }),
          });
          if (response.ok) {
            const data = await response.json();
            if (data.status === 'Success') {                        
              setComments(data.data.results); 
            } else {
              console.error('Failed to fetch comments');
            }
          } else {
            console.error('Failed to fetch comments');
          }
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }
return< div className=" flex  lg:flex-row flex-col justify-center items-center content-center" >
   {xie && <div id='输入框' key='subbox' className=" lg:fixed lg:right-3 lg:bottom-0 lg:flex flex-row lg:justify-end justify-center   w-full  text-gray-200">
      <form onSubmit={addcomment} className=' relative w-full max-w-md  mx-auto p-3 lg:p-0 lg:mx-0 '>

          <div id='CommentBigBox' className='  p-3 w-full bg-gray-700 dark:bg-gray-800  rounded-xl'>
              <textarea    name="PINGLUN"  id="PINGLUN"  rows="9"
                className=' block italic p-1 w-full bg-gray-800 dark:bg-gray-900 rounded-xl'
                placeholder={t.LAYOUT.COMMENT_MAIN}
                value={pinglun}
                onChange={(e) => setPinglun(e.target.value)}
                required
              ></textarea>
          </div>

          <div id='3smallbox' className=" p-3 absolute bottom-5 right-3 w-full max-w-xs px-5  ">
            <div className=" flex flex-row space-x-3 justify-end">
              <div className=" flex flex-col w-3/4 space-y-1 "> 
                  <div id='uname' className=' w-full p-1  bg-gray-700 dark:bg-gray-800 rounded-xl flex flex-col justify-center duration-300 ' >
                      <input id="REN"  name="REN"
                          type="text" className='  italic p-1 block  duration-300 bg-transparent '
                          placeholder={t.LAYOUT.COMMENT_NAME}
                          value={ren}
                          onChange={(e) => setRen(e.target.value)}
                          required
                      />
                  </div>
                <div id='piclink' className=' w-full p-1  bg-gray-700 dark:bg-gray-800 rounded-xl flex flex-col justify-center duration-300 ' >
                  <input id="linkTo"  name="tolink" 
                      type="text" className='  italic p-1 block  duration-300 bg-transparent '
                      placeholder={t.LAYOUT.COMMENT_TO}
                      value={linkTo}
                      onChange={(e) => setLinkTo(e.target.value)}
                  />
                </div>
              </div>

              <button id='usubmit' type="submit" className=' w-1/4 text-gray-200  p-1 text-xl  bg-gray-700 dark:bg-gray-800  hover:bg-gray-500 dark:hover:bg-gray-600 duration-300 rounded-xl  '>
                <TgIcon className=" w-full h-5 rotate-[222deg]  " />
              </button>
            </div>
            
              
          </div>
      </form>
  </div>}
  <div id='展示框' key='dispbox' className=" mx-auto  "> 
    <div id="comment" className="  mx-auto  mt-3   ">
          <ol className=" ">
            {comments.map((post) => {
              const myemail = post.properties.Email.email;
              const tolink= post.properties.LinkTo.rich_text[0]?.text.content;
              const parts = myemail ? myemail.split('@'): '';
              const part0 = parts[0];
              const part1 = parts[1];
              const emailHash = myemail ? md5(myemail.trim().toLowerCase()) : '';
              const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;

              return<li key={post.id} className='   my-3 flex-row flex space-x-3'>
                <div id='左边头像' className="  ">
                      <Image src={gravatarUrl} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-16 w-16 min-w-[64px]   '/>                    
                </div>
                <div id='右边主体'  className=" space-y-1 text-gray-200 flex flex-col w-80 ">
                  <div id='姓名' className=" font-extrabold text-lg text-blue-300  ">
                    {post.properties.Ren.rich_text[0].text.content }
                  </div>
                  <article id='主体文字' className="  break-words italic  ">
                    {post.properties.Text.rich_text[0].text.content }
                  </article>
                  <div id='图' >
                  {tolink && tolink.slice(-3) === 'mp4' &&
                    <video controls>
                      <source src={tolink} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  }
                  {tolink && tolink.slice(-3) !== 'mp4' &&
                    <Image src={tolink} alt={tolink} width={384} height={384} className="rounded-sm" />
                  }
                  </div>
                  <div className=" flex flex-grow w-full justify-between ">                   
                    <div>{DaysAgo(Date.parse(post.created_time)) }</div>
                    <div><FormattedDate date={post.created_time} /></div>
                  </div>
                  
                </div>
              </li>
            })}
          </ol>
    </div> 
  </div>  

</div>
}
export default WeChat
