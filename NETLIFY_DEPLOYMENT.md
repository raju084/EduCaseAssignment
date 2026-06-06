# Netlify Deployment Guide

This project is a React application built with Vite and Tailwind CSS. It is ready for deployment on Netlify.

## Manual Deployment via Netlify CLI

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install netlify-cli -g
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy the project**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Automatic Deployment via GitHub (Recommended)

1. **Push your code to GitHub**.
2. **Login to Netlify** and click **"Add new site"** > **"Import an existing project"**.
3. Select your repository from GitHub.
4. Configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

## Client-Side Routing Fix

If you use React Router and encounter 404 errors on page refresh, I have already included a `public/_redirects` file to handle these. Netlify will automatically detect this.

---
*Created by Antigravity*
