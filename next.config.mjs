/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.notion.so',
          },
          {
            protocol: 'https',
            hostname: 's3-us-west-2.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: '51xmi.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'http',
            hostname: 'static.anzifan.com',
          },
          {
            protocol: 'https',
            hostname: 'pichub.51xmi.com',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'goldeye0351.github.io',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
          },
          {
            protocol: 'https',
            hostname: 'video.twimg.com',
          },
          {
            protocol: 'https',
            hostname: 'www.gravatar.com',
          },
          {
            protocol: 'https',
            hostname: 'tool.oschina.net',
          },
          {
            protocol: 'http',
            hostname: 'q1.qlogo.cn',
          },
          {
            protocol: 'https',
            hostname: 'ko-fi.com',
          },
          {
            protocol: 'https',
            hostname: 'stripe.com',
          },
        ],
      },

};

export default nextConfig;
