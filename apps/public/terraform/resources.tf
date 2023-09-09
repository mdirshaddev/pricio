resource "vercel_project" "mdirshad" {
  name      = "mdirshad"
  framework = "nextjs"

  root_directory             = "apps/public"
  serverless_function_region = "bom1"
  build_command = "pnpm vercel-build"

  ignore_command = <<-EOF
    #!/bin/bash
    
    echo "VERCEL_ENV: $VERCEL_ENV"
    
    if [[ "$VERCEL_ENV" == "production" ]] ; then
      # Proceed with the build
      echo "✅ - Build can proceed"
      exit 1;
    
    else
      # Don't build
      echo "🛑 - Build cancelled"
      exit 0;
    fi
  EOF

  environment = [{
    key    = "NEXT_PUBLIC_WEATHER_API_URL"
    value  = var.WEATHER_API_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_WEATHER_API_KEY"
    value  = var.WEATHER_API_KEY
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_WEATHER_ICON_URL"
    value  = var.WEATHER_ICON_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_REPONAME"
    value  = var.GITHUB_REPO_NAME
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_USERNAME"
    value  = var.GITHUB_USERNAME
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_REPO_ID"
    value  = var.GITHUB_REPO_ID
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_CLIENT_ID"
    value  = var.GITHUB_CLIENT_ID
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_CLIENT_SECRET"
    value  = var.GITHUB_CLIENT_SECRET
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_GRAPHQL_URL"
    value  = var.GITHUB_GRAPHQL_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GITHUB_TOKEN"
    value  = var.GITHUB_TOKEN
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SENTRY_ORG"
    value  = var.SENTRY_ORG
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SENTRY_PROJECT"
    value  = var.SENTRY_PROJECT
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SENTRY_DSN"
    value  = var.SENTRY_DSN
    target = ["production", "preview", "development"]
    }, {
    key    = "SENTRY_AUTH_TOKEN"
    value  = var.SENTRY_AUTH_TOKEN
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_QUOTE_HOST_URL"
    value  = var.RAPID_HOST_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_QUOTE_API_KEY"
    value  = var.RAPID_API_KEY
    target = ["production", "preview", "development"]
    }, {
    key    = "CHECKLY_ACCOUNT_ID"
    value  = var.CHECKLY_ACCOUNT_ID
    target = ["production", "preview", "development"]
    }, {
    key    = "CHECKLY_API_KEY"
    value  = var.CHECKLY_API_KEY
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_CLOUDINARY_URL"
    value  = var.CLOUDINARY_URL
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY"
    value  = var.UNSPLASH_ACCESS_KEY
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_UNSPLASH_SECRET_KEY"
    value  = var.UNSPLASH_SECRET_KEY
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SPOTIFY_CLIENT_ID"
    value  = var.SPOTIFY_CLIENT_ID
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET"
    value  = var.SPOTIFY_CLIENT_SECRET
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN"
    value  = var.SPOTIFY_REFRESH_TOKEN
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_SPOTIFY_NOW_PLAYING_ENDPOINT"
    value  = var.SPOTIFY_NOW_PLAYING_ENDPOINT
    target = ["production", "preview", "development"]
    }, {
    key    = "NEXT_PUBLIC_GOOGLE_ANALYTICS"
    value  = var.GOOGLE_ANALYTICS_MEASUREMENT_ID_PROD
    target = ["production"]
    }, {
    key    = "NEXT_PUBLIC_GOOGLE_ANALYTICS"
    value  = var.GOOGLE_ANALYTICS_MEASUREMENT_ID_DEV
    target = ["development"]
    },{
    key    = "NEXT_PUBLIC_GOOGLE_ANALYTICS"
    value  = var.GOOGLE_ANALYTICS_MEASUREMENT_ID_PREVIEW
    target = ["preview"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_APP_ID"
    value  = var.FIREBASE_APP_ID_PROD
    target = ["production"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_APP_ID"
    value  = var.FIREBASE_APP_ID_DEV
    target = ["development"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_APP_ID"
    value  = var.FIREBASE_APP_ID_PREVIEW
    target = ["preview"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
    value  = var.FIREBASE_PROJECT_ID_PROD
    target = ["production"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
    value  = var.FIREBASE_PROJECT_ID_DEV
    target = ["development"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_PROJECT_ID"
    value  = var.FIREBASE_PROJECT_ID_PREVIEW
    target = ["preview"]
  }, {
    key    = "NEXT_PUBLIC_FIREBASE_API_KEY"
    value  = var.FIREBASE_API_KEY_PROD
    target = ["production"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_API_KEY"
    value  = var.FIREBASE_API_KEY_DEV
    target = ["development"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_API_KEY"
    value  = var.FIREBASE_API_KEY_PREVIEW
    target = ["preview"]
  },{
    key    = "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    value  = var.FIREBASE_MESSAGING_SENDER_ID_PROD
    target = ["production"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    value  = var.FIREBASE_MESSAGING_SENDER_ID_DEV
    target = ["development"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    value  = var.FIREBASE_MESSAGING_SENDER_ID_PREVIEW
    target = ["preview"]
  },{
    key    = "NEXT_PUBLIC_FIREBASE_ANALYTICS"
    value  = var.FIREBASE_ANALYTICS_PROD
    target = ["production"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_ANALYTICS"
    value  = var.FIREBASE_ANALYTICS_DEV
    target = ["development"]
    }, {
    key    = "NEXT_PUBLIC_FIREBASE_ANALYTICS"
    value  = var.FIREBASE_ANALYTICS_PREVIEW
    target = ["preview"]
  }]

  git_repository = {
    type = "github"
    repo = "mdirshaddev/mdirshad"
  }
}
