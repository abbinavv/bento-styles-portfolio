# 🚀 SETUP GUIDE

## Complete Installation & Customization Guide

### 📦 Step 1: Initial Setup

1. **Navigate to your project**
   ```bash
   cd /Users/user86/Documents/bentobasedportfolio
   ```

2. **Install dependencies** (if not already done)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to http://localhost:3000
   - You should see your portfolio with draggable cards!

---

## 🎨 Customization Steps

### 1. Personal Information

#### Update About Card
**File:** `app/cards/AboutCard.tsx`
```tsx
// Line 21-23: Update your name and title
<h2 className="text-2xl font-bold text-foreground mb-1">Your Name</h2>
<p className="text-sm text-muted-foreground">Developer & Entrepreneur</p>
```

#### Update Location Card
**File:** `app/cards/LocationCard.tsx`
```tsx
// Line 30-31: Update your location
<p className="text-2xl font-bold text-blue-500">Your City</p>
<p className="text-sm text-muted-foreground mt-1">Your Country</p>
```

#### Update Contact Card
**File:** `app/cards/ContactCard.tsx`
```tsx
// Update all contact links (lines 29, 35, 50, 56, 70, 76)
- Email: contact@example.com
- GitHub: @yourusername
- LinkedIn: @yourprofile
```

### 2. Project Information

Each project card has two parts:
1. **Card component** - Shows in the grid
2. **Detail page** - Full project description

#### Project Cards
**File:** `app/cards/ProjectCard.tsx`
- Lines 77-85: Atlitos project
- Lines 87-95: EnVision project
- Lines 97-105: Air Hockey project
- Lines 107-115: Hydroponics project

#### Project Detail Pages
- `app/projects/atlitos/page.tsx`
- `app/projects/envision/page.tsx`
- `app/projects/airhockey/page.tsx`
- `app/projects/hydroponics/page.tsx`

**What to update in each:**
- Project title and description
- Technology tags
- GitHub and demo links
- Overview section
- Key features
- Technical details

### 3. Spotify Card (Optional)

**File:** `app/cards/SpotifyCard.tsx`

**Static version (current):**
```tsx
// Lines 28-31: Update with your favorite song
<h3 className="font-semibold text-foreground">Your Favorite Song</h3>
<p className="text-sm text-muted-foreground">Artist Name</p>
```

**To connect real Spotify API:**
1. Get Spotify API credentials from https://developer.spotify.com
2. Install spotify-web-api-node: `npm install spotify-web-api-node`
3. Create API route: `app/api/spotify/route.ts`
4. Fetch currently playing track

### 4. Newsletter Functionality

**File:** `app/cards/NewsletterCard.tsx`

**Current:** Form submission shows success message

**To add email collection:**

Option 1 - Email Service (Recommended):
```bash
npm install resend
```

Create `app/api/subscribe/route.ts`:
```tsx
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();
  
  // Add to your email list
  await resend.contacts.create({
    email,
    audienceId: 'your-audience-id',
  });
  
  return Response.json({ success: true });
}
```

Option 2 - Simple Database:
- Use Supabase, MongoDB, or Firebase
- Store email subscriptions in a database

### 5. Media Cards

**File:** `app/cards/MediaCard.tsx`

**To add real images:**
1. Add images to `public/images/` folder
2. Update MediaCard components:

```tsx
export function MediaCard1() {
  return (
    <MediaCard
      title="Product Screenshots"
      description="Latest UI designs"
      imageUrl="/images/screenshot1.png"  // Add this
    />
  );
}
```

### 6. Footer Links

**File:** `app/components/Footer.tsx`

Update lines 12-34 with your actual links:
- GitHub URL
- LinkedIn URL
- Email address

---

## 🎨 Theme Customization

### Color Scheme

**File:** `app/globals.css`

Change the color variables (lines 4-19 for light mode, 21-34 for dark mode):

```css
:root {
  --primary: 240 5.9% 10%;      /* Main brand color */
  --secondary: 240 4.8% 95.9%;  /* Secondary surfaces */
  --accent: 240 4.8% 95.9%;     /* Accent highlights */
  /* ... more colors */
}
```

**Popular color schemes:**

**Blue Theme:**
```css
--primary: 221 83% 53%;  /* #3B82F6 */
```

**Purple Theme:**
```css
--primary: 262 83% 58%;  /* #A855F7 */
```

**Green Theme:**
```css
--primary: 142 71% 45%;  /* #10B981 */
```

### Typography

**File:** `app/layout.tsx`

Current: Inter font (clean and modern)

To change:
```tsx
import { Outfit } from "next/font/google";  // Or any Google Font

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
```

---

## 📐 Grid Customization

### Change Card Layout

**File:** `lib/cardData.ts`

Each card has:
- `id`: Unique identifier
- `category`: "All" | "About" | "Projects" | "Media" | "Contact"
- `size`: "1x1" | "2x1" | "1x2" | "2x2"
- `component`: The React component
- `order`: Display order

**Example - Make About Card smaller:**
```tsx
{
  id: "about",
  category: "About",
  size: "2x1",  // Change from "2x2" to "2x1"
  component: AboutCard,
  order: 1,
}
```

### Add New Category Filter

1. **Update types** - `lib/types.ts`:
```tsx
export type CardCategory = "All" | "About" | "Projects" | "Media" | "Contact" | "Blog";
```

2. **Update Navbar** - `app/components/Navbar.tsx`:
```tsx
const filters: CardCategory[] = ["All", "About", "Projects", "Media", "Contact", "Blog"];
```

3. **Add cards with new category** in `lib/cardData.ts`

---

## 🔧 Advanced Features

### 1. Add Animation Variants

**File:** Any card component

```tsx
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export function MyCard() {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      {/* content */}
    </motion.div>
  );
}
```

### 2. Add Page Transitions

**Create:** `app/components/PageTransition.tsx`

```tsx
"use client";

import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

### 3. Add Analytics

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

**File:** `app/layout.tsx`
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Custom Domain:**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`

### Deploy to Your Own Server

```bash
npm run build
npm start
```

---

## 📱 SEO & Meta Tags

**File:** `app/layout.tsx`

Update metadata (lines 11-15):
```tsx
export const metadata: Metadata = {
  title: "Your Name - Developer & Entrepreneur",
  description: "Portfolio showcasing innovative projects in web development, IoT, and AI.",
  keywords: ["your name", "developer", "portfolio", "projects"],
  openGraph: {
    title: "Your Name Portfolio",
    description: "Innovative developer and entrepreneur",
    images: ["/og-image.png"],
  },
};
```

---

## 🐛 Troubleshooting

### Cards not dragging?
- Check if Framer Motion is installed: `npm list framer-motion`
- Make sure you're not in mobile view (drag is optimized for desktop)

### Theme not switching?
- Clear localStorage: Open DevTools → Console → `localStorage.clear()`
- Refresh the page

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling issues?
- Make sure Tailwind CSS is properly configured
- Check `tailwind.config.ts` content paths

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)

---

## 💡 Tips

1. **Start with personalization** - Update your info first
2. **Test on mobile** - Ensure responsive design works
3. **Optimize images** - Use Next.js Image component
4. **Add loading states** - For better UX
5. **Test theme switching** - In both light and dark modes

---

Need help? Check the main README.md or open an issue on GitHub!
