const apikey = process.env.NOTION_API_KEY;
const bapi= "Bearer "+apikey
 const DatabaseId = process.env.NOTION_DATABASE_ID

 export async function POST(req) {
    //const { postid} = JSON.parse(req.body);//不知道为什么, 这样不起作用, 
    const { title,icon,summary,fslug,visitorIp } = await req.json(); // 使用 req.json() 来解析请求体
    const todaynow= new Date()

    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': bapi,
        'Notion-Version': "2022-06-28",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { 
          database_id: DatabaseId
        },
        icon: {
          emoji: "🥬"
        },
        cover: {
          type: "external",
          external: {
            url: icon,
          }
        },
        properties: {
          "title": {
            "title": [
              {
                "text": {
                  "content": title
                }
              }
            ]
          },

          "summary": {
            "rich_text": [
              {
                "text": {
                  "content":summary
                }
              }
            ]
          },
          "slug": {
            "rich_text": [
              {
                "text": {
                  "content":fslug
                }
              }
            ]
          },
          "status": {
            "select": {
              "name": "Published"
            }
          },
          "type": {
            "select": {
              "name": "Friend"
            }
          },
          "Link": {
              "url": icon
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
        }}        
      ),
    })
    const data = await res.json()
    return Response.json(data)
  }