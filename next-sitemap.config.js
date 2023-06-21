const BLOG = require('./blog.config')

module.exports = {
  siteUrl: BLOG.link,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000
}
