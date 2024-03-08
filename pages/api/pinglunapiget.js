import BLOG from '@/blog.config';
const apikey = process.env.NOTION_API_KEY;
const pinglunId = BLOG.notionCommentId;

export default async function handler(req, res) {
  try {
    const { postid } = JSON.parse(req.body);
    
    const tgUrl = `https://api.notion.com/v1/databases/${pinglunId}/query`;
    const init = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Content-Type': 'application/json',
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

    let response;
    let retryCount = 0;
    const maxRetries = 3; // Maximum number of retries

    do {
      try {
        response = await fetch(tgUrl, init);
        if (response.ok) {
          const data = await response.json();
          return res.json({ status: 'Success', data });
        } else if (response.status === 429) {
          const retryAfter = parseInt(response.headers.get('Retry-After'), 10) || 10; // Default to 10 seconds
          console.log(`Rate limited. Retrying after ${retryAfter} seconds.`);
          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        } else {
          return res.status(response.status).json({ status: 'Failed' });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        retryCount++;
        if (retryCount >= maxRetries) {
          return res.status(500).json({ msg: 'Max retries exceeded' });
        }
      }
    } while (retryCount < maxRetries);

    return res.status(500).json({ msg: 'Unknown error' });
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ msg: 'There was an error' });
  }
}
