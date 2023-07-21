const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.tangly1024.com' },
    { title: '访问文档中心获取更多帮助', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享编程',
  HERO_TITLE_2: '与思维认知',
  HERO_TITLE_3: 'TANGLY1024.COM',
  HERO_TITLE_4: '新版上线',
  HERO_TITLE_5: 'NotionNext4.0 轻松定制主题',
  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HERO_CATEGORY_3: { title: '使用教程', url: '/tag/实用教程' },

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/1.png',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/2.png',
      color_2: '#989bf8'
    },
    {
      title_1: 'Docker',
      img_1: '/3.png',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/4.png',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/1.png',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/2.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/3.png',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/3.png',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/4.png',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/4.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/1.png',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/1.png',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/1.png',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/3.png',
      color_2: '#989bf8'
    }
  ],

}
export default CONFIG
