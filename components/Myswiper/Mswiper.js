
import { register } from 'swiper/element/bundle'
register()

const Mswiper = ({ post,className}) => {
  return (        
  <swiper-slide key={post.id} post={post}  > 
        <div className={className}>
            <div>{post}</div> 
        </div>
  </swiper-slide>
  )
}

export default Mswiper
