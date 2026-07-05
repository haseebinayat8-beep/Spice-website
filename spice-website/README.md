# Spice — Food Delivery Marketing Website

A premium, fully responsive marketing website for the **Spice** food delivery
app, built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 +
Framer Motion**.

---

## What's included

- **4 pages**: Home, About, Menu, Support — each with several sections
  as specified in the brief.
- **Design system**: red/white/black/gray palette, bold display type, glass
  navbar, premium shadows, rounded cards.
- **Animations**: fade up/in, slide left/right, scale, parallax-style floats,
  hover micro-interactions — all via Framer Motion.
- **Extras**: dark mode toggle, back-to-top button, sticky glass navbar,
  scroll progress bar, loading screen, custom cursor (desktop), glassmorphism,
  reusable components throughout.
- **SEO**: semantic HTML, per-page metadata, Open Graph tags, `sitemap.xml`,
  `robots.txt`.
- **iPhone mockups**: a reusable `PhoneMockup` component used in the Hero and
  the App Showcase slider — see "Adding your screenshots" below.

---

## Folder structure

```
spice-website/
├── public/
│   └── screens/              # put your app screenshots here
│       ├── splash.png
│       ├── home.png
│       ├── chatbot.png
│       ├── cart.png
│       ├── checkout.png
│       ├── register.png
│       └── profile.png
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout: navbar, footer, providers
│   │   ├── page.tsx           # Home page (assembles all home sections)
│   │   ├── globals.css        # Design tokens, fonts, utilities
│   │   ├── robots.ts          # robots.txt generator
│   │   ├── sitemap.ts         # sitemap.xml generator
│   │   ├── about/
│   │   │   ├── layout.tsx     # Page metadata
│   │   │   └── page.tsx       # Story, Mission, Values, Team, Contact
│   │   ├── menu/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx       # Search, Categories, Menu Items
│   │   └── support/
│   │       ├── layout.tsx
│   │       └── page.tsx       # Chatbot, Help Center, FAQ, Contact + Map
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # One file per homepage/page section
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustedBy.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── AppShowcase.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── DownloadCTA.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── ChatbotDemo.tsx
│   │   └── ui/                 # Reusable primitives
│   │       ├── PhoneMockup.tsx
│   │       ├── PageHero.tsx
│   │       ├── Reveal.tsx
│   │       ├── StaggerReveal.tsx
│   │       ├── ScrollProgress.tsx
│   │       ├── BackToTop.tsx
│   │       ├── CustomCursor.tsx
│   │       └── LoadingScreen.tsx
│   └── lib/
│       └── utils.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Installation guide

**Requirements:** Node.js 18.18+ (Node 20 LTS recommended), npm.

```bash
# 1. Unzip and enter the project
cd spice-website

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev

# 4. Open in your browser
# http://localhost:3000
```

To create a production build locally:

```bash
npm run build
npm run start
```

---

## Adding your app screenshots

The brief mentions you'll supply real app screenshots. Drop them into
`public/screens/` using these exact filenames (already wired into the code):

| Screen          | Filename            |
|------------------|----------------------|
| Splash Screen    | `splash.png`         |
| Home             | `home.png`           |
| Chatbot          | `chatbot.png`        |
| Cart             | `cart.png`           |
| Checkout         | `checkout.png`       |
| Register         | `register.png`       |
| Profile          | `profile.png`        |

Until a file exists, `PhoneMockup` automatically shows a labeled placeholder
so the layout never breaks — no code changes needed, just add the images.

Use PNG or JPG, ideally screenshots at real iPhone resolution (e.g.
1170x2532) — the component crops to fill the frame (`object-cover`), so
portrait screenshots close to a 9:19.5 ratio look best.

---

## Customizing the design system

All colors, fonts, and easing live in `src/app/globals.css` under
`:root` and `@theme inline`. Change `--color-red` once and it propagates
everywhere via Tailwind's `bg-red`, `text-red`, `border-red`, etc.

The heading font is set up for **Clash Display** (loaded from a font CDN
with a system-font fallback). To self-host it instead: download the font
files, put them in `public/fonts/`, and replace the `@font-face` `src` URLs
in `globals.css` with local paths — this avoids any third-party font CDN
dependency in production.

---

## Deployment guides

### Vercel (recommended — zero config for Next.js)

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

Or via the dashboard: push this folder to a GitHub repo, then go to
vercel.com/new, import the repo, and deploy. No settings needed, Vercel
auto-detects Next.js.

### Netlify

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

In `netlify.toml` (create if missing):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Netlify's Next.js Runtime plugin (auto-installed) handles SSR/ISR routes.

### GitHub Pages

GitHub Pages only serves static files, so this requires a **static export**.
Note: static export disables server features (this site doesn't use any, so
it's compatible) and requires trailing-slash-friendly routing.

1. Add to `next.config.ts`:
   ```ts
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
   };
   export default nextConfig;
   ```
2. Build and export:
   ```bash
   npm run build
   # static files are generated into ./out
   ```
3. Push the contents of `out/` to a `gh-pages` branch (or use the
   `peaceiris/actions-gh-pages` GitHub Action), then enable GitHub Pages on
   that branch in your repo settings.

---

## Accessibility & performance notes

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`, heading
  hierarchy) throughout.
- All interactive elements have visible focus states and `aria-label`s
  where text isn't present.
- Respects `prefers-reduced-motion`.
- Images use `loading="lazy"` outside the hero.
- No layout-shifting: reserved space for phone mockups and cards.

Run Lighthouse locally after `npm run build && npm run start` for the most
accurate score (dev mode is slower and will under-report performance).

---

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- lucide-react for icons
