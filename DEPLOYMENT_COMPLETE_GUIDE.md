# 🚀 Complete Deployment Guide for Vercel

This guide covers everything you need to deploy your World Cup 2026 countdown website to Vercel - including build commands, configuration, and step-by-step instructions.

---

## 📋 Table of Contents

1. [Quick Start (3 minutes)](#quick-start)
2. [Build Commands & Configuration](#build-commands--configuration)
3. [Vercel Deployment Steps](#vercel-deployment-steps)
4. [Troubleshooting](#troubleshooting)
5. [FAQ](#faq)

---

## Quick Start

### For Non-Technical Users (Recommended)

**Step 1: Create Vercel Account**
- Go to https://vercel.com
- Click "Sign Up"
- Choose "Continue with GitHub"
- Authorize Vercel

**Step 2: Deploy**
- Go to https://vercel.com/dashboard
- Click "Add New" → "Project"
- Find and click "future-kickoff"
- Click "Deploy"
- Wait 1-2 minutes

**Step 3: Done!**
- Your website is live at the URL shown
- Share it with friends!

---

## Build Commands & Configuration

### Project Structure

```
future-kickoff/
├── client/                 # React frontend code
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx   # Main countdown page
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── index.html
│   └── public/
├── server/                 # Express server (not used for static deployment)
├── package.json           # Dependencies & scripts
├── vite.config.ts         # Build configuration
└── tsconfig.json          # TypeScript configuration
```

### Build Commands

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Development (local testing)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run check

# Format code
npm run format
```

### What Each Command Does

| Command | Purpose | When to Use |
|---------|---------|------------|
| `npm install` | Installs all dependencies | First time setup |
| `npm run dev` | Starts local dev server | Testing locally |
| `npm run build` | Creates production build | Before deployment |
| `npm run preview` | Tests production build locally | Verify build works |
| `npm run check` | Checks TypeScript types | Before committing |
| `npm run format` | Formats code with Prettier | Code cleanup |

---

## Vercel Deployment Steps

### Method 1: Automatic Deployment (Recommended)

Vercel automatically detects and deploys when you push to GitHub.

**Setup (One time):**

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select "future-kickoff" repository
4. Click "Deploy"

**That's it!** Every time you push to GitHub, Vercel automatically redeploys.

### Method 2: Manual Deployment

If you want to deploy without GitHub:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

---

## Vercel Configuration

Vercel automatically detects this is a React + Vite project and uses the correct build settings.

### Default Vercel Settings (Already Configured)

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`
- **Node Version**: 18.x (default)

### If You Need Custom Configuration

Create a `vercel.json` file in the root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install",
  "env": {
    "NODE_ENV": "production"
  }
}
```

---

## Environment Variables

This is a **static website** - no backend required. All environment variables are optional.

**For Vercel:**
- No environment variables needed
- Vercel automatically handles HTTPS
- Vercel automatically handles caching

---

## Vercel Deployment Steps (Detailed)

### Step 1: Prepare Your Code

```bash
# Make sure everything is committed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Vercel

1. Visit https://vercel.com/dashboard
2. Click "Add New" button (top left)
3. Select "Project"

### Step 3: Import Repository

1. Find "future-kickoff" in the list
2. Click "Import"
3. Leave settings as default (Vercel auto-detects)
4. Click "Deploy"

### Step 4: Wait for Deployment

- Vercel will build your project
- Takes 1-3 minutes
- You'll see a progress indicator

### Step 5: Get Your Live URL

Once deployment finishes, you'll see:
```
✅ Production: https://future-kickoff-abc123.vercel.app
```

Click the link to view your live website!

---

## Making Updates

### Update Your Website

1. **Make changes locally**
   ```bash
   # Edit files in client/src/
   # Test with: npm run dev
   ```

2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```

3. **Vercel automatically redeploys**
   - Check https://vercel.com/dashboard
   - Your site updates in 1-2 minutes

---

## Troubleshooting

### Build Fails on Vercel

**Error**: "Build failed"

**Solution**:
1. Check the build logs in Vercel dashboard
2. Make sure all files are committed to GitHub
3. Run `npm run build` locally to test
4. Check for TypeScript errors: `npm run check`

### Website Shows Blank Page

**Error**: Page loads but shows nothing

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Try in incognito/private window
3. Check browser console (F12) for errors
4. Wait a few minutes and refresh

### Video Not Playing

**Error**: Video background doesn't load

**Solution**:
1. Check internet connection
2. Video is stored in Manus cloud - works automatically
3. Try different browser
4. Check browser console for errors

### Notifications Not Working

**Error**: "Stay Tuned" button doesn't show notifications

**Solution**:
1. Check browser notification permissions
2. Some browsers require HTTPS (Vercel provides this)
3. Try in a different browser
4. Notifications may be blocked by browser settings

### Language Toggle Not Working

**Error**: Clicking EN/العربية doesn't change language

**Solution**:
1. Clear browser cache
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Try in incognito window
4. Check browser console (F12) for JavaScript errors

---

## FAQ

### Q: How often can I update my website?
**A**: As often as you want! Just push to GitHub and Vercel redeploys automatically.

### Q: Can I use a custom domain?
**A**: Yes! In Vercel dashboard → Project Settings → Domains → Add custom domain

### Q: Is there a cost?
**A**: No! Vercel offers free hosting for static sites like this.

### Q: How do I see deployment logs?
**A**: Visit https://vercel.com/dashboard → Click your project → Deployments tab

### Q: Can I rollback to an older version?
**A**: Yes! In Vercel dashboard → Deployments → Click "Rollback" on any previous deployment

### Q: What if I accidentally push broken code?
**A**: 
1. Fix the code locally
2. Commit and push to GitHub
3. Vercel automatically redeploys the fixed version

### Q: Can I preview changes before deploying?
**A**: Yes! Run `npm run dev` locally to test before pushing to GitHub

### Q: How do I delete the website?
**A**: In Vercel dashboard → Project Settings → Danger Zone → Delete Project

### Q: Can I export my website?
**A**: Yes! All code is in your GitHub repository: https://github.com/EHSikder/future-kickoff

### Q: How do I add more features?
**A**: 
1. Edit files in `client/src/`
2. Test locally with `npm run dev`
3. Push to GitHub
4. Vercel automatically deploys

---

## Useful Links

- **Your Repository**: https://github.com/EHSikder/future-kickoff
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev

---

## Support

### If Something Goes Wrong

1. **Check Vercel logs**: https://vercel.com/dashboard → Deployments
2. **Check GitHub**: Make sure code is pushed correctly
3. **Check browser console**: Press F12 to see errors
4. **Try clearing cache**: Ctrl+Shift+Delete
5. **Wait a few minutes**: Sometimes Vercel needs time to process

### Getting Help

- Vercel Support: https://vercel.com/support
- React Community: https://react.dev/community
- GitHub Issues: https://github.com/EHSikder/future-kickoff/issues

---

## Next Steps

1. ✅ Code is ready on GitHub
2. ✅ Build commands are configured
3. 🚀 **Deploy to Vercel** (follow steps above)
4. 📱 Share your website with friends!
5. 🎉 Celebrate! Your website is live!

---

**Ready to deploy?** Start with "Quick Start" section above! 🚀
