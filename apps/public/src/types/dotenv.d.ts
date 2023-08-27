declare module NodeJS {
  interface ProcessEnv {
    // Weather
    NEXT_PUBLIC_WEATHER_API_URL: string;
    NEXT_PUBLIC_WEATHER_API_KEY: string;
    NEXT_PUBLIC_WEATHER_ICON_URL: string;

    // GitHub
    NEXT_PUBLIC_GITHUB_REPONAME: string;
    NEXT_PUBLIC_GITHUB_USERNAME: string;
    NEXT_PUBLIC_GITHUB_REPO_ID: string;
    NEXT_PUBLIC_GITHUB_CLIENT_ID: string;
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string;
    NEXT_PUBLIC_GITHUB_GRAPHQL_URL: string;
    NEXT_PUBLIC_GITHUB_TOKEN: string;

    // Sentry
    NEXT_PUBLIC_SENTRY_ORG: string;
    NEXT_PUBLIC_SENTRY_PROJECT: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
    SENTRY_AUTH_TOKEN: string;

    // Rapid API
    NEXT_PUBLIC_RAPID_API_KEY: string;
    NEXT_PUBLIC_RAPID_API_HOST: string;

    // Checkly
    CHECKLY_ACCOUNT_ID: string;
    CHECKLY_API_KEY: string;

    // Cloudinary
    NEXT_PUBLIC_CLOUDINARY_URL: string;

    // Unsplash
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: string;
    NEXT_PUBLIC_UNSPLASH_SECRET_KEY: string;

    // Spotify
    NEXT_PUBLIC_SPOTIFY_CLIENT_ID: string;
    NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: string;
    NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: string;
    NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT: string;

    // Google Analytics
    NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
  }
}
