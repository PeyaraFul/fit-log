# AGENTS.md

## Stack
- Next.js 16.4.3 (App Router), React 19.3.0, Tailwind CSS v4
- Path alias: `@/*` → `./src/*` (jsconfig.json)
- ESLint: flat config via `eslint.config.mjs` (next/core-web-vitals)

## Commands
```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # eslint
```

## Architecture (verified)
- `src/app/layout.js`: root layout. Loads Geist fonts, imports `Navbar` and `Banner`, wraps in `<Suspense>`. Metadata is default.
- `src/app/page.js`: server component; fetches `https://api.abcz.workers.dev/api/fitlog` with `cache: "force-cache"`. Renders workout cards with image, muscle group tags, duration/calories/rating.
- `src/app/[id]/page.jsx`: dynamic route exists but not implemented (logs `id` only).
- `src/app/myPlan/page.jsx`, `src/app/another/page.jsx`: present.
- `src/components/Navbar.jsx`: client component (`"use client"`), uses `usePathname()`, links to `/` and `/myPlan`. Nav shows counts (hardcoded).
- `src/components/Banner.jsx`: static banner image from `public/asset/`.
- `src/app/globals.css`: Tailwind v4 import, CSS variables for light/dark.

## Config notes
- `next.config.mjs`: `cacheComponents: true`, `partialPrefetching: true`, custom Turbopack rule for CSS via `@tailwindcss/turbopack`, `images.remotePatterns` allows all `https:/**`.
- Images from remote sources are allowed broadly (home page uses remote images from API response).
- No TypeScript config found; project uses JS/JSX.

## Gotchas
- Home page does an external network fetch at build/runtime in a server component. With `cache: "force-cache"`, behavior depends on Next/ISR/cache settings.
- Some components use `<Suspense>` even if not obviously needed (e.g. Navbar in layout) — follow existing patterns.
- `[id]` route is a stub; don't assume detail data shape until implemented.
