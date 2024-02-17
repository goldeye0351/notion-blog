import { useState, useEffect } from 'react';
import { lang } from '@/public/lang'
import { useRouter } from 'next/router'
import FormattedDate from '@/components/Common/FormattedDate';
import Image from 'next/image';
import adminimg from '@/public/favicon.svg'
import guestimg from '@/public/comment.jpg'
import { PaperAirplaneIcon } from '@heroicons/react/outline';
export default function OfficeComment({ postid}) {
  const { locale } = useRouter()
  const t = lang[locale]
  const [comments, setComments] = useState([]);
  const addcomment = async (event) => {
    event.preventDefault()
    const adUrl = '/api/defaultaddcomment'
    const res = await fetch(adUrl, {
      body: JSON.stringify({
        postid:postid,
        comment: event.target.message.value
      }),
      method: 'POST'
    })
    const result = await res.json()
    const status = result.status
    console.log('status:', status)
    if (status === 'Success') {
      fetchComments(); // 在提交评论成功后再次获取评论数据
    } else {
      alert("Error")
    }
  }
  
  useEffect(() => {
    fetchComments(); // 在组件加载时获取评论数据
  }, []);

  async function fetchComments() {
    try {
      const tgUrl = `/api/defaultgetcomments?postid=${postid}`;
      const response = await fetch(tgUrl, {
        method: 'GET'
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 'Success') {
          const sortedComments = data.data.results.sort((a, b) => {
            return new Date(b.created_time) - new Date(a.created_time);
          });

          const formattedComments = sortedComments.map(comment => {
            // 提取评论对象中的相关信息
            const id = comment.id;
            const user = {
              id: comment.created_by.id,
            };
            const text = comment.rich_text[0]?.plain_text || '';
            const isOwner = user.id === '263b958d-7922-4599-b11b-ec10ad8a397f'; // 根据用户ID判断是否为评论的拥有者
            const created_time = comment.created_time
          
            // 构造新的评论对象
            const formattedComment = {
              id: id,
              user: user,
              text: text,
              isOwner: isOwner,
              time: created_time,
            };
          
            return formattedComment;
          });
                    
          setComments(formattedComments); // 将按照创建时间倒序排列的评论数组设置到状态中
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

  return (
    <div>
        
        <form onSubmit={addcomment} className=' max-w-screen-md grid grid-cols-8  gap-3  mx-auto relative  '>

          <div className='p-3 col-span-8 bg-gray-200 dark:bg-gray-700 duration-500 rounded-xl'>
              <textarea    name='message' id='message'  rows="3"
                className=' block italic p-1 w-full bg-white/30 dark:bg-black/100 duration-500 rounded-xl '
                placeholder={t.LAYOUT.COMMENT_MAIN}
                required
              ></textarea>
          
            <button  type="submit" className=' absolute right-4 bottom-4 w-16 justify-center flex  text-gray-400 bg-gray-200 dark:bg-gray-700  hover:bg-gray-200 dark:hover:bg-gray-600 duration-500 rounded-xl  '>
              <PaperAirplaneIcon className=' rotate-45 h-12 w-12 p-2 '/>
            </button>
          </div>
        </form>
    <div id="officecomment" className="  mx-auto  flex flex-row justify-center">
      <ul >
        {comments?.map(comment => (
          <li key={comment.id} className='  m-3 flex  w-[90vw] max-w-screen-md  even:italic  '  >
                <div className=" justify-center flex-col flex text-center duration-300 ">
                {comment.isOwner?(
                  <Image src={adminimg} alt={comment.text} width={100}  height={100} priority  className=' rounded-full h-12 w-12 mr-3 hover:animate-pulse '/>
                ):(
                  <Image src={guestimg} alt={comment.text} width={100}  height={100} priority  className=' rounded-full h-12 w-12 mr-3 hover:animate-pulse '/>
                 )}
                </div>
                <div className=' p-3 bg-gray-200  dark:bg-gray-700 rounded-2xl  text-sm w-full ring-1 ring-white/30    '>
                  {comment.text}
                  <hr />
                  <div className=" flex-row flex justify-between ">
                  {comment.isOwner?(
                  <div className=" font-extrabold text-lg ">Admin</div>
                  ):(
                  <div className=" font-extrabold text-lg ">Niming</div>
                  )}
                    <FormattedDate  date={comment.time} />
                  </div>
                </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
