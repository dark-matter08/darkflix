/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com", "rb.gy", "image.tmdb.org"],
    loader: "custom",
    path: "/",
  },
};

module.exports = nextConfig;
