const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
