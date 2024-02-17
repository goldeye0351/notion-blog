const apikey = process.env.NOTION_API_KEY;
// 添加评论的 API
export default async function addPL(req, res) {
  try {
    const { postid,comment } = JSON.parse(req.body);
    const tgUrl = 'https://api.notion.com/v1/comments';
    const init = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json', // 指定请求内容类型为 JSON
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        "parent": {
          "page_id": postid
        },
        "rich_text": [
          {
            "text": {
              "content": comment // 使用传递的评论内容
            }
          }
        ]
      })
    };
    const response = await fetch(tgUrl, init);
    if (response.ok) {
      res.json({ status: 'Success' });
    } else {
      res.status(response.status).json({ status: 'Failed' });
    }
  } catch (error) {
    res.status(500).json({ status: 'Failed', error: error.message });
  }
}
