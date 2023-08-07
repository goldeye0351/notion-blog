import BLOG from '@/blog.config'
import PropTypes from 'prop-types'
import FormattedDate from '@/components/Common/FormattedDate'
import NotionRenderer from '@/components/Post/NotionRenderer'
import {EyeIcon,ArrowUpIcon,ThumbUpIcon,PencilIcon, DesktopComputerIcon, HeartIcon,ChatIcon} from '@heroicons/react/outline'
import ReadingProgress from '../ReadingProgress'
import Typed from "typed.js";
import { useEffect, useState } from "react";
import TableOfContents from './TableOfContents'
import WechatPay from '@/components/Post/WechatPay'
import Jumptocomment from '../JumpToComment'
import WavesArea from './WavesArea'
import { motion } from 'framer-motion'

export default function Content (props) {
  const { frontMatter, blockMap, pageTitle,prev,next } = props
  const [showPay, setShowPay] = useState(false)
  var zjk = frontMatter.up;
  useEffect(() => {
		new Typed('#typed', {
				strings: ["ai......",frontMatter.summary],
				typeSpeed: 50,
				backSpeed: 50,
				backDelay: 100,  
				smartBackspace: true,
				showCursor: true,
				loop: false,
				loopCount: 3
			  })})

  const dianzan = async (e) => {
    const slug=frontMatter.id;
    zjk++;
    const newup=zjk ;
    e.preventDefault();
    const res = await fetch('/api/dianzan', {
      method: 'PATCH',
      body: JSON.stringify({ slug,newup}),
    });
    // Success if status code is 201
    if (res.status === 201) {
      document.querySelector('#myupxiaopin').innerHTML = newup;
      document.querySelector('#myupdapin').innerHTML = newup;
      console.log('谢谢你的点赞.',newup)
    } else {
      console.log('出错了', { type: 'error' });
    }
    return newup;
  };

  return (<div>
  <div id="biaoti"  className=' flex flex-col justify-center'>
      <div className='font-bold text-3xl text-black dark:text-white flex justify-center mx-auto'>
        {pageTitle ? pageTitle : frontMatter.title}
      </div>
      <div 
      className=' text-black dark:text-white bg-gray-300  dark:bg-gray-600/50  ring-green-300/50 ring-2 p-3 m-8 rounded-xl'>
        <ChatIcon className=' inline-block h-6' />
        <span className='   ' id='typed' /> 
      </div>
      <nav className='flex mt-5 mb-10 items-start text-gray-500 dark:text-gray-400'>
        <div className='mr-2 mb-4 md:ml-0'>
          <FormattedDate date={frontMatter.date} />
        </div>

        
          <div className='flex flex-nowrap max-w-full overflow-x-auto article-tags'>
            {frontMatter.tags} 
          </div>
        

      </nav>

      <WavesArea />

  </div>
         
      
  
  <div className=' flex flex-row'>
 
    <article  id='postmain'  className='flex-none md:overflow-x-visible overflow-x-scroll w-full max-w-5xl '>
      <div className="-mt-4 relative">
        <NotionRenderer
          blockMap={blockMap}
          previewImages={BLOG.previewImagesEnabled}
          {...props}
        />
      </div>
      <div id="小屏几个" className=' fixed inset-y-[50%] right-0    xl:hidden'>
        <div className='group   bg-gray-300 dark:bg-gray-600 rounded-2xl flex justify-center '>
                        <ReadingProgress />
        </div>
        <div  className='group  w-full p-3  bg-gray-300 dark:bg-gray-600 rounded-2xl flex justify-center mx-auto '>
          <button id="xiaopindianzan"
            onClick={dianzan} data-umami-event="小屏点赞" 
            className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
          >
            {/*<ThumbUpIcon onClick={() => setShowPay((showPay) => !showPay)} className='w-6 h-6' />*/}
            <ThumbUpIcon className='w-6 h-6' />
            <span id="myupxiaopin" className=' inline-block'>{zjk}</span>

          </button>
        </div>
        <div className='group  w-full p-3  bg-gray-300 dark:bg-gray-600 rounded-2xl flex justify-center mx-auto '>
                      <Jumptocomment />
                </div>
      </div>  
    </article>
    <motion.div
             initial="hidden"
             animate="visible"
             transition={{ delay: 0.7, duration: 1.2 }}
             variants={{
               hidden: {
                 opacity: 0,
                 y: 100,
               },
               visible: {
                 opacity: 1,
                 y: 0,
               },
             }}
     id="sideright" className='w-56 p-3 hidden xl:block '>  
          
        <div className=' sticky top-16 '>
          
          < TableOfContents frontMatter={frontMatter}  blockMap={blockMap} pageTitle={pageTitle}/>
          <div id="大屏几个" className=' flex flex-row justify-between my-3 space-x-1'> 
              <div id="点赞"  className='group cursor-pointer  w-full p-1  bg-gray-300 dark:bg-gray-600 rounded-2xl flex justify-center mx-auto '>
                    <button id="dapindianzan"
                      onClick={dianzan} data-umami-event="大屏点赞" 
                      className='  hover:text-gray-400 dark:hover:text-gray-400'
                    >
                      {/*<ThumbUpIcon onClick={() => setShowPay((showPay) => !showPay)}  data-umami-event="点赞" className='w-6 h-6 inline-block mx-1 text-center   ' />*/}
                      <ThumbUpIcon className='w-6 h-6 inline-block mx-1 text-center   ' />
                      <span id="myupdapin" className=' inline-block'>{zjk}</span>

                    </button>
              </div>
              <div id="进度" className='group cursor-pointer  bg-gray-300 dark:bg-gray-600 rounded-2xl flex justify-center '>
                    <ReadingProgress />
              </div>
              <div id="我要评论" className='group cursor-pointer  w-full p-3  bg-gray-300 dark:bg-gray-600 rounded-2xl flex justify-center mx-auto '>
                    <Jumptocomment />
              </div>
          </div>
        </div>
    </motion.div>

  </div>
  {showPay && <WechatPay />}
</div>
  )
}

Content.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  pageTitle: PropTypes.string
}
