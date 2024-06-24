//api/posts
import { NextResponse } from 'next/server';

import { getAllPostsFromNotion } from '@/services/posts';
import { getErrorMessage } from '@/utils/get-error-message';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const allPosts = await getAllPostsFromNotion();
    const Posts = allPosts.filter((post) => post.type == 'Post' && post.status == 'Published' || post.type == 'Moment' && post.status == 'Published');
    return NextResponse.json({ posts: Posts });
  } catch (e) {
    return NextResponse.json({ error: getErrorMessage(e) }, { status: 500 });
  }
}
