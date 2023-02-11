/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer'
import { withPlausibleProxy } from 'next-plausible'

import i18nConfig from './next-i18next.config.js'

const analyzeBundleEnabled = process.env.ANALYZE === 'true'

const config = withPlausibleProxy()({
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [],
    // disabled to avoid Vercel limits
    unoptimized: true,
  },
  i18n: i18nConfig.i18n,
})

const nextConfig = withBundleAnalyzer({
  enabled: analyzeBundleEnabled,
})(config)

export default nextConfig
