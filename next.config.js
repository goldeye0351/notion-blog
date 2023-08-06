module.exports = {
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    localeDetection: false
  },
  transpilePackages: ['dayjs'],
  images: {
    domains: [ 'www.notion.so', 'unsplash.it','github.com','images.unsplash.com', 's3.us-west-2.amazonaws.com']
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
