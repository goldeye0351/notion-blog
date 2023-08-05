import { useState } from 'react'
import BlogPost from '@/components/NBlogPost'
import Container from '@/components/Container'
import PropTypes from 'prop-types'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const SearchLayout = ({ tags, posts, currentTag }) => {
  const [searchValue, setSearchValue] = useState('')
  const { locale } = useRouter()
  const t = lang[locale]
  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }
  
  const deftag = searchValue === "" ? posts : filteredBlogPosts 

  return (
    <Container>
      <div className='relative'>
        <input type='text' id="inputtext"
          className='w-full bg-white dark:bg-gray-600 shadow-md rounded-lg outline-none focus:shadow p-3'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <svg
          className='absolute right-3 top-3 h-5 w-5 text-gray-400'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
      </div>
      <div id="3tags" className='tag-container my-3'>
        <div className=' flex flex-row justify-center flex-wrap space-x-1 '>
          {Object.keys(tags).map((key) => {
            return (
              <button
                key={key}
                onClick={() => { setSearchValue(key) }} 
                className="group p-3  rounded-xl   hover:scale-110 duration-500  font-medium  whitespace-nowrap  hover:bg-gray-400 dark:hover:bg-gray-600"
              >
               {`${key} (${tags[key]})`}
                
              </button>
            )
          })}
        </div>
      </div>

      <div className='article-container my-8 flex flex-row flex-wrap justify-center  lg:justify-between    '>
        {!deftag.length && (
          <p className='text-gray-500 dark:text-gray-300'>
            {t.SEARCH.NOT_FOUND}
          </p>
        )}
        
              {deftag.slice(0, 20).map((post) => (
                <BlogPost key={post.id} post={post} index={deftag.indexOf(post)} />
              ))}
            
      </div>
    </Container>
  )
}
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default SearchLayout
