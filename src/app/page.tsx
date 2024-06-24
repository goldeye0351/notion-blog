
import type { Metadata, ResolvingMetadata } from 'next'
import { getAllPostsFromNotion ,getAllTagsFromPosts} from '@/services/posts';
import Postlist from '@/components/blog/postlist';
import BLOG from '@/blog.config';

export default async function BlogPage() {
  const allPosts = await getAllPostsFromNotion();
  const Posts=allPosts.filter((post) =>post.type == 'Post' && post.status=="Published");
  const allpostsresult = Posts.map(p => ({
    id:p.id,
    title: p.title,
    tags:p.tags,
    slug:p.slug,
    Link:p.link,
    emoji:p.emoji,
    up:p.up,
    cover:p.cover,
    summary:p.summary,
    date:p.date,
    Email:p.Email,
    category:p.category
  })).flat();

  const allpls=allPosts.filter(post=> post.type=='Comment')
  const allplsresult = allpls.map(pl => ({
    id:pl.id,
    title: pl.title,
    vip:pl.vip,
    summary:pl.summary,
    date:pl.date,
    Email:pl.Email,
  })).flat();

  //const alltags = Posts.map((p) => p.tags).flat().filter((tag, index, self) => self.indexOf(tag) === index);
  const alltags = getAllTagsFromPosts(Posts)    //{"AI":1,"Code":12,"Cloudflare":3,"Apple":4}
  const umiId = BLOG.analytics.umamiConfig.websiteId;
  const umiToken = BLOG.analytics.umamiConfig.token;
  const umiTime = Date.parse(new Date().toString());
  const umiUrl = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=url`;
  const response = await fetch(umiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${umiToken}`,
      'Content-Type': 'application/json'
    }
  });
  const resdata = await response.json();

  const umiUrl2 = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=event`;
  const response2 = await fetch(umiUrl2, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${umiToken}`,
      'Content-Type': 'application/json'
    }
  });
  const resdata2 = await response2.json();

  return (<div id='zuozhongyou'  className='flex flex-row m-auto text-gray-200 dark:text-gray-200 min-h-screen '>        
<Postlist  allpls={allplsresult} tags={alltags} posts={allpostsresult} umamiallurl={resdata} umamialllike={resdata2}  />
</div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title =  'Blog || 51xMI.com';
   return {
    title: title,
    description: '51xMI BLOG .'
  }
}

