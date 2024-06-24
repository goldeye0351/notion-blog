'use client';

import { useEffect, useState } from 'react';

import { Post } from '@/types/post';

export default function SyncPage() {
  const [message, setMessage] = useState('');
  const [slugs, setSlugs] = useState<string[]>([]);
  const [sposts, setSposts] = useState<Post[]>([]);
  const [psposts, setPsposts] = useState<Post[]>([]);

  const sync = async (password: string) => {
    setMessage('Detecting changes');
    const postsRes = await fetch(`/api/posts?password=${password}`);
    if (postsRes.status === 403) {      setMessage('Wrong password');      return false;    }
    if (postsRes.status === 500) {      setMessage('Notion api error, try again later');      return false;    }

    const { posts }: { posts: Post[] } = await postsRes.json();
    ///console.log("api/posts有错误?",posts)
    setSposts(posts);

    const prevPostsRes = await fetch(`/api/posts/cache?password=${password}`);
    const { posts: prevPosts }: { posts: Post[] } = await prevPostsRes.json();
    ///console.log("api/posts/cache有错误?",prevPosts)
    setPsposts(prevPosts);

    const slugsToRevalidate: string[] = [];

    posts.forEach((post, index) => {
      const prevPost = prevPosts.find((p) => p.slug === post.slug);
      if (!prevPost || post.lastEditedAt > prevPost.lastEditedAt) {
        slugsToRevalidate.push(post.slug);
      }
    });

    prevPosts.forEach(({ slug }) => {
      if (!posts.map(({ slug }) => slug).includes(slug)) {
        slugsToRevalidate.push(slug);
      }
    });

    if (slugsToRevalidate.length === 0) {
      setMessage('No posts changed');
      return false;
    } else {
      setMessage('Revalidating...');
      setSlugs(slugsToRevalidate);

      const promises: Promise<Response>[] = [];
      promises.push(
        fetch(`/api/revalidate?path=/api/posts/cache&password=${password}`)
      );
      promises.push(
        fetch(`/api/revalidate?path=/sitemap.xml&password=${password}`)
      );
      promises.push(fetch(`/api/revalidate?path=/&password=${password}`));
      promises.push(fetch(`/api/revalidate?path=/pyq&password=${password}`));
      slugsToRevalidate.forEach((slug) => {
        promises.push(
          fetch(`/api/revalidate?path=/${slug}&password=${password}`)
        );
      });
      await Promise.all(promises);
      return true;
    }
  };

  useEffect(() => {
    let password;
    while (!password) {
      password = prompt('Enter password');
    }

    sync(password).then((revalidated) => {
      if (revalidated) {
        setMessage('Sync Finished!');
      }
    });
  }, []);

  return (
    <div className="mt-[10vh] text-center   text-white">
      <p className=' text-3xl' >{message}</p>
      <div className=' flex flex-row'>
          <div className=' w-1/3'>
            <p className=' text-3xl' >NEW:{sposts.length} </p>
            {sposts.length > 0 && (
            <ul className="mt-4">
              {sposts.map((post) => (
                <li key={post.id} className='border'>
                    <div>{post.slug}</div>
                    <div>{post.emoji}{post.title}+{new Date(post.lastEditedAt).toLocaleString()}</div>               
                </li>
              ))}
            </ul>
          )}
          </div>

          <div className=' w-1/3'>
            <p className=' text-3xl' >OLD:{psposts.length}</p>
            {psposts.length > 0 && (
            <ul className="mt-4">
              {psposts.map((post) => (
                <li key={post.id} className='border'>              
                    <div>{post.slug}</div>
                    <div>{post.emoji}{post.title}+{new Date(post.lastEditedAt).toLocaleString()}</div>                
                </li>
              ))}
            </ul>
          )}
          </div>

          <div className=' w-1/3'>
              <p className=' text-3xl' >更新的SLUG数量{slugs.length}</p>
              {slugs.length > 0 && (
                <ul className="mt-4">
                  {slugs.map((slug) => (
                    <li key={slug} className='border'>{slug}</li>
                  ))}
                </ul>
              )}
          </div>

      </div>



    </div>
  );
}
