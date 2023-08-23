import BLOG from '@/blog.config';
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
 const pinglunId =BLOG.notionCommentId
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { postid,ren,pinglun,title,email } = JSON.parse(req.body);
    await notion.pages.create({
      parent: { 
        database_id: pinglunId
      },
      icon: {
        emoji: "🥬"
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
        "Ren": {
          "rich_text": [
            {
              "text": {
                "content":ren
              }
            }
          ]
        },
        "Text": {
          "rich_text": [
            {
              "text": {
                "content":pinglun
              }
            }
          ]
        },
        "Title": {
          "rich_text": [
            {
              "text": {
                "content":title
              }
            }
          ]
        },
        "Email": {
	        "email": email
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}