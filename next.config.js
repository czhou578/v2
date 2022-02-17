/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/v2/" : "",
  images: {
    loader: 'akamai',
    path: '',
  },
}
