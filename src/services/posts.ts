//services/posts.ts
import { Post } from '@/types/post';
import { NotionAPI } from 'notion-client';
import { Block, ExtendedRecordMap } from 'notion-types';
import cache from 'memory-cache'
const notion = new NotionAPI({  authToken: process.env.NOTION_TOKEN,});

export async function getAllPostsFromNotion() {
  const allPosts: Post[] = [];
  const recordMap = await getRecordMap(process.env.NOTION_DATABASE_ID!);
  const { block, collection } = recordMap;
  const schema = Object.values(collection)[0].value.schema;
  const propertyMap: Record<string, string> = {};

  Object.keys(schema).forEach((key) => {
    propertyMap[schema[key].name] = key;
  });

  Object.keys(block).forEach((pageId) => {
    if (
      block[pageId].value.type === 'page' &&
      block[pageId].value.properties[propertyMap['slug']]
      //&&block[pageId].value.properties[propertyMap['tags']]
    ) {
      const { properties } = block[pageId].value;
      const lastEditedAt =block[pageId].value.last_edited_time ;
      
      const id = pageId;
      const slug = properties[propertyMap['slug']][0][0];
      const summary = properties[propertyMap['summary']][0][0];
      const IP = properties[propertyMap['IP']];
      const password = properties[propertyMap['password']];
      const vip = properties[propertyMap['vip']];
      const title = properties[propertyMap['title']][0][0];
      const category = properties[propertyMap['category']][0][0];

      const status= properties[propertyMap['status']][0][0];
      const cover = block[pageId].value?.format?.page_cover || 'https://51xmi.com/51.png';
      const date = properties[propertyMap['date']][0][1][0][1]['start_date'];
      const numdate= Date.parse(date);
      const emoji=block[pageId].value?.format?.page_icon ;
//Link
      let link;      
      const oldlink = properties[propertyMap['Link']];
      if (oldlink ) {link = oldlink[0][0]; } else { link = ""; };
//Email      
      let Email
      const oldEmail = properties[propertyMap['Email']];
      if (oldEmail ){Email = oldEmail[0][0];} else { Email = ""; };
//const tags = properties[propertyMap['tags']][0][0].split(',');
      let tags;
      const oldtags = properties[propertyMap['tags']];
      if (oldtags ) {tags = oldtags[0][0].split(','); } else { tags = ""; };
      const type = properties[propertyMap['type']];
const up=properties[propertyMap['up']]

      allPosts.push({
        id,
        IP,vip,password,status,Email,numdate,
        emoji,link,summary,type,up,
        title,
        slug,
        tags,
        category,
        cover:mapImageUrl(cover, block[pageId].value) || '',
        date,
        lastEditedAt,
      });
    }
  });

  allPosts.sort((a, b) =>b.numdate - a.numdate )
  return allPosts;
}

export async function getRecordMap(id: string) : Promise<ExtendedRecordMap> {
  const cachedRecordMap = cache.get(id);
  // If the record map is in the cache, return it
if (cachedRecordMap) {    return cachedRecordMap;  }

const recordMap = await notion.getPage(id);
  cache.put(id, recordMap);
return recordMap;
}


export function mapImageUrl(url: string, block: Block): string | null {
  if (!url) {
    return null;
  }

  if (url.startsWith('data:')) {
    return url;
  }

  // more recent versions of notion don't proxy unsplash images
  if (url.startsWith('https://images.unsplash.com')) {
    return url;
  }

  try {
    const u = new URL(url);

    if (
      u.pathname.startsWith('/secure.notion-static.com') &&
      u.hostname.endsWith('.amazonaws.com')
    ) {
      if (
        u.searchParams.has('X-Amz-Credential') &&
        u.searchParams.has('X-Amz-Signature') &&
        u.searchParams.has('X-Amz-Algorithm')
      ) {
        // if the URL is already signed, then use it as-is
        return url;
      }
    }
  } catch {
    // ignore invalid urls
  }

  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`;
  }

  url = `https://www.notion.so${
    url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`
  }`;

  const notionImageUrlV2 = new URL(url);
  let table = block.parent_table === 'space' ? 'block' : block.parent_table;
  if (table === 'collection' || table === 'team') {
    table = 'block';
  }
  notionImageUrlV2.searchParams.set('table', table);
  notionImageUrlV2.searchParams.set('id', block.id);
  notionImageUrlV2.searchParams.set('cache', 'v2');

  url = notionImageUrlV2.toString();

  return url;
}

export function getAllTagsFromPosts(posts: Post[]): Record<string, number> {
  const tags = posts.map((p) => p.tags).flat();
  const tagObj: Record<string, number> = {};
  tags.forEach((tag) => {
    if (tag in tagObj) {
      tagObj[tag]++;
    } else {
      tagObj[tag] = 1;
    }
  });
  return tagObj;
}
