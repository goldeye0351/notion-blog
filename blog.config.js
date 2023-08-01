const BLOG = {
  title: 'Notion Blog',
  author: 'CCC',
  email: 'admin@mynotion.life',
  link: 'https://mynotion.life',
  description: 'Notion博客网站',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#F6F8FA', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2021, // If leave this empty, current year will be used.
  googleadid:'ca-pub-2287965691379058',
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    contact: true,
    friends: true
  },
  showWeChatPay: true,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  defaultCover: '/mycover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/goldeye0351',
    telegram: 'https://t.me/'
  },
  seo: {
    keywords: ['notion', 'Blog','mynotion.life'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID || '3d9ebf755c044125b8237c2398021b83', // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID ||'3566433aa75e4eaf80684da17d0ff217' , // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'www.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN ||'6050897201:AAF1Ofc03QWLmIXvEtrbVfjOAoTX83Binss', // The token of your Telegram bot
  telegramChatId: '754356243', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/+qhlQu1J3xONkNzYx', // The link of your Telegram channel
  telegramChannelName: '535251', // The name of your Telegram channel

  analytics: {
    provider: 'umami', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: 'G-XMZET1KJPX' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: 'https://umami.mynotion.life/script.js', // The url of your Umami script
      websiteId: '6a873ef2-259b-4e69-a63c-1306d6695bd2', // The website id of your Umami instance
      token:'1TyTJFBdyk4FAjIj0qRFoYRx8OjBrVEHiy8KZLytu41/mn2wGPXrLCAnZcKK/TsFqoh329PX4s2IkvMPkFIeUyYD0ATvo938i+ai6KLOcGtq3XDD/YTJBcskOs+Oc8jkCGzlEvg1P7v/ESqCtBiV/toXvK0A82VG21Ph2NOp1BbXCIvHfJrQ9PxOCecobJqP4kbEdOQQby/8Uh0xoUmvadOlxDMBgW8PXmcSxUFeYq/JrfSx+FLG7mhHcGG+uNJG/MfP7g6vs13bIGH9mluCZ/YzvrVLpde89PoDemv+BcOUz8pY7dwnsQRS8iR2MGvEDVHZQGqhr1vFeMNZXMy4aG66gMxYK7D5gw=='
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://vsjbhkyquwndetkybqxt.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzamJoa3lxdXduZGV0a3licXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1NjkyNDgsImV4cCI6MjAwMjE0NTI0OH0.p992Pul07lKilqIYLYmRfLB584XLf6ABCVedYfjozXU' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
