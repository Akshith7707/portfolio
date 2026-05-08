# Akshith Reddy Ponna — Portfolio

Premium next-generation portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js — click Deploy
5. Set custom domain to `itsakshith.dev`

### Environment Variables (if needed)
No environment variables required for the base portfolio.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Fonts:** Inter, Space Grotesk

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system & global styles
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── CodingSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── FocusSection.tsx
│   │   └── ContactSection.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── LoadingScreen.tsx
│   ├── SmoothScroll.tsx
│   ├── CursorGlow.tsx
│   ├── ScrollProgress.tsx
│   ├── CommandPalette.tsx
│   └── DockNavigation.tsx
├── hooks/
│   └── useAnimations.ts
└── lib/
    ├── animations.ts
    ├── constants.ts
    └── utils.ts
```

## Features

- ✅ Premium dark mode design
- ✅ Smooth scroll with Lenis
- ✅ Framer Motion animations
- ✅ Scroll-triggered reveals
- ✅ Typewriter effect
- ✅ Command palette (⌘K)
- ✅ Cursor glow effect
- ✅ Scroll progress indicator
- ✅ Floating tech badges
- ✅ Magnetic button interactions
- ✅ Glassmorphism cards
- ✅ Animated grid background
- ✅ Mobile dock navigation
- ✅ Project case study modals
- ✅ Animated counters
- ✅ Contact form with mailto
- ✅ SEO optimized (OpenGraph, Schema.org)
- ✅ Fully responsive
- ✅ Vercel deployment ready

## Customization

### Update Personal Info
Edit `src/lib/constants.ts` to update:
- Personal details
- Skills
- Projects
- Certifications
- Focus areas

### Add Resume
Place your resume PDF in the `public/` directory and update the resume download link in `HeroSection.tsx`.

### Custom Domain
After deploying to Vercel, add `itsakshith.dev` as a custom domain in your Vercel project settings.

## License

MIT
