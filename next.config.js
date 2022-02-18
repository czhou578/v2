/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "https://www.czhou578.com" : "",
  images: {
    loader: 'akamai',
    path: '/',
  },
}
