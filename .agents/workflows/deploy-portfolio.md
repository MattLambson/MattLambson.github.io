---
description: How to deploy the Next.js portfolio to GitHub Pages 
---

# Deploying the Portfolio

The Matt Lambson portfolio was rebuilt using Next.js 14 and is located in the `portfolio/` subdirectory. However, it is hosted from the root of `MattLambson.github.io`.

## Option 1: Automated (GitHub Actions)
The repository is configured with `.github/workflows/deploy.yml`. When code is pushed to the `main` branch, it automatically builds the Next.js `portfolio` folder and publishes the static `out/` folder to GitHub Pages.

**Important**: The user must ensure that their GitHub repository settings are configured correctly: `Settings > Pages > Source` must be set to `GitHub Actions`.

## Option 2: Manual Build (Fallback)
If automation fails and you need to deploy the portfolio manually to the root, run the following steps to build the static export and copy the files to the root of the repository:

```bash
cd /Users/mattlambson/Documents/GitHub/MattLambson.github.io/portfolio
npm run build
cp -R out/* ../
```
After copying, you **MUST** ask the user for explicit permission before attempting to run `git commit` or `git push`. 

> [!WARNING]
> DO NOT auto-run `git push` or `git commit` under any circumstances. Always await user permission.
