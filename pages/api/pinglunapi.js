import BLOG from '@/blog.config';
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});
 const pinglunId =BLOG.notionDatabaseId
export default async function handler(req, res) {
  const todaynow= new Date()
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { postid,ren,pinglun,title,email,visitorIp,linkTo } = JSON.parse(req.body);
    await notion.pages.create({
      parent: { 
        database_id: pinglunId
      },
      icon: {
        emoji: "🥬"
      },
      properties: {
        "title": {
          "title": [
            {
              "text": {
                "content": postid
              }
            }
          ]
        },
        "vip": {
          "rich_text": [
            {
              "text": {
                "content":ren
              }
            }
          ]
        },
        "summary": {
          "rich_text": [
            {
              "text": {
                "content":pinglun
              }
            }
          ]
        },
        "slug": {
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
        "status": {
          "select": {
            "name": "Published"
          }
        },
        "type": {
          "select": {
            "name": "Comment"
          }
        },
        "Link": {
	        "url": linkTo || null
        },
        "date": {
          "date": {
            "start": todaynow
          }
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