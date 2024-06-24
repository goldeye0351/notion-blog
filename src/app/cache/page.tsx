import { getAllPostsFromNotion } from '@/services/posts';

export default async function CachePage() {
  const allPosts = await getAllPostsFromNotion();
  const Posts = allPosts.filter((post) => post.type === 'Post' && post.status === 'Published' || post.type === 'Moment' && post.status === 'Published');

  return <div id="posts" data-posts={JSON.stringify(Posts)} />;
}
