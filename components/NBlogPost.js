import BLOG from '@/blog.config'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'
import DaysAgo from './Common/DaysAgo'
import React from 'react'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { ChatIcon, EyeIcon, HeartIcon} from '@/Icon/Icon'
import { lang } from '@/public/lang'
import IpComponent from "./IpComponent";
import { TgIcon,PicIcon } from "@/Icon/Icon";
import { useUser,SignInButton } from "@clerk/nextjs";
const variants = {
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4,
    }
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5,
    }
  },
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4,
    }
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: 'top',
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0,
    }
  },
}
const BlogPost = ({ index , post,resdata,allpls }) => {
  const [xie,setXie]=useState(false);
  const toggleXie = () => {      setXie(prevState => !prevState);    };
  const mypls= allpls.filter(pl => pl.title === post.id)
    
    const {user} =useUser()
    const postid = post?.id
    const title = post?.title
    const { locale } = useRouter()
    const t = lang[locale]
    const [ren, setRen] = useState('');
    const [up,setUp]=useState(`${mypls.length}`)
    const [pinglun, setPinglun] = useState('');
    const email = user?.primaryEmailAddress.emailAddress;
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
    }, [file]);

    const addcomment = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/pinglunapi', {
          method: 'POST',
          body: JSON.stringify({ postid,ren,pinglun,title,email,visitorIp,linkTo }),
        });
        if (res.status === 201) {
          setRen('');          setPinglun('');          setLinkTo('');          setXie(false); 
          const upaddone = parseInt(up) + 1;          setUp(upaddone)
        } else {
          alert('errer 信号不好, 出错了')    
        }
      };
  useEffect(() => {
    const updateDOM = () => {
      for (var value of resdata) {
        const xslug= value.x.substr(1);
        //console.log('slug',xslug)
        try{
          if (value.x.substr(1).length > 0) {
            var demo = document.getElementById(xslug);
            if (demo) {
              demo.innerHTML = value.y;
            }
          }
        }catch (error) {
          console.log(error);
        }
      }
    };
    updateDOM();
  }, [resdata]);
  return (
<motion.div variants={variants} key={"a"+post.id} className=' relative my-3 border-b border-gray-600 text-gray-200  '>
  <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false} data-umami-event={post.title} >
    <motion.div key={post.id} initial="hidden" whileInView="visible"
                transition={{ delay: 0, duration: 1 }}
                variants={{
                 hidden: { opacity: 0,y: 100,scale:0.8 },
                 visible: { opacity: 1,y: 0,scale:1 },
                }}>  
        
      <article
          className='   relative m-3  cursor-pointer rounded-xl p-5  overflow-hidden hover:scale-105  duration-300'
        >
         <div 
           className="group  justify-between  rounded-xl   " >
            <div   className=' w-full h-full '   >
                <div className='   text-lg md:text-xl font-medium mb-2  backdrop-blur-sm justify-between flex duration-300 '>
                  {post.title}
                  <div className=' font-light text-base '>
                  {DaysAgo(post.date)}
                  </div>  
                </div>
                {post.Link && <Image src={post.Link} alt={post.title} width={10000} height={300} />}
                <span className=' flex font-light justify-between  '>
                  <FormattedDate date={post.date} />
                </span>
                <div className=' font-light leading-8 '>{post.summary}</div>
                {/*<Image src={post?.page_cover}  alt={post.title} fill className=' absolute top-0 left-0  rounded-xl opacity-100 group-hover:opacity-10  translate-x-[100%] duration-500  group-hover:translate-x-0'/>*/}
             </div>
        </div>
      </article>
    </motion.div>
  </Link>

  <div className='   flex justify-end m-2 '>
    <emoji-reaction endpoint="https://up.51xmi.com" reactTargetId={post.title}  ></emoji-reaction>  
    <EyeIcon className=' mx-1  w-6 h-6 inline-block'/><span id={post.slug} ></span>
    <div className=' relative '>
      <div onClick={toggleXie}  >
        <ChatIcon className=' mx-1 w-6 h-6 inline-block ' />
        <div className=' inline-block   '>{up} </div>
      </div>
    </div>
  </div>
  <div className='  justify-end flex z-20  '>

    < div className={`${xie  ? 'w-full h-full' : 'w-0 h-0'} duration-500 ease-in  overflow-hidden `}>
    {!user && 
    <div className=" flex mx-auto justify-center italic text-2xl text-green-500 p-3 ">
      <SignInButton>{`😇${t.BLOG.LOGIN2COM}`}</SignInButton>
    </div>
      }
    {user && 
    <form onSubmit={addcomment} className=' relative w-full  mx-auto px-8 text-gray-200 '>

        <div id='CommentBigBox' className='  w-full  bg-gray-700 dark:bg-gray-800  rounded-xl border border-green-400'>
            <textarea    name="PINGLUN"  id="PINGLUN"  rows="3"
              className=' block italic w-full bg-gray-800 dark:bg-gray-900 rounded-xl p-2 '
              placeholder={t.LAYOUT.COMMENT_MAIN}
              value={pinglun}
              onChange={(e) => setPinglun(e.target.value)}
              required
            ></textarea>
        </div>

        <div id='3smallbox' className=" absolute bottom-3  right-6  w-full px-5  ">
          <div className=" flex flex-row space-x-1 justify-end">
            <div title='name' id='uname' className=' w-24 p-1  bg-gray-700 dark:bg-gray-800 rounded-xl flex flex-col justify-center duration-300 ' >
                <input id="REN"  name="REN" data-umami-event="评论"
                    type="text" className='  italic px-1  mx-1 block  duration-300 bg-transparent '
                    placeholder={t.LAYOUT.COMMENT_NAME}
                    value={ren}
                    onChange={(e) => setRen(e.target.value)}
                    required
                />
            </div>
            <div title='piclink' id='piclink' className=' bg-gray-700 dark:bg-gray-800 rounded-xl lg:flex flex-col justify-center duration-300 ' >
              <div className=' text-gray-200 flex mx-auto flex-col  justify-center items-center content-center space-y-2 w-full '>
                <div className='bg-gray-700 dark:bg-gray-800 p-2 rounded-2xl flex justify-center  w-full overflow-hidden' >
                <button id="upload" className=" mx-auto w-full flex justify-center items-center content-center" type="button" title={uploadedUrl}>
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
    }
    </div>
        
  </div>
</motion.div>
  )
}

export default BlogPost