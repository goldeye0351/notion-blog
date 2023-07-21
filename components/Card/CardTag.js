import Link from 'next/link'
import { useState } from 'react'
import { ShareIcon,PlayIcon } from '@heroicons/react/outline'

const CardTags = ({ tags, className }) => {
  if (!tags) return null
  const [CurrentTag, setCurrentTag] = useState('')
  return (
    <div id="alltags" className={className}>
      <div className='flex flex-row flex-grow w-full items-center justify-between space-x-2 '>
        {Object.keys(tags).map((key) => {
          console.log("当前标签",CurrentTag)
          return (
            <button
            key={key}
            onClick={() => { setCurrentTag(key) }} 
            className={` group px-3 w-1/3 hover:w-1/2 h-16 flex flex-row justify-between content-center items-center   ${ Object.keys(tags).indexOf(key)% 3 === 0 ? 'cai1 ' :Object.keys(tags).indexOf(key)% 3  === 1 ? 'cai2 ' : 'cai3'}
            overflow-hidden rounded-xl   hover:scale-110 duration-500   m-1 font-medium  whitespace-nowrap  hover:bg-gray-400 dark:hover:bg-gray-600`}
          >
           {`${key} (${tags[key]})`}
            <ShareIcon 
            className={`inline-block scale-150  h-16 w-16 -rotate-45 opacity-50 group-hover:rotate-0 group-hover:opacity-100 group-hover:scale-105     ${ Object.keys(tags).indexOf(key)% 2 === 1 ? 'hidden ' : ''}
            duration-500 `}/>
            <PlayIcon 
            className={`inline-block scale-150  h-16 w-16 -rotate-45 opacity-50 group-hover:rotate-0 group-hover:opacity-100 group-hover:scale-105      ${ Object.keys(tags).indexOf(key)% 2 === 1 ? ' ' : 'hidden'}
            duration-500 `}/>
          </button>
          )
        })}
      </div>
    </div>
  )
}

export default CardTags
