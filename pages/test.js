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
                <div className=' flex justify-center '>
                <div className=' yinyang  '></div>
                </div>

<Banner {...props }/>
</Container>}
export default test