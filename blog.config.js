const BLOG = {
  title: 'Notion Blog',
  description: 'Notion博客网站',
  blogtitle: 'Notion Blog 首页',
  blogdescription: 'Notion博客网站，一个有料的网站',
  author: 'CCC',
  email: 'admin@mynotion.life',
  link: 'https://mynotion.life',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty 
  googleadid:'', // google ad id,   leave this empty 
  sortByDate: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  defaultCover: '/mycover.jpg',
  defaultIcon: '/favicon.png',
  seo: {
    keywords: ['notion', 'Blog','mynotion.life'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionDatabaseId: process.env.NOTION_DATABASE_ID || '', // DO NOT CHANGE THIS! Edit .env file!
  notionCommentId: process.env.NOTION_COMMENT_ID || '', // DO NOT CHANGE THIS! Edit .env file! 
  notionSpacesId: process.env.NOTION_SPACES_ID ||'' , // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_TOKEN || '', // Useful if you prefer not to make your database public
  notionDomain: 'www.notion.site',
  //telegram . page 'contact me' use it 
  telegramToken: process.env.TELEGRAM_TOKEN ||'', // The token of your Telegram bot
  telegramChatId: '754356243', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/+qhlQu1J3xONkNzYx', // The link of your Telegram channel
  telegramChannelName: '535251', // The name of your Telegram channel

  analytics: {
    provider: 'umami', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    umamiConfig: {
      scriptUrl: 'https://umami.mynotion.life/script.js', // The url of your Umami script
      websiteId: '6a873ef2-259b-4e69-a63c-1306d6695bd2', // The website id of your Umami instance
      token:'h7Oqq8MqtutWNDs78LX2q3Nvb6cixXGPrPrqBOTsxofyevz4FtiRSCPW2I0nCMTKLhsxyZynV\/3Wvnpk8GZb2ACCkwHETtRI5HxRwe811xSnRpUA9scEdJ5HZyRjWY5T7bo3pQLrYt18zaHtuvSrTCVlmAC03dElAQv5AioWk5M5oMLQOXpilmRbm3jP8Vk9C6VIrXsBhb5aIH39zU4\/tx+M9UZmjYM8j5+\/q4IHRT6q\/pJyDdgHgBI6IGbUPBiTa20rq\/nTi3+ubS\/ywIak0W8YbEly2kdcPHND5b7c9eef\/j+tcDEBQqCQsOUCiMARL6SN5lP0jKZfkbvtQeSVEZ7y3nqb\/Lrp2w=='
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
