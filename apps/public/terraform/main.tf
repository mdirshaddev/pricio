terraform {
  cloud {
    hostname = "app.terraform.io"

    organization = "mdirshaddev"

    workspaces {
      name = "mdirshad"
    }
  }

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.15"
    }
  }
}
