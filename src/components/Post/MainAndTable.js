'use client'

import NotionPage from './notion-page'
import Mulu from './TableOfContents'
import { motion } from 'framer-motion'
import Lastpost from '../blog/lastpost'
export default function MainAndTable (props) {
  const { recordMap,tableOfContent,allposts } = props  
  return (<>
  <div id= 'main'className=' flex flex-row'>
    <article  id='postmain'  className='lg:w-9/12 w-full' >
      <div className="-mt-4 p-3 text-white  dark:text-gray-200 ">
          <NotionPage recordMap={recordMap}/>
      </div>
    </article>

    <div id='stickyright' className=' hidden lg:w-3/12 lg:flex p-3 ml-auto '>
      <motion.div  id="sideright" className='  sticky w-full top-16  '
              initial="hidden" animate="visible"   transition={{ delay: 0.7, duration: 1.2 }}
              variants={{hidden:{opacity:0,y:100,},visible:{ opacity:1,y:0,},}}> 
          <div className=' sticky top-36 w-full h-max'>
            <Mulu tableOfContent={tableOfContent} />

            <div key="last文章" id='Tuijian' className=' overflow-x-hidden bg-gray-700 duration-300 dark:bg-gray-800 rounded-xl  p-3 my-3'>
                <Lastpost posts={allposts} />
            </div>

          </div>
      </motion.div>
    </div>
  </div>
</>
  )
}