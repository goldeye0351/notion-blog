import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import { register } from 'swiper/element/bundle'
register()
import Mswiper from '@/components/Myswiper/Mswiper'
import { data } from '@/components/Paopao/data'
import { Link } from 'next/link'



export async function getStaticProps() {
  const posts = await getAllPosts({ onlyNewsletter: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}

export default function Mytest( ) {
  
  return <>

{ data }

</>
}