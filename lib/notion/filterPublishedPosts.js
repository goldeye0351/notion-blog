import BLOG from "@/blog.config"
export default function filterPublishedPosts({
  posts,
  onlyHot,
  onlyPage,
  onlyTravel,
  onlyUpdate,
  onlyFriend,
  onlyPost,
  onlyHidden,
  postAndPage,
  onlyPL
}) {
  if (!posts || !posts.length) return []
  return posts
  .filter((post) =>
    onlyHot
    ? post?.type?.[0] === 'Hot'
    : post
  )
  .filter((post) =>
  onlyPL
    ? post?.Name === BLOG.saysay
    : post
  )    
  .filter((post) =>
      onlyTravel
        ? post?.type?.[0] === 'Travel'
        : post
   )        
  .filter((post) =>
    onlyUpdate
      ? post?.type?.[0] === 'Update'
      : post
  )    
  .filter((post) =>
    onlyFriend
      ? post?.type?.[0] === 'Friend'
      : post
  )
  .filter((post) =>
      onlyPost
        ? post?.type?.[0] === 'Post'
        : post
  )
  .filter((post) =>
      onlyPage
    ? post?.type?.[0] === 'Page'
    : post
  )
  .filter((post) =>
      onlyHidden
        ? post?.type?.[0] === 'Hidden'
        : post?.type?.[0] !== 'Hidden'
  )
  .filter((post) =>
    postAndPage
      ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
      : post
  )
}
