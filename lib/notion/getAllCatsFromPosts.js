export function getAllCatsFromPosts(posts) {
  const catedPosts = posts.filter((post) => post?.category)
  const cats = [...catedPosts.map((p) => p.category).flat()]
  const catObj = {}
  cats.forEach((cat) => {
    if (cat in catObj) {
      catObj[cat]++
    } else {
      catObj[cat] = 1
    }
  })
  return catObj
}
