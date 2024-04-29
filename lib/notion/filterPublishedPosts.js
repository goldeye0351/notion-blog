export default function filterPublishedPosts({
  posts,
  onlyPost,
  onlyFriend,
  onlyMoment,
  onlyHidden,
  postAndComment
}) {
  if (!posts || !posts.length) return []
  return posts
  .filter((post) =>
      onlyPost
        ? post?.type?.[0] === 'Post'
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
    postAndComment
      ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Comment'
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
