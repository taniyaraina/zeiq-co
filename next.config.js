const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withYaml = require('next-plugin-yaml');

const nextConfig = {
  images: {
    domains: ['assets.vercel.com'],
  },
  pageExtensions: ['mdx', 'jsx', 'js'],
  devIndicators: {
    autoPrerender: false,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

module.exports = withPlugins([withMDX, withYaml], nextConfig);
