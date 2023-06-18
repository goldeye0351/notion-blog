import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import InfoCard from '@/components/Card/InfoCard'
import { register } from 'swiper/element/bundle'
register()
import Mswiper from '@/components/Myswiper/Mswiper'
import { data } from '@/components/Paopao/data'



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

export default function My3d( ) {
  
  return <>
<swiper-container 
        grab-cursor="true" autoplay="true" autoplay-disable-on-interaction="true" speed="100" space-between="0" slides-per-view="3"
        effect="coverflow" coverflow-effect-rotate="10" coverflow-effect-depth="500" coverflow-effect-slide-shadows="false" loop="true"
        coverflow-effect-stretch="10" coverflow-effect-modifier="1" loop-additional-slides="2"
        > 
{data.map((datap) => (

       <Mswiper key={datap.id} post={datap} className=" flex flex-col justify-center  items-center text-xl  bg-slate-300 dark:bg-slate-600  rounded-3xl " />
      
      ))}
</swiper-container> 




</>
}
