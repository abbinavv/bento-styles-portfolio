# 🎨 Modern Portfolio - Abhinav Raj

A stunning, premium portfolio featuring a dynamic Bento grid layout with interactive WebGL particle effects. Built with Next.js 16, React 18, TypeScript, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff69b4)

## ✨ Features

- 🎯 **Bento Grid Layout** - Apple-inspired card-based design
- � **WebGL Particles** - Interactive 3D particle background using OGL
- 🎨 **Premium Design** - Dark sci-fi aesthetic with electric aqua accents
- 🔮 **GSAP Effects** - Particle cards with spotlight, tilt, and magnetism
- 🌓 **Light/Dark Theme** - Seamless theme switching with system detection
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- ⚡ **High Performance** - GPU-accelerated WebGL rendering
- 🎬 **Smooth Animations** - Framer Motion page transitions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 🎨 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: OGL (WebGL library)
- **Icons**: Lucide React

## 📁 Project Structure

```
bentobasedportfolio/
├── app/
│   ├── about/              # About page
│   ├── academics/          # Academic achievements
│   ├── experience/         # Professional experience
│   ├── projects/           # Projects overview & detail pages
│   ├── contact/            # Contact page
│   ├── cards/              # Individual card components
│   ├── components/         # Core components (Footer, ThemeToggle)
│   ├── layout.tsx          # Root layout with Particles
│   ├── page.tsx            # Homepage with Bento grid
│   ├── globals.css         # Global styles
│   └── magic-bento.css     # GSAP particle card effects
├── lib/
│   ├── types.ts           # TypeScript definitions
│   ├── cardData.ts        # Card configuration
│   └── config.ts          # Personal info & settings
└── public/
    └── images/            # Static assets
```

## 🎨 Customization

1. **Update your info** - Edit `lib/config.ts`
2. **Customize cards** - Edit components in `app/cards/`
3. **Add projects** - Edit project pages in `app/projects/`
4. **Change colors** - Edit `app/globals.css`

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Deploy on Vercel
# Import your repo at vercel.com
```

### Build for Production
```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📱 Card Types

- **About Card** - Personal introduction with interactive button
- **Spotify Card** - Currently listening display
- **Location Card** - Animated location indicator
- **Project Cards** - Showcase your work
- **Story Card** - Featured article
- **Media Cards** - Photo galleries
- **Newsletter Card** - Email subscription
- **Contact Card** - Social links
- **Theme Toggle** - Light/dark mode

## ✅ Quick Checklist

- [ ] Update personal info in `lib/config.ts`
- [ ] Customize project details
- [ ] Add your images to `public/images/`
- [ ] Update contact links
- [ ] Test on mobile devices
- [ ] Deploy to Vercel

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

MIT License - Free to use for personal portfolios

---

**Built with ❤️ using Next.js and Framer Motion**
