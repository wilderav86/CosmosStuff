/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://api.nasa.gov"],
  },
};

module.exports = nextConfig;
