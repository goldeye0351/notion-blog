import Image from "next/image";
import { useEffect, useState } from 'react';
import FormattedDate from "../Common/FormattedDate";
import DaysAgo from "../Common/DaysAgo";
import md5 from 'md5'

function OnlyPinglun({post} ){
    const postid = post?.id||'home'
    const [comments, setComments] = useState([]);

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
  <div className=" overflow-scroll max-h-96 pl-36 text-sm    "> 
    <div id="comment" className="  mx-auto   w-full mt-3   ">
          <ol className=" w-full ">
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
                    <Image src={gravatarUrl} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-10 w-10 min-w-[40px]   '/>                    
              
              </div>
              <div id='右边主体'  className=" space-y-1 text-gray-200 flex flex-col w-full ">
                <div id='姓名' className=" font-extrabold text-lg text-blue-300 flex flex-row justify-between  ">
                  <div>{post.properties.Ren.rich_text[0].text.content }</div>
                  <div className=" text-sm text-gray-200">{DaysAgo(Date.parse(post.created_time)) }</div>

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
                
              </div>
              </li>
            })}
          </ol>
    </div> 
  </div>  
</div>
}
export default OnlyPinglun
