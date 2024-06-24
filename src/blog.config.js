const BLOG = {
  title: '51xMI',
  description: '51xMI',
  link:'https://51xmi.com',
  author: 'Goldeye',
  email: 'admin@51xm.com',
  viptitle:'VIP中心',
  ogimg:'https://51xmi.com/51.png',
  pyqog:'https://51xmi.com/pyqlogo.png',
  githubUrl:'https://github.com/goldeye0351/notion-blog',
  umamiUrl:'https://umami.51xmi.com/share/1up60SkH1etMJIqX/51xmi',

  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']

  lightBackground: '#212936', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#000000', // use hex value, don't forget '#'

  path: '', // leave this empty   
  googleadid:'', // google ad id,   leave this empty 
  defaultCover: '/51.png',
  defaultIcon: '/favicon.ico',
  seo: {
    keywords: ['51xmi', 'log','notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionDatabaseId: process.env.NOTION_DATABASE_ID || '', // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_TOKEN || '', // Useful if you prefer not to make your database public
  //telegram . page 'contact me' use it 
  telegramToken: process.env.TELEGRAM_TOKEN ||'', // The token of your Telegram bot
  telegramChatId: '754356243', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/+qhlQu1J3xONkNzYx', // The link of your Telegram channel
  telegramChannelName: '535251', // The name of your Telegram channel

  analytics: {
    provider: 'umami', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    umamiConfig: {
      scriptUrl: 'https://umami.51xmi.com/script.js', // The url of your Umami script
      apiUrl:'https://umami.51xmi.com/api/websites/',
      websiteId: '6a873ef2-259b-4e69-a63c-1306d6695bd2', // The website id of your Umami instance
      token:'h7Oqq8MqtutWNDs78LX2q3Nvb6cixXGPrPrqBOTsxofyevz4FtiRSCPW2I0nCMTKLhsxyZynV\/3Wvnpk8GZb2ACCkwHETtRI5HxRwe811xSnRpUA9scEdJ5HZyRjWY5T7bo3pQLrYt18zaHtuvSrTCVlmAC03dElAQv5AioWk5M5oMLQOXpilmRbm3jP8Vk9C6VIrXsBhb5aIH39zU4\/tx+M9UZmjYM8j5+\/q4IHRT6q\/pJyDdgHgBI6IGbUPBiTa20rq\/nTi3+ubS\/ywIak0W8YbEly2kdcPHND5b7c9eef\/j+tcDEBQqCQsOUCiMARL6SN5lP0jKZfkbvtQeSVEZ7y3nqb\/Lrp2w=='
    }
  },
  //all custom text
  herotext:'51xMI.com, Nextjs + tailwind + Notion ',
  saysay:'Moment',//朋友圈的文字
  paytext:'꧁不要咖啡,来个鸡蛋灌饼吧꧂',//文章下面打赏图的文字
  commentText:"❖读而不评则罔,评而不读则殆❖",
  LOGIN2COM:'😇您需要登录后才可以发表评论',
  
  FRIEND_TITLE:'自主填加友链,快来试试吧!',
  FRIEND_SITE: '你的网站:比如 https://51xmi.com',
  FRIEND_ICON: '你的LOGO:比如 https://51xmi.com/favicon.ico',
  FRIEND_CONTENT: '网站介绍',
  FRIEND_FAILED_MESSAGE: '抱歉, 发送失败, 请重试.',

  tag:{  //首页标签的展示用语:标签名称:'展示内容'
    AI:'如何用一句话证明你不是AI？',
    Code:'我们从不生产BUG，我们只是BUG的搬运工',
    Apple:'下个热门 App，也可能出自你手',
    Social:'遇见更好的自己，你是什么人，终将遇见什么样的人',
    Cloudflare:'肉体和心灵, 总有一个在路上',    
  },

}
export default BLOG
