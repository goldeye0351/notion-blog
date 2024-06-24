import { getAllPostsFromNotion } from "@/services/posts";
import PYQPAGE from './pyqpage';
import { PYQ } from "@/Icon/Icon"
import BLOG from '@/blog.config';
//import { Post } from '@/types/post';
const saysaytext=BLOG.saysay
export default async function PYQPage( ) {
    const allPosts = await getAllPostsFromNotion();
    const pyq=allPosts.filter((post) =>post.type == 'Moment' )
    const allpls=allPosts.filter(post=> post.type=='Comment')

    const umiId = BLOG.analytics.umamiConfig.websiteId;
    const umiToken = BLOG.analytics.umamiConfig.token;
    const umiTime = Date.parse(new Date().toString());

    const umiUrl2 = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=event`;
    const response2 = await fetch(umiUrl2, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${umiToken}`,
        'Content-Type': 'application/json'
      }
    });
    const resdata2 = await response2.json();


    return(
        <>
<div className=' mx-auto min-h-screen flex flex-col   ' >
    <div className=" relative  ">
        <div className=" flex flex-row text-white  justify-end     ">
          <div  className="  flex-row flex   p-2   text-white justify-center content-center items-center ">
            <PYQ className='h-24 w-24 mx-auto   ' />
            <span className=" inline-block  text-3xl italic ">
              {saysaytext} 
            </span>
          </div>
        </div>  
    </div>
    < div  id='展示框' key='dispbox' className=" flex mx-auto mt-8 relative  "  >
          <PYQPAGE pyq={pyq} allpls={allpls} resdata={resdata2} />
    </div>
</div>
</>
      );
}

export const metadata = {
    title: '朋友圈, 测试手机性能,看你能到第几个 51xMI',
    description: '51xMI .',
  };