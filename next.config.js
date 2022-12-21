/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compilerOptions: {
    baseUrl: "src"
  },
  include: ["src"],
  pageExtensions: ['jsx','tsx'],
}

module.exports = nextConfig
