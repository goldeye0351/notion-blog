const apikey = process.env.NOTION_API_KEY;
const bapi= "Bearer "+apikey
 const pinglunId = process.env.NOTION_DATABASE_ID

export async function POST(req) {
    const { postid } = await req.json();
    
    const res = await fetch(`https://api.notion.com/v1/databases/${pinglunId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': bapi,
        'Notion-Version': "2022-06-28",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "filter": {
          "property": "title",
          "rich_text":  {
            "equals": postid
          }
        }
      })
    })
    const data = await res.json()
    return Response.json(data)
  }