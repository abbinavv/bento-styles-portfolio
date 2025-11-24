# ⚡ QUICK COMMANDS

Quick reference for common tasks.

## 🚀 Development

```bash
# Start dev server (already running!)
npm run dev

# Open in browser
open http://localhost:3000

# Stop server
# Press Ctrl+C in terminal
```

## 🎨 Customization

```bash
# Edit your personal info
code lib/config.ts

# Edit a specific card
code app/cards/AboutCard.tsx

# Change theme colors
code app/globals.css
```

## 🔍 Testing

```bash
# Build for production (test for errors)
npm run build

# Run production build locally
npm start

# Type checking
npx tsc --noEmit

# Lint code
npm run lint
```

## 📦 Deployment

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio setup"

# Create GitHub repo (do this on github.com first)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main

# Deploy on Vercel
# Go to vercel.com → Import Project → Select repo → Deploy
```

## 🔄 Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

## 🧹 Cleanup

```bash
# Clean build cache
rm -rf .next

# Clean dependencies
rm -rf node_modules

# Reinstall
npm install

# Fresh build
npm run build
```

## 📱 Testing on Mobile

```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
# or
ip addr show  # Linux
# or
ipconfig  # Windows

# Then visit on mobile:
# http://YOUR_IP:3000
```

## 🎯 Quick Edits

### Update Your Name
```bash
# Open config file
open lib/config.ts
# Change line 6: name: "Your Name Here"
```

### Add a New Project
```bash
# 1. Add to config
open lib/config.ts
# Add new project object

# 2. Create detail page
mkdir app/projects/newproject
code app/projects/newproject/page.tsx
# Copy from another project page

# 3. Add to card data
open lib/cardData.ts
# Add new card entry
```

### Change Theme Colors
```bash
# Edit global CSS
open app/globals.css
# Lines 4-19: Light mode colors
# Lines 21-34: Dark mode colors
```

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or use different port
npm run dev -- -p 3001
```

### Theme not saving
```bash
# Clear localStorage in browser DevTools:
# Console → localStorage.clear() → Refresh
```

### Build errors
```bash
# Clean and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit

# Restart VS Code TypeScript server
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

## 📝 Common File Paths

```
Personal Info:     lib/config.ts
About Card:        app/cards/AboutCard.tsx
Projects:          app/cards/ProjectCard.tsx
Navbar:            app/components/Navbar.tsx
Theme Colors:      app/globals.css
Card Config:       lib/cardData.ts
Main Page:         app/page.tsx
Layout:            app/layout.tsx
```

## 🎨 Tailwind Classes Quick Reference

```css
/* Sizes */
w-full h-full        /* Full width/height */
w-16 h-16            /* Fixed size */
p-6 px-4 py-2        /* Padding */
gap-4 space-y-4      /* Spacing */

/* Colors */
bg-background        /* Background color */
text-foreground      /* Text color */
text-primary         /* Primary color */
border-border        /* Border color */

/* Layout */
flex flex-col        /* Flexbox column */
grid grid-cols-4     /* Grid layout */
justify-center       /* Center content */
items-center         /* Center items */

/* Effects */
hover:scale-110      /* Hover scale */
rounded-xl           /* Border radius */
shadow-lg            /* Shadow */
transition-all       /* Smooth transitions */
```

## 🔗 Useful Links

- Local Dev: http://localhost:3000
- Vercel: https://vercel.com
- GitHub: https://github.com
- Tailwind Docs: https://tailwindcss.com
- Framer Motion: https://framer.com/motion
- Next.js Docs: https://nextjs.org/docs

---

**Pro Tip:** Keep this file open in a separate tab for quick reference!
