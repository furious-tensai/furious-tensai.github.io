/** @type {import('next').NextConfig} */
const nextConfig = {
  async generateStaticParams({ locales }) {
    return [
      { params: { id: 'first' }, locale: locales[0] },
      { params: { id: 'second' }, locale: locales[0] },
      // etc.
    ];
  },
  assetPrefix: '/furious-tensai.github.io',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
