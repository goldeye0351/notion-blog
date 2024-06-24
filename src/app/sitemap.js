import { getAllPostsFromNotion } from '@/services/posts';
import BLOG from "@/blog.config";
export default async function sitemap() {
    const allPosts = await getAllPostsFromNotion();
    const onlyposts=allPosts.filter((post) =>post.type == 'Post'  )
    const sitemap = [{
      url: 'https://51xmi.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://51xmi.com/pyq',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
  
    for (const post of onlyposts) {
      sitemap.push({
        url: `${BLOG.link}/${post.slug}`,
        lastModified: new Date(post.date),
      });
    }
  
    return sitemap;
  }