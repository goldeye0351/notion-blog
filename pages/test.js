import { getAllPosts,getAllTagsFromPosts } from '@/lib/notion'
import Container from '@/components/Container'
import HeroLeft from '@/components/Hero/Heroleft'
import HeroRight from '@/components/Hero/HeroRight'
import CardTags from '@/components/Card/CardTag'
import Banner from '@/components/Hero/Banner'

export async function getStaticProps() {
    const posts = await getAllPosts({ onlyPost: true })
    const tags = getAllTagsFromPosts(posts)
    return {
      props: {
        posts,tags,
      },
      revalidate: 1
    }
  }
const test =  props  => {
  
  return<Container >
{/* 
          <div className=" mx-auto w-56 h-36   overflow-scroll  ">
            
            <div className="relative">
              <div className="sticky top-0 px-4 py-3 text-xl flex justify-center bg-slate-300/50 rounded-full  ">
                AAAAAAAAAA
              </div>
              <div className="divide-y dark:divide-slate-200">
                <div className="flex p-4">A1</div>
                <div className="flex p-4">A2</div>
              </div>
            </div>
            
            <div className="relative">
              <div className="sticky top-0 px-4 py-3 text-xl flex justify-center bg-slate-300/50 rounded-full  ">
                BBBBBBBBBBB
              </div>
              <div className="divide-y dark:divide-slate-200">
                <div className="flex p-4">B1</div>
                <div className="flex p-4">B2</div>
                <div className="flex p-4">B3</div>
              </div>
            </div>

          </div>*/}

<div className=' myrotatecard rounded-xl  w-36 h-96 min-w-[10vw] min-h-[10VH]'>
  123
</div >
<div className=' mypingcard rounded-xl  w-36 h-96 min-w-[20vw] min-h-[10VH] relative'>
  <div className='  mymenutext '>333</div >
</div >
</Container>}
export default test