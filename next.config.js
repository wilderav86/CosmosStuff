/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://api.nasa.gov"],
  },
  env: {
    NEXT_PUBLIC_MAXBOX_TOKEN: process.env.NEXT_PUBLIC_MAXBOX_TOKEN,
  },
};

module.exports = nextConfig;
