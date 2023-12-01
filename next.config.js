/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: function () {
      return {
         "/": { page: "/" }
      };
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
