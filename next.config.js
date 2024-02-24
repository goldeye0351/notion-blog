module.exports = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false
  },
  transpilePackages: ['dayjs'],
  images: {
    domains: [ 'www.notion.so',
     'images.unsplash.com', 
     's3.us-west-2.amazonaws.com',
     'gravatar.com',
     'www.gravatar.com',
     'secure.gravatar.com',
      'avatars.githubusercontent.com',
      'source.unsplash.com',
      'p1.qhimg.com',
      'webmention.io',
      'picsum.photos',
      'q1.qlogo.cn',
      'github.io',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'goldeye0351.github.io',
      'raw.githubusercontent.com',
      'pichub.51xmi.com',
      'tool.oschina.net',
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      
    ]
  }
}
