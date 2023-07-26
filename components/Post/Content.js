import BLOG from '@/blog.config'
import PropTypes from 'prop-types'
import FormattedDate from '@/components/Common/FormattedDate'
import TagItem from '@/components/Common/TagItem'
import NotionRenderer from '@/components/Post/NotionRenderer'
import {EyeIcon} from '@heroicons/react/outline'
import Typed from "typed.js";
import { useEffect } from "react";

export default function Content (props) {
  const { frontMatter, blockMap, pageTitle,prev,next } = props
  
  useEffect(() => {
		new Typed('#typed', {
				strings: [frontMatter.summary],
				typeSpeed: 50,
				backSpeed: 50,
				backDelay: 100,  
				smartBackspace: true,
				showCursor: true,
				loop: false,
				loopCount: 3
			  })})

  return (
    <article className='flex-none md:overflow-x-visible overflow-x-scroll w-full max-w-5xl '>

      <h1 className='font-bold text-3xl text-black dark:text-white'>
        {pageTitle ? pageTitle : frontMatter.title}
      </h1>

      <div className=' text-black dark:text-white bg-gray-300  dark:bg-gray-600/50  ring-green-300/50 ring-2 p-3 m-8 rounded-xl'>
        AI摘要:<span className='inline-block    ' id='typed' /> 

      </div>

        <nav className='flex mt-5 mb-10 items-start text-gray-500 dark:text-gray-400'>
          <div className='mr-2 mb-4 md:ml-0'>
            <FormattedDate date={frontMatter.date} />
          </div>
          {frontMatter.tags && (
            <div className='flex flex-nowrap max-w-full overflow-x-auto article-tags'>
              {frontMatter.tags.map((tag) => (
                <TagItem key={tag} tag={tag} />
              ))}
            </div>
          )}
        </nav>

      <div className="-mt-4 relative">
        <NotionRenderer
          blockMap={blockMap}
          previewImages={BLOG.previewImagesEnabled}
          {...props}
        />
      </div>

    </article>
  )
}

Content.propTypes = {
  frontMatter: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  pageTitle: PropTypes.string
}
