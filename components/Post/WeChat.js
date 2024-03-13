import Image from "next/image";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FormattedDate from "../Common/FormattedDate";
import DaysAgo from "../Common/DaysAgo";
import { lang } from '@/public/lang'
import md5 from 'md5'
import IpComponent from "../IpComponent";
import { TgIcon,PicIcon } from "@/Icon/Icon";

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
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState(null);
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    };
  
    const handleUpload = () => {
      setUploading(true);
      setUploadError(null);
  
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('https://fandai.51xmi.com', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Upload failed. Please try again.');
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.error) {
            throw new Error(data.error);
          }
          const src = 'https://pichub.51xmi.com' + data[0].src;
          setUploadedUrl(src);
          setLinkTo(src)
        })
        .catch((error) => {
          setUploadError(error.message || 'Upload failed. Please try again.');
        })
        .finally(() => {
          setUploading(false);
        });
    };
  
    useEffect(() => {
      if (file) {
        handleUpload(file);
      }
    }, [file]);

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
            <div className=" flex flex-row space-x-2 justify-end">
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
                  <div className=' text-gray-200 flex mx-auto flex-col  justify-center items-center content-center space-y-2 w-full '>
                    <div className='bg-gray-700 dark:bg-gray-800  p-2 rounded-2xl flex justify-center  w-full overflow-hidden' >
                    <button id="upload" className=" mx-auto w-full flex justify-center items-center content-center" type="button" title="Supported formats: Images, videos, GIFs">
                      {!file && <span><PicIcon className={' w-6 '} /></span>}
                      {uploadedUrl && <span ><PicIcon className={' w-6 inline-block '} />🥳</span> }
                      {uploading && <div>Uploading...</div>}
                      {uploadError && <div>{uploadError}</div>}
                      <input id="fileInput" onChange={handleFileChange} type="file" className=' cursor-pointer  ' name="file" accept="image/*, video/*" />
                    </button>        
                    </div>
                  </div>
                </div>


              <button id='usubmit' type="submit" className='  text-gray-200  p-3 text-xl  bg-gray-700 dark:bg-gray-800  hover:bg-gray-500 dark:hover:bg-gray-600 duration-300 rounded-xl  '>
                <TgIcon className=" w-6 rotate-[222deg]  " />
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
