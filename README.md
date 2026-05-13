# Rise at Seven — Next.js

A pixel-perfect Next.js conversion of the Rise at Seven marketing site.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Images**: Next.js `<Image />` component (optimized)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles + CSS design tokens
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/
│   └── site/
│       ├── AnnouncementBar.tsx
│       ├── Navbar.tsx
│       ├── MobileMenu.tsx
│       ├── Hero.tsx
│       ├── DrivingDemand.tsx
│       ├── FeaturedWork.tsx
│       ├── Services.tsx
│       ├── Pioneers.tsx
│       ├── WhatsNew.tsx
│       └── Footer.tsx
└── lib/
    └── utils.ts           # cn() helper

public/
└── assets/                # All image assets
```

## Build

```bash
npm run build
npm start
```
