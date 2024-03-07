import { ChatIcon} from '@/Icon/Icon'

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
        <div title={'Jump to Comment '}
            onClick={navToComment} 
            className="w-full h-full p-1 cursor-pointer  group-hover:scale-150  rounded-lg flex justify-center items-center duration-200 transition-all" >
            <ChatIcon data-umami-event="评论"  className="w-8 h-8"  />
        </div>

    </>)
}
