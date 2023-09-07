const path = require('path');
const withPWAConfig = require('next-pwa');
const { version } = require('./package.json');
const { withSentryConfig } = require('@sentry/nextjs');

/**
 * The function `generateAppDirEntry` registers a service worker on the app directory in a Next.js
 * project.
 * @returns The function `generateAppDirEntry` returns a promise that resolves to an object containing
 * the entries.
 */
const generateAppDirEntry = entry => {
  const packagePath = require.resolve('next-pwa');
  const packageDirectory = path.dirname(packagePath);
  const registerJs = path.join(packageDirectory, 'register.js');

  return entry().then(entries => {
    // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
    if (entries['main-app'] && !entries['main-app'].includes(registerJs)) {
      if (Array.isArray(entries['main-app'])) {
        entries['main-app'].unshift(registerJs);
      } else if (typeof entries['main-app'] === 'string') {
        entries['main-app'] = [registerJs, entries['main-app']];
      }
    }
    return entries;
  });
};

/* The code block you provided is defining the `nextConfig` object, which is a configuration object for
Next.js. It specifies various settings and options for the Next.js application. */
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
  },
  webpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const entry = generateAppDirEntry(config.entry);
      config.entry = () => entry;
    }
    return config;
  }
};

/* The code block you provided is creating a configuration object for Next.js with the help of the
`withPWAConfig` function from the `next-pwa` package. This configuration object is used to enable
Progressive Web App (PWA) features in the Next.js application. */
/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAConfig({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ['app-build-manifest.json'],
  register: false,
  skipWaiting: false,
  clientsClaim: true,
  // Use inject manifest as we are using custom service worker
  swSrc: './src/services/worker/service-worker.js'
});

/* The code block `module.exports = withSentryConfig(...)` is exporting a modified version of the
`nextConfig` object with additional configurations for Sentry, a popular error tracking and
monitoring tool. */
module.exports = withSentryConfig(
  withPWA(nextConfig),
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
