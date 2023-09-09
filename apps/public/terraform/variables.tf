variable "VERCEL_TOKEN" {
  type        = string
  sensitive   = true
  description = "Vercel API Token for integrating with Vercel"
}

# Weather Service (Start)
variable "WEATHER_API_URL" {
  type        = string
  sensitive   = false
  description = "API url for OpenWeather"
}

variable "WEATHER_API_KEY" {
  type        = string
  sensitive   = true
  description = "API key for OpenWeather"
}

variable "WEATHER_ICON_URL" {
  type        = string
  sensitive   = false
  description = "Icon url for OpenWeather"
}
# Weather Service (End)

# GitHub Service (Start)
variable "GITHUB_REPO_NAME" {
  type        = string
  sensitive   = false
  description = "Name of repository in GitHub"
}

variable "GITHUB_USERNAME" {
  type        = string
  sensitive   = false
  description = "GitHub username"
}

variable "GITHUB_REPO_ID" {
  type        = string
  sensitive   = false
  description = "GitHub repository ID"
}

variable "GITHUB_CLIENT_ID" {
  type        = string
  sensitive   = true
  description = "GitHub Client ID for OAuth"
}

variable "GITHUB_CLIENT_SECRET" {
  type        = string
  sensitive   = true
  description = "GitHub Client Secret for OAuth"
}

variable "GITHUB_GRAPHQL_URL" {
  type        = string
  sensitive   = false
  description = "GitHub GraphQL API URL"
}

variable "GITHUB_TOKEN" {
  type        = string
  sensitive   = true
  description = "GitHub personal access token"
}
# GitHub Service (End)

# Sentry Service (Start)
variable "SENTRY_ORG" {
  type        = string
  sensitive   = false
  description = "Name of organisation in Sentry"
}

variable "SENTRY_PROJECT" {
  type        = string
  sensitive   = false
  description = "Name of Sentry project"
}

variable "SENTRY_DSN" {
  type        = string
  sensitive   = true
  description = "Sentry data source name aka DSN"
}

variable "SENTRY_AUTH_TOKEN" {
  type        = string
  sensitive   = true
  description = "Sentry Auth Token"
}
# Sentry Service (End)

# Rapid API Quotes Service (Start)
variable "RAPID_API_KEY" {
  type        = string
  sensitive   = true
  description = "Rapid API key for quotes generator"
}

variable "RAPID_HOST_URL" {
  type        = string
  sensitive   = false
  description = "Rapid API host for quotes generator"
}
# Rapid API Quotes Service (End)

# Checkly Service (Start)
variable "CHECKLY_ACCOUNT_ID" {
  type        = string
  sensitive   = false
  description = "Checkly Account ID"
}

variable "CHECKLY_API_KEY" {
  type        = string
  sensitive   = true
  description = "Checkly API Key"
}
# Checkly Service (End)

# Cloudinary Service (Start)
variable "CLOUDINARY_URL" {
  type        = string
  sensitive   = false
  description = "Cloudinary image base url"
}
# Cloudinart Service (End)

# Unsplash Service (Start)
variable "UNSPLASH_ACCESS_KEY" {
  type        = string
  sensitive   = true
  description = "Unsplash access key"
}

variable "UNSPLASH_SECRET_KEY" {
  type        = string
  sensitive   = true
  description = "Unsplash secret key"
}
# Unsplash Service (End)

# Spotify Service (Start)
variable "SPOTIFY_CLIENT_ID" {
  type        = string
  sensitive   = true
  description = "Spotify Client ID"
}

variable "SPOTIFY_CLIENT_SECRET" {
  type        = string
  sensitive   = true
  description = "Spotify Client Secret"
}

variable "SPOTIFY_REFRESH_TOKEN" {
  type        = string
  sensitive   = true
  description = "Spotify Refresh Token"
}

variable "SPOTIFY_NOW_PLAYING_ENDPOINT" {
  type        = string
  sensitive   = false
  description = "Spotify now playing endpoint"
}
# Spotify Service (End)

# Google Analytics Production Service (Start)
variable "GOOGLE_ANALYTICS_MEASUREMENT_ID_PROD" {
  type        = string
  sensitive   = false
  description = "Production instance of Google Analytics Measurement ID"
}
# Google Analytics Production Service (End)

# Google Analytics Development Service (Start)
variable "GOOGLE_ANALYTICS_MEASUREMENT_ID_DEV" {
  type        = string
  sensitive   = false
  description = "Development instance of Google Analytics Measurement ID"
}
# Google Analytics Development Service (End)

# Google Analytics Preview Service (Start)
variable "GOOGLE_ANALYTICS_MEASUREMENT_ID_PREVIEW" {
  type        = string
  sensitive   = false
  description = "Preview instance of Google Analytics Measurement ID"
}
# Google Analytics Preview Service (End)

# Firebase production (Start)
variable "FIREBASE_APP_ID_PROD" {
  type = string
  sensitive = false
  description = "Firebase Application ID"
}

variable "FIREBASE_PROJECT_ID_PROD" {
  type = string
  sensitive = false
  description = "Firebase Project ID"
}

variable "FIREBASE_API_KEY_PROD" {
  type = string
  sensitive = true
  description = "Firebase API key"
}

variable "FIREBASE_MESSAGING_SENDER_ID_PROD" {
  type = string
  sensitive = false
  description = "Firebase cloud messaging"
}

variable "FIREBASE_ANALYTICS_PROD" {
  type = string
  sensitive = false
  description = "Firebase analytics"
}
# Firebase production (End)

# Firebase development (Start)
variable "FIREBASE_APP_ID_DEV" {
  type = string
  sensitive = false
  description = "Firebase Application ID"
}

variable "FIREBASE_PROJECT_ID_DEV" {
  type = string
  sensitive = false
  description = "Firebase Project ID"
}

variable "FIREBASE_API_KEY_DEV" {
  type = string
  sensitive = true
  description = "Firebase API key"
}

variable "FIREBASE_MESSAGING_SENDER_ID_DEV" {
  type = string
  sensitive = false
  description = "Firebase cloud messaging"
}

variable "FIREBASE_ANALYTICS_DEV" {
  type = string
  sensitive = false
  description = "Firebase analytics"
}
# Firebase development (End)

# Firebase preview (Start)
variable "FIREBASE_APP_ID_PREVIEW" {
  type = string
  sensitive = false
  description = "Firebase Application ID"
}

variable "FIREBASE_PROJECT_ID_PREVIEW" {
  type = string
  sensitive = false
  description = "Firebase Project ID"
}

variable "FIREBASE_API_KEY_PREVIEW" {
  type = string
  sensitive = true
  description = "Firebase API key"
}

variable "FIREBASE_MESSAGING_SENDER_ID_PREVIEW" {
  type = string
  sensitive = false
  description = "Firebase cloud messaging"
}

variable "FIREBASE_ANALYTICS_PREVIEW" {
  type = string
  sensitive = false
  description = "Firebase analytics"
}
# Firebase preview (End)
