const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { title,icon,summary,fslug } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      cover: {
        type: "external",
        external: {
          url: icon,
        }
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: title,
              },
            },
          ],
        },
        summary: {
          rich_text: [
            {
              text: {
                content: summary,
              },
            },
          ],
        },
        slug: {
          rich_text: [
            {
              text: {
                content: fslug,
              },
            },
          ],
        },
        "type": {
          "select": {
            "name": "Friend"
          }
        },
        "status": {
          "select": {
            "name": "Published"
          }
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}