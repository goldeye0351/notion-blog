export default function filterPublishedPosts({
  posts,
  onlyNewsletter,
  onlyFriend,
  onlyPost,
  onlyHidden
}) {
  if (!posts || !posts.length) return []
  return posts
    .filter((post) =>
      onlyNewsletter
        ? post?.type?.[0] === 'Newsletter'
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
