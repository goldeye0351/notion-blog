const apikey = process.env.NOTION_API_KEY;
const bapi= "Bearer "+apikey
 const DatabaseId = process.env.NOTION_DATABASE_ID

export async function POST(req) {
    const { posttype} = await req.json();
    
    const res = await fetch(`https://api.notion.com/v1/databases/${DatabaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': bapi,
        'Notion-Version': "2022-06-28",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "filter": {
          "property": "type",
          "select":  {
            "equals": posttype
          }
        }
      })
    })
    const data = await res.json()
    return Response.json({data})
  }