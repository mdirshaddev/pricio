const { withSentryConfig } = require('@sentry/nextjs');
const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com' // GitHub Avatar
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com' // Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co' // Spotify Album
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com' // Unsplash Images
      }
    ]
  }
};

const nextConfigWithSentry = withSentryConfig(
  nextConfig,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: 'mdirshaddev',
    project: 'mdirshad',
    authToken: process.env.SENTRY_AUTH_TOKEN,
    release: 'mdirshaddev@v' + version + '@' + Date.now()
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true
  }
);

module.exports = nextConfigWithSentry;
