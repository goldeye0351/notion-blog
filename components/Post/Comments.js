import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Post/Utterances')
  },
  { ssr: false }
)
const SupaCommentsComponent = dynamic(
  () => {
    return import('@/components/Post/SupaComments')
  },
  { ssr: false }
)
const TwikooCompenent = dynamic(
  () => {
    return import('@/components/Post/Twikoo')
  },
  { ssr: false }
)
const Comments = ({ frontMatter }) => {
  return (
    <div id='comment' >
      <tabs>
          {BLOG.comment && BLOG.comment.provider === 'utterances' && (<div key='utterances'>
            <UtterancesComponent issueTerm={frontMatter.id} /></div>
          )}
          {BLOG.comment && BLOG.comment.provider === 'supacomments' && (<div key='supacomments'>
            <SupaCommentsComponent /></div>
          )}
          <div key='twikoo'><TwikooCompenent/></div>
      </tabs>
    </div>
  )
}

export default Comments
