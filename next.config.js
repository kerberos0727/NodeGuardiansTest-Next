/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  staticPageGenerationTimeout: 1000 * 100,
}

module.exports = nextConfig
