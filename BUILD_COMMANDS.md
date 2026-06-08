# 🔧 Exact Build Commands with Output Directories

## Project Configuration

```
Project Type: React 19 + Vite + TypeScript
Package Manager: npm (or pnpm, yarn)
Node Version: 18.x or higher
Build Tool: Vite 7.1.9
Output Format: Static HTML/CSS/JS
```

---

## 1️⃣ Installation Command

```bash
npm install
```

**What it does:**
- Installs all dependencies from `package.json`
- Creates `node_modules/` folder
- Generates `package-lock.json`

**Output:**
```
added XXX packages, and audited XXX packages in Xs
```

---

## 2️⃣ Development Command (Local Testing)

```bash
npm run dev
```

**What it does:**
- Starts Vite dev server on http://localhost:3000
- Hot module replacement (HMR) enabled
- Watch mode for file changes

**Output:**
```
VITE v7.1.9  ready in 408 ms

➜  Local:   http://localhost:3000/
➜  Network: http://169.254.0.21:3000/
```

---

## 3️⃣ Production Build Command (MOST IMPORTANT)

```bash
npm run build
```

**What it does:**
1. Compiles React code with TypeScript
2. Bundles CSS with Tailwind
3. Minifies and optimizes for production
4. Outputs to: **`dist/public/`**

**Configuration:**
- Input: `client/src/` (React source code)
- Output Directory: **`dist/public/`** (static files)
- Build Tool: Vite + esbuild

**Output Structure:**
```
dist/public/
├── index.html           (main HTML file)
├── assets/
│   ├── index-XXXXX.js   (minified JavaScript)
│   ├── index-XXXXX.css  (minified CSS)
│   └── ...
└── __manus__/
    └── version.json
```

**Console Output:**
```
vite v7.1.9 building for production...
✓ 123 modules transformed.
dist/public/index.html                    12.45 kB │ gzip: 4.50 kB
dist/public/assets/index-XXXXX.js        456.78 kB │ gzip: 125.34 kB
dist/public/assets/index-XXXXX.css        23.45 kB │ gzip: 5.67 kB
✓ built in 12.34s
```

---

## 4️⃣ Preview Production Build (Local Testing)

```bash
npm run preview
```

**What it does:**
- Runs the production build locally
- Tests if `dist/public/` works correctly
- Serves from: http://localhost:4173

**Output:**
```
  ➜  Local:   http://localhost:4173/
  ➜  Network: http://169.254.0.21:4173/
```

---

## 5️⃣ Type Checking Command

```bash
npm run check
```

**What it does:**
- Checks TypeScript types without building
- Finds type errors before deployment
- Doesn't create output files

**Output (if no errors):**
```
✓ No errors found
```

**Output (if errors found):**
```
client/src/pages/Home.tsx:45:10 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

---

## 6️⃣ Format Code Command

```bash
npm run format
```

**What it does:**
- Formats code with Prettier
- Fixes indentation and spacing
- Modifies files in place

**Output:**
```
client/src/pages/Home.tsx
client/src/App.tsx
client/src/index.css
```

---

## Complete Build Workflow

### For Local Development:

```bash
# Step 1: Install dependencies (first time only)
npm install

# Step 2: Start dev server
npm run dev

# Step 3: Open http://localhost:3000 in browser
# Make changes and see them live!
```

### For Production Deployment:

```bash
# Step 1: Install dependencies
npm install

# Step 2: Check for errors
npm run check

# Step 3: Build for production
npm run build

# Step 4: Preview production build (optional)
npm run preview

# Step 5: Deploy dist/public/ to Vercel
# (Vercel does this automatically)
```

---

## Vercel Deployment Configuration

### vercel.json (Already Created)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install",
  "env": {
    "NODE_ENV": "production"
  },
  "regions": ["sfo1"],
  "functions": {
    "server/index.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### What Vercel Does Automatically:

```
1. Detects: vercel.json
2. Runs: npm install
   └─ Installs dependencies
3. Runs: npm run build
   └─ Creates dist/public/
4. Deploys: dist/public/ to Vercel servers
   └─ Your website is live!
```

---

## Output Directory Explanation

### Build Output: `dist/public/`

This is what gets deployed to Vercel.

**Structure:**
```
dist/
└── public/
    ├── index.html              (Main entry point)
    ├── assets/
    │   ├── index-abc123.js     (React + dependencies)
    │   ├── index-def456.css    (Tailwind CSS)
    │   └── [other assets]
    ├── __manus__/
    │   └── version.json
    └── [other static files]
```

**File Sizes (Typical):**
- `index.html`: 12-15 KB
- `index-*.js`: 400-500 KB (minified)
- `index-*.css`: 20-30 KB (minified)
- **Total**: ~500-600 KB (gzipped: ~130-150 KB)

---

## Environment Variables

### For Vercel Deployment:

No environment variables needed! This is a static site.

**Optional (if you add backend later):**
```
NODE_ENV=production
```

---

## Troubleshooting Build Issues

### Issue: "Build failed"

**Check:**
```bash
# 1. Check for TypeScript errors
npm run check

# 2. Try building locally
npm run build

# 3. Check dist/public/ was created
ls -la dist/public/
```

### Issue: "dist/public/ is empty"

**Solution:**
```bash
# 1. Clean build
rm -rf dist node_modules

# 2. Reinstall
npm install

# 3. Build again
npm run build

# 4. Verify output
ls -la dist/public/
```

### Issue: "Video not loading"

**Note:** Video is stored in Manus cloud storage
- Path: `/manus-storage/worldcup-bg-video_8b15b371.mp4`
- Works automatically in production
- No configuration needed

---

## Vercel Deployment Steps (Using These Commands)

### Step 1: Local Build Test

```bash
npm install
npm run check
npm run build
npm run preview
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select "future-kickoff"
4. Click "Deploy"

**Vercel will automatically:**
```
1. Run: npm install
2. Run: npm run build
3. Deploy: dist/public/
```

---

## Quick Reference Table

| Command | Purpose | Output | Time |
|---------|---------|--------|------|
| `npm install` | Install deps | `node_modules/` | 1-2 min |
| `npm run dev` | Local dev | http://localhost:3000 | instant |
| `npm run build` | Production build | `dist/public/` | 10-15 sec |
| `npm run preview` | Test build | http://localhost:4173 | instant |
| `npm run check` | Type check | Console output | 5-10 sec |
| `npm run format` | Format code | Modified files | 2-5 sec |

---

## Final Checklist Before Deployment

- [ ] Run `npm run check` - no TypeScript errors
- [ ] Run `npm run build` - builds successfully
- [ ] Run `npm run preview` - website looks correct
- [ ] Check `dist/public/` exists and has files
- [ ] Commit all changes: `git add . && git commit -m "..."`
- [ ] Push to GitHub: `git push origin main`
- [ ] Deploy to Vercel: Click "Deploy" button

---

## That's It!

You now have all the exact commands with output directories. Use these for deployment! 🚀
