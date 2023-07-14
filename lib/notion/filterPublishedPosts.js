export default function filterPublishedPosts({
  posts,
  onlyHot,
  onlyTravel,
  onlyUpdate,
  onlyFriend,
  onlyPost,
  onlyHidden
}) {
  if (!posts || !posts.length) return []
  return posts
  .filter((post) =>
    onlyHot
    ? post?.type?.[0] === 'Hot'
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
      onlyHidden
        ? post?.type?.[0] === 'Hidden'
        : post?.type?.[0] !== 'Hidden'
  )
  .filter((post) => {
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        post.date <= new Date()
      )
    })
}
