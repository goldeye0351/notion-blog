export default function filterPublishedPosts({
  posts,
  onlyPost,
  onlyPage,
  onlyFriend,
  onlyMoment,
  onlyHidden,
  postAndPage
}) {
  if (!posts || !posts.length) return []
  return posts
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
  onlyFriend
    ? post?.type?.[0] === 'Friend'
    : post
  )
  .filter((post) =>
  onlyMoment
    ? post?.type?.[0] === 'Moment'
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
  .filter((post) => {
    return (
      post.title &&
      post.slug &&
      post?.status?.[0] === 'Published' &&
      post.date <= new Date()
    )
  })
}
