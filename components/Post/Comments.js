import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'

const SupaCommentsComponent = dynamic(
  () => {
    return import('@/components/Post/SupaComments')
  },
  { ssr: false }
)

const Pinglun = dynamic(
  () => {
    return import('@/components/Post/NotionComment')
  },
  { ssr: false }
)
const Comments = ({ frontMatter,pingluns }) => {
  return (
    <div id='comment' >
          {BLOG.comment && BLOG.comment.provider === 'notion' && (
          <div key='notion'><Pinglun post={frontMatter}  pingluns={pingluns}  /></div>
          )}

          {BLOG.comment && BLOG.comment.provider === 'supacomments' && (
          <div key='supacomments'> <SupaCommentsComponent /></div>
          )}
    </div>
  )
}

export default Comments
