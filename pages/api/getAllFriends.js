import BLOG from '@/blog.config';
const apikey = process.env.NOTION_API_KEY;
const pinglunId =BLOG.notionDatabaseId
export default async function handler(req, res) {
  try {
    const tgUrl = `https://api.notion.com/v1/databases/${pinglunId}/query`;
    const init = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json', // 指定请求内容类型为 JSON
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          property: "type",
          select: {
            equals: "Friend"
          }
        }
      })
    };
    const response = await fetch(tgUrl, init);

    //res.status(201).json({ msg: 'Success' });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      res.json({ status: 'Success', data }); // 返回获取的评论数据
    } else if (response.status === 429) {
      const retryAfter = parseInt(response.headers.get('Retry-After'), 10) || 10; // Default to 10 seconds
      console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
      await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
    } 
    else {
      res.status(response.status).json({ status: 'Failed' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}