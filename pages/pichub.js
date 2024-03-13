import { useState,useEffect } from 'react';
import CopyButton from '@/components/CopyButton';
import { PicIcon } from '@/Icon/Icon';
import BLOG from '@/blog.config';
import Container from '@/components/Container';
export default function Pichub() {
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

  return (<Container  title={`${BLOG.title} 免费图床`} description={BLOG.description}  ogimage={BLOG.pyqog} className=' m-auto min-h-[50vh]  flex flex-col justify-center   ' >
    <div className=' text-gray-200 flex mx-auto flex-col  justify-center items-center content-center space-y-2 w- '>
      <div className='bg-gray-700 dark:bg-gray-800 p-2 rounded-2xl flex justify-center  w-full overflow-hidden' >
      <button id="upload" className=" mx-auto w-full " type="button" title="Supported formats: Images, videos, GIFs">
        {!file &&<span className=" text-green-400 text-2xl flex flex-col justify-center items-center  "><PicIcon className={' w-12  '} />Drag & Drop or <u><i>Browse</i></u></span>    }   
        {uploadedUrl &&  <img src={uploadedUrl} alt="Uploaded Image" className=' rounded-xl border-2 border-green-400' />}
        {uploadedUrl && <span >🥳</span> }
        {uploadedUrl && <CopyButton text={uploadedUrl}  />      }
        {uploading && <div>Uploading...</div>}
        {uploadError && <div>{uploadError}</div>}
        <input id="fileInput" onChange={handleFileChange} type="file" className=' cursor-pointer  ' name="file" accept="image/*, video/*" />
      </button>        
      </div>
    </div>
  </Container>
  );
}
