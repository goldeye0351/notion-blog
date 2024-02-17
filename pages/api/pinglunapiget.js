import BLOG from '@/blog.config';
const apikey = process.env.NOTION_API_KEY;
const pinglunId =BLOG.notionCommentId
export default async function handler(req, res) {
  try {
    const { postid } = JSON.parse(req.body);
    
    const tgUrl = `https://api.notion.com/v1/databases/${pinglunId}/query`;
    const init = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json', // 指定请求内容类型为 JSON
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
          "filter": {
                "property": "Name",
                "rich_text":  {
                  "equals": postid
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
    } else {
      res.status(response.status).json({ status: 'Failed' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}