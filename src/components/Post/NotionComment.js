'use client'
import Image from "next/image";
import BLOG from "@/blog.config";
import { useEffect, useState } from 'react';
import { sha256 } from "js-sha256";
import { TgIcon,PicIcon } from "@/Icon/Icon";
import styles from './comment.module.css'
import { useUser } from '@clerk/nextjs';
function Pinglun({post,mypls,ip,className} ){
    const postid = post?.id
    const title = post?.title
    const {user} = useUser()
    const useremail=user?.primaryEmailAddress?.emailAddress
    const slug = `${BLOG.link}/${post.slug}`
    const apiUrlget = '/api/pinglunapiget'
    const [ren, setRen] = useState('');
    const [comments, setComments] = useState(mypls);
    const [pinglun, setPinglun] = useState('');
    const [email, setEmail] = useState(useremail);
    const [linkTo, setLinkTo] = useState('');
    const visitorIp = ip;   
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
  
      fetch('https://pichub.51xmi.com/upload ', {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);
    
    const apiUrl = '/api/pinglunapi'
    
    const addcomment = async (e) => {
        e.preventDefault();
        const res = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({ postid,ren,pinglun,title,email ,linkTo,visitorIp}),
        });
        if (res.status === 200) {
          //window.scrollTo({ top: document.getElementById('comment').offsetTop, behavior: 'smooth' })

          fetchComments(); // 在提交评论成功后再次获取评论数据

          const tgUrl = '/api/pltelme'
        const res = await fetch(tgUrl, {
          body: JSON.stringify({ren,email,pinglun,slug}),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
                    //清空输入框中的内容
                    setRen('');          setPinglun('');          setLinkTo('');
        } else {
          alert('errer 信号不好, 出错了')    
        }
      };
    

      //useEffect(() => {        fetchComments();       }, []);
    
      async function fetchComments() {
        try {
          const response = await fetch(apiUrlget, {
            method: 'POST',
            body: JSON.stringify({ postid }),
          });
          if (response.ok) {
            const data = await response.json();
            setComments(data.results); 
          } else {
            console.error('Failed to fetch comments');
          }
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }
return< div className="  z-40  w-96 h-screen ">

  <form onSubmit={addcomment} className={`${className} relative   md:p-0  mx-auto text-gray-200  w-96`}>

      <div id='CommentBigBox' className='  p-3 w-full bg-gray-700 dark:bg-gray-800  rounded-xl'>
          <textarea    name="PINGLUN"  id="PINGLUN"  
            className=' block italic p-1 w-full bg-gray-800 dark:bg-gray-900 rounded-xl min-h-24 '
            placeholder={BLOG.commentText}
            value={pinglun}
            onChange={(e) => setPinglun(e.target.value)}
            required
          ></textarea>
      </div>

      <div id='3smallbox' className=" absolute bottom-8 md:bottom-5  right-1 md:right-0 w-full max-w-xs px-5  ">
        <div className=" flex flex-row space-x-1 justify-end">
          <div title='name' id='uname' className=' w-16 p-1  bg-gray-700 dark:bg-gray-800 rounded-xl flex flex-col justify-center duration-300 ' >
              <input id="REN"  name="REN" data-umami-event="评论"
                  type="text" className='  italic px-1  mx-1 block  duration-300 bg-transparent '
                  placeholder="Hi"
                  value={ren}
                  onChange={(e) => setRen(e.target.value)}
                  required
              />
          </div>
          <div title='email' id='uemail' className=' w-16 p-1  bg-gray-700 dark:bg-gray-800 rounded-xl flex flex-col justify-center duration-300 ' >
              <input id="Email"  name="Email" data-umami-event="评论"
                  type="text" className='  italic px-1  mx-1 block  duration-300 bg-transparent '
                  placeholder="@"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </div>
          <div title='piclink' id='piclink' className=' bg-gray-700 dark:bg-gray-800 rounded-xl lg:flex flex-col justify-center duration-300 ' >
            <div className=' text-gray-200 flex mx-auto flex-col  justify-center items-center content-center space-y-2 w-full '>
              <div className='bg-gray-700 dark:bg-gray-800 p-2 rounded-2xl flex justify-center  w-full overflow-hidden' >
              <button id="upload" 
              className={`${styles.myupload} mx-auto w-full flex justify-center items-center content-center `}
               type="button" title={uploadedUrl}>
                {!file && <span><PicIcon className={' h-6 '} /></span>}
                {uploadedUrl && <span ><PicIcon className={' h-6 inline-block '} />🥳</span> }
                {uploading && <div>Uploading...</div>}
                {uploadError && <div>{uploadError}</div>}
                <input id="fileInput" onChange={handleFileChange} type="file" className=' cursor-pointer  ' name="file" accept="image/*, video/*" />
              </button>
              </div>
            </div>
          </div>
          <button id='usubmit' type="submit" data-umami-event='点击评论' className='  text-gray-200  p-1 text-xl  bg-gray-700 dark:bg-gray-800  hover:bg-gray-500 dark:hover:bg-gray-600 duration-300 rounded-xl  '>
            <TgIcon className=" w-8 h-5 rotate-[222deg]  " />
          </button>
        </div>
      </div>
  </form>
  
  <div className=" overflow-y-scroll   w-96  " > 
    <div id="comment" className="  mx-auto   mt-3 ">
          <ol className=" w-96 ">
            {comments?.map((post) => {
                const myemail = post.properties?.Email.email || post.Email;
                const tolink= post.properties?.Link.url || post.link ? post.link: "" ;
                const date2=post.properties?.date.date.start.substring(0,10) || post.date;
                const parts = myemail ? myemail.split('@') : '';
                const part0 = parts[0];
                const part1 = parts[1];
                const emailHash = myemail ? sha256(myemail.trim().toLowerCase()) : '';
                const gravatarUrl = part1 === 'qq.com' ? `http://q1.qlogo.cn/g?b=qq&nk=${part0}&s=100`:`https://www.gravatar.com/avatar/${emailHash}` ;
  
  
                return<li key={post.id} className='   my-3 flex-row flex space-x-3'>
                <div id='左边头像' className="  ">
                      <Image src={gravatarUrl} alt="Gravatar" width={50}  height={50} priority  className='   rounded-lg h-12 w-12 min-w-[48px]   '/>                    
                </div>
                <div id='右边主体'  className=" space-y-1 text-gray-200 flex flex-col w-full ">
                  <div id='姓名' className=" font-extrabold text-lg text-blue-300  ">
                    {post.properties?.vip.rich_text[0].text.content  || post.vip  }
                  </div>
                  <div id='主体文字' className="  italic max-w-80 overflow-x-hidden whitespace-pre-wrap  ">
                    {post.properties?.summary.rich_text[0].text.content || post.summary }
                  </div>
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
                    <div>{date2} </div>
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
