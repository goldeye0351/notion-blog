import { useState,useEffect } from 'react';
import CopyButton from '@/components/CopyButton';
import { PicIcon } from '@/Icon/Icon';
import BLOG from '@/blog.config';
import Container from '@/components/Container';
import { getAllPics } from '@/lib/notion';
import Image from 'next/image';
import DaysAgo from '@/components/Common/DaysAgo';
import IpComponent from '@/components/IpComponent';
export async function getStaticProps() {
  const pics = await getAllPics()
  return {
    props: {
    pics,
    },
    revalidate: 1
  }
}

export default function Pichub({pics}) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [postid, setPostid] = useState('');
  const [linkTo, setLinkTo] = useState('');
  const visitorIp = IpComponent();    


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
        setLinkTo(src);
        setPostid(data[0].src)
      })
      .catch((error) => {
        setUploadError(error.message || 'Upload failed. Please try again.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const addpic = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/pic', {
      method: 'POST',
      body: JSON.stringify({ postid,visitorIp,linkTo }),
    });
    if (res.status === 201) {
      //alert('图片已增加,等待1秒后刷新')  
      setTimeout(() => {
        location.reload(); // 刷新页面
      }, 2000); // 等待2秒后刷新
    } else {
      alert('errer 信号不好, 出错了')    
    }
  };

  useEffect(() => {
    if (file) {
      handleUpload(file);
    }
  }, [file]);

  return (<Container  title={`${BLOG.title} 免费图床`} description={BLOG.description}  ogimage={BLOG.pyqog} className=' m-auto min-h-[50vh]  flex flex-col justify-center   ' >
    <div className=' text-gray-200 flex mx-auto flex-col  justify-center items-center content-center space-y-2 w- '>
      <div className='bg-gray-700 dark:bg-gray-800 p-2 rounded-2xl flex justify-center  w-full overflow-hidden' >
      <button id="upload" className=" mx-auto w-full " type="button" title="Supported formats: Images, videos, GIFs">
        {!file &&<span className=" text-green-400 text-2xl flex flex-col justify-center items-center  "><PicIcon className={' w-12  '} />Drag & Drop or <u><i>Browse</i></u></span>    }   
        <input id="fileInput" onChange={handleFileChange} type="file" className=' cursor-pointer  ' name="file" accept="image/*, video/*" />
      </button>   
      </div>
      {uploadedUrl &&  <img src={uploadedUrl} alt="Uploaded Image" className=' rounded-xl border-2 border-green-400' />}
        {uploadedUrl && <span >🥳</span> }
        {uploadedUrl && 
        <button onClick={addpic} >
          <CopyButton text={uploadedUrl}  />
        </button>
        }
        {uploading && <div>Uploading...</div>}
        {uploadError && <div>{uploadError}</div>}
    </div>
    <>
    <div id='展示框' key='dispbox' className=" mt-3 mx-auto flex "> 
              <ol className='flex flex-wrap mx-auto justify-center  items-center  p-2    ' >
                {pics.map((post) => {
                  const tolink= post.URL;
                  return<li key={post.id} className=' w-56 flex-col flex justify-center items-center    '>
                        <Image src={tolink}  alt='51xmi免费图床'  width={1000}  height={1000} className=' p-2 rounded-2xl  '/>
                        <div>{post.Name}</div>
                        <div>{DaysAgo(post.date)}</div>
                  </li>
                })}
              </ol>
      </div>  
    </>
  </Container>
  );
}
