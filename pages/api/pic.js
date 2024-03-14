import BLOG from '@/blog.config';
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
 const picId =BLOG.notionPicId
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { postid,visitorIp,linkTo } = JSON.parse(req.body);
    await notion.pages.create({
      parent: { 
        database_id: picId
      },
      icon: {
        emoji: "🏞️"
      },
      properties: {
        "Name": {
          "title": [
            {
              "text": {
                "content": postid
              }
            }
          ]
        },        
        "URL": {
          "url":linkTo 
        },
        "IP": {
          "rich_text": [
            {
              "text": {
                "content":visitorIp
              }
            }
          ]
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}