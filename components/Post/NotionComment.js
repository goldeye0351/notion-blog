import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FormattedDate from "../Common/FormattedDate";
import { lang } from '@/public/lang'
import md5 from 'md5'
import IpComponent from "../IpComponent";
import { PaperAirplaneIcon } from "@heroicons/react/outline";

function Pinglun({post} ){
    const postid = post.id||'home'
    const { locale } = useRouter()
    const t = lang[locale]
    const [ren, setRen] = useState('');
    const [comments, setComments] = useState([]);
    const [pinglun, setPinglun] = useState('');
    const [email, setEmail] = useState('');
    const visitorIp = IpComponent();    
    const title = post.title||'Home'
    const addcomment = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/pinglunapi', {
          method: 'POST',
          body: JSON.stringify({ postid,ren,pinglun,title,email,visitorIp }),
        });
        if (res.status === 201) {
          fetchComments(); // 在提交评论成功后再次获取评论数据
          window.scrollTo({ top: document.getElementById('commentHome').offsetTop, behavior: 'smooth' })
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
return< div>
        
  <form onSubmit={addcomment} className=' w-full max-w-screen-md    mx-auto '>

      <div className='p-3 w-full bg-gray-200 dark:bg-gray-700 duration-300 rounded-xl'>
          <textarea    name="PINGLUN"  id="PINGLUN"  rows="3"
            className=' block italic p-1 w-full bg-white/30 dark:bg-black/100 duration-300 rounded-xl'
            placeholder={t.LAYOUT.COMMENT_MAIN}
            value={pinglun}
            onChange={(e) => setPinglun(e.target.value)}
            required
          ></textarea>
      </div>

      <div className=" flex space-x-1 my-1">
      <div className=' w-1/4 p-1  bg-gray-200 dark:bg-gray-700 rounded-xl flex flex-col justify-center duration-300 ' >
          <input id="REN"  name="REN"
              type="text" className='  italic px-1  mx-1 block  duration-300 bg-transparent '
              placeholder={t.LAYOUT.COMMENT_NAME}
              value={ren}
              onChange={(e) => setRen(e.target.value)}
              required
          />
      </div>
      <div className=' w-1/2 p-1  bg-gray-200 dark:bg-gray-700 rounded-xl flex flex-col justify-center duration-300 ' >
          <input id="EMAIL"  name="EMAIL" autoComplete="email"
              type="text" className='  italic px-1  mx-1 block  duration-300 bg-transparent '
              placeholder={t.LAYOUT.COMMENT_EMAIL}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
      </div>
      <button  type="submit" className=' w-1/4 text-gray-400  p-1 text-xl  bg-gray-200 dark:bg-gray-700  hover:bg-gray-200 dark:hover:bg-gray-600 duration-300 rounded-xl  '>
      <PaperAirplaneIcon className=" w-16 h-5 -rotate-45" />
      </button>
      </div>
  </form>
  <div className=" overflow-scroll h-96"> 
    <div id="commentHome" className="  mx-auto  max-w-screen-md w-full mt-3   ">
          <ol className=" w-full">
            {comments.map((post) => {
              const myemail = post.properties.Email.email;
              const parts = myemail ? myemail.split('@'): '';
              const part0 = parts[0];
              const part1 = parts[1];
              const emailHash = myemail ? md5(myemail.trim().toLowerCase()) : '';
              const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;


              return<li key={post.id} className=' flex-grow  even:italic space-y-1 my-1 '>

                
                <div className=' bg-gray-200  dark:bg-gray-700 rounded-xl p-1 flex-col   '>
                  <article className="  break-words ">
                  {post.properties.Text.rich_text[0].text.content }
                  </article>
                  <hr />
                  <div className=" flex-row flex justify-between ">
                    <div>
                      <Image src={gravatarUrl} alt="Gravatar" width={50}  height={50} priority  className=' inline-block  rounded-full h-5 w-5 hover:animate-pulse   '/>
                      <div className=" font-extrabold text-lg inline-block ">{post.properties.Ren.rich_text[0].text.content } </div>

                    </div>
                    <FormattedDate  date={post.created_time} />
                  </div>
                </div>
              </li>
            })}
          </ol>
    </div> 
  </div>  
</div>
}
export default Pinglun
