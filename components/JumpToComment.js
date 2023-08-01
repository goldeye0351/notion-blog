import { ChatIcon} from '@heroicons/react/outline'

/**
 * 到底部评论区
 * @returns
 */
export default function Jumptocomment() {
  
  function navToComment() {
    if (document.getElementById('comment')) {
      window.scrollTo({ top: document.getElementById('comment').offsetTop, behavior: 'smooth' })
    }}

  return (<>
        <div title={'百分比'}
            onClick={navToComment} 
            className="w-6 h-6 cursor-pointer  group-hover:scale-150  rounded-lg flex justify-center items-center duration-200 transition-all" >
            <ChatIcon data-umami-event="评论"  className="w-8 h-8"  />
        </div>

    </>)
}
