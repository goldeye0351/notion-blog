const BLOG = require('./blog.config')

module.exports = {
  siteUrl: BLOG.link,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000
}
