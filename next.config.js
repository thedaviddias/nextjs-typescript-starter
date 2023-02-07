// @ts-check

/** @type {import('next').NextConfig} */

const { withPlausibleProxy } = require('next-plausible')

const plausiblePlugin = withPlausibleProxy

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  }

  // To add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // }
}

module.exports = () => {
	const plugins = [
    plausiblePlugin
  ]

	return nextConfig;
};
