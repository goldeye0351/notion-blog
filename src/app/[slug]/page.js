
import { notFound } from 'next/navigation';
import { getAllPostsFromNotion,getRecordMap } from '@/services/posts';
import {  getPageTableOfContents,  uuidToId} from 'notion-utils'
import Content from '@/components/Post/Content';
import IpComponent from '@/components/IpComponent';
import Prevandnext from '@/components/Post/ArticleAdjacent';
import 'react-notion-x/src/styles.css';
import "./notion.css";
//export const revalidate = 3600; // revalidate the data at most every hour

export default async function PostPage({  params: { slug }}) {
  const ip=IpComponent();
  const allPosts = await getAllPostsFromNotion();
  const onlyposts=allPosts.filter((post) =>post.type == 'Post' && post.status=="Published");
  const post = onlyposts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }
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
  return (
    <>    
            <Content
                  allPosts={onlyposts}
                  post={post}
                  recordMap={recordMap}
                  tableOfContent={tableOfContent}
                  prev={prev}
                  next={next}
                  mypls={mypls}
                  ip={ip}
                />
        <Prevandnext prev={prev} next={next} me={post} />
    </>
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


