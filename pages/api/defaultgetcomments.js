const apikey = process.env.NOTION_API_KEY;

// 获取评论的 API
export default async function getPLs(req, res) {
  try {
    const { postid } = req.query;
    const tgUrl = `https://api.notion.com/v1/comments?block_id=${postid}`;
    const init = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json', // 指定请求内容类型为 JSON
        'Notion-Version': '2022-06-28',
      },
    };
    const response = await fetch(tgUrl, init);
    if (response.ok) {
      const data = await response.json();
      res.json({ status: 'Success', data }); // 返回获取的评论数据
    } else {
      res.status(response.status).json({ status: 'Failed' });
    }
  } catch (error) {
    res.status(500).json({ status: 'Failed', error: error.message });
  }
}
