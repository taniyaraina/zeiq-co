const siteUrl = `https://zeiq.co`;

module.exports = {
  siteUrl,
  changefreq: 'daily',
  sitemapSize: 1000,
  generateRobotsTxt: true,
  exclude: [
    '/index',
    '/about',
    '/blog',
    '/services',
    '/work',
    '/about',
    '/contact',
    '/products',
    '/support',
    '/blog/sitemap.xml',
    '/work/sitemap.xml',
    '/technology/sitemap.xml',
    '/page/sitemap.xml',
    '/services/sitemap.xml',
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/page/sitemap.xml`,
      `${siteUrl}/work/sitemap.xml`,
      `${siteUrl}/technology/sitemap.xml`,
      `${siteUrl}/blog/sitemap.xml`,
      `${siteUrl}/services/sitemap.xml`,
    ],
  },
};
