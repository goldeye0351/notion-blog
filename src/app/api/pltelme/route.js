import BLOG from '@/blog.config'

export async function POST(req) {
  const TG_TOKEN = BLOG.telegramToken
  const TG_CHAT_ID = BLOG.telegramChatId
  const { ren,email,pinglun,slug } = await req.json(); // 使用 req.json() 来解析请求体
 
    const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: ren+email+pinglun+slug,
        text: "这是评论:\n"+"昵称:"+ren+"\nEmail:"+email+"\n评论"+pinglun+"\n网页:\n"+slug
      })
    })

  }