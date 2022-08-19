/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://api.nasa.gov",
      "https://api.jwstapi.com",
      "stpubdata-jwst.stsci.edu",
    ],
  },
  env: {
    NEXT_PUBLIC_MAXBOX_TOKEN: process.env.NEXT_PUBLIC_MAXBOX_TOKEN,
    JAMES_WEBB_TOKEN: process.env.JAMES_WEBB_TOKEN,
  },
};

module.exports = nextConfig;
