
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { getAllPostsFromNotion,getRecordMap } from '@/services/posts';
import BLOG from '@/blog.config';
import Loading from '../loading';
//import { useMemo } from 'react';
import {  getPageTableOfContents,  uuidToId} from 'notion-utils'
//import Content from '@/components/Post/Content';
import SlugTitle from '@/components/Post/SlugTitle'
import TypeSlug from '@/components/Post/TypeSlug'
import MainAndTable from '@/components/Post/MainAndTable'
import IpComponent from '@/components/IpComponent';
import Prevandnext from '@/components/Post/ArticleAdjacent';
import Pinglun from '@/components/Post/NotionComment';
import JumpFloatBar, {ReadFloatBar,JumpWordCount} from './floatbar'
import UmamiView from '../../components/uView';
import ULike from '../../components/uLike';
import 'react-notion-x/src/styles.css';
import "./notion.css";
//export const revalidate = 3600; // revalidate the data at most every hour

export default async function PostPage({  params: { slug }}) {
  const ip=IpComponent();
  const allPosts = await getAllPostsFromNotion();
  const onlyposts=allPosts.filter((post) =>post.type == 'Post' && post.status=="Published");
  const allpostsresult = onlyposts.map(p => ({
    id:p.id,
    title: p.title,
    slug:p.slug,
    Link:p.link,
    emoji:p.emoji,
    cover:p.cover,
    summary:p.summary,
    date:p.date,
  })).flat();
  const post = onlyposts.find((p) => p.slug === slug);
  if (!post) {    return notFound();  }

  const allpls=allPosts.filter(post=> post.type=='Comment')
  const postid=post?.id;
  const mypls= allpls.filter(pl => pl?.title === postid)
  const index = onlyposts.indexOf(post)
  const prev = onlyposts.slice(index - 1, index)[0] ?? onlyposts.slice(-1)[0]
  const next = onlyposts.slice(index + 1, index + 2)[0] ?? onlyposts[0]
  const recordMap = await getRecordMap(postid);
  const keys = Object.keys(recordMap?.block || {})
    const block = recordMap?.block?.[keys[0]]?.value 
    const tableOfContent =
      getPageTableOfContents(block, recordMap)?.map(
        ({ id, text, indentLevel }) => ({
          id: uuidToId(id),
          text,
          indentLevel
        })
      ) || []

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
      const umamiview=resdata.filter((x) => x.x.substring(1) === post.slug);

      const umiUrl2 = `https://umami.51xmi.com/api/websites/${umiId}/metrics?startAt=1672848000000&endAt=${umiTime}&type=event`;
      const response2 = await fetch(umiUrl2, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${umiToken}`,
          'Content-Type': 'application/json'
        }
      });
      const resdata2 = await response2.json();
      const umamilike=resdata2.filter((x) => x.x === post.slug);
  return (
    <div className=' text-gray-200 '>   
        <div className='flex justify-center  items-center'>
            <div className=" bg-gray-600  flex fixed bottom-8 rounded-full px-8 z-50 items-center justify-center  "  >

                <div className=" border-l border-gray-500 h-10 w-1 "></div>
                    <JumpFloatBar />
                <div className=" border-l border-gray-500 h-10 w-1 "></div>
                    <JumpWordCount />                    
                <div className=" border-l border-gray-500 h-10 w-1 "></div>
                    <Suspense fallback={<Loading />}>
                        <UmamiView  slugview={umamiview[0].y}/>
                    </Suspense>     
                <div className=" border-l border-gray-500 h-10 w-1 "></div>
                    <Suspense fallback={<Loading />}>
                        <ULike slug={post.slug} ulike={umamilike[0].y} />
                    </Suspense>
                <div className=" border-l border-gray-500 h-10 w-1 "></div>
                    <ReadFloatBar />
            </div>
        </div>



        <SlugTitle post={post}  prev={prev}  next={next}  />
        <div className=' px-6 py-3'><TypeSlug post={post} /></div>
        <MainAndTable   recordMap={recordMap} tableOfContent={tableOfContent} allposts={allpostsresult} />
        
        <Suspense fallback={<Loading />}>
            <Pinglun post={post} mypls={mypls} ip={ip} />
        </Suspense>

        <Prevandnext prev={prev} next={next} me={post}    />
    </div>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsFromNotion();
  const onlyposts=allPosts.filter((post) =>post.type == 'Post'  )

  return onlyposts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({  params: { slug }}) {
  const allPosts = await getAllPostsFromNotion();
  const onlyposts=allPosts.filter((post) =>post.type == 'Post'  )
  const post = onlyposts.find((p) => p.slug === slug);

  return post
    ? {
        title: post.title,
        description: post.summary,
        openGraph: {
          images: [
            {
              url: post.cover,
              width: 84,
              height: 84,
            },
          ],
        },
      }
    : {};
}


