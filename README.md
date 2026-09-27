# Divye Maingi — Portfolio

Personal developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Frontend-only, dark premium theme, fully responsive.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check (no emit)

## Adding your content

The site is structured so real content drops straight into typed arrays — the layouts and empty states adapt automatically:

- **Resume** — add your PDF at `public/Divye_Maingi_Resume.pdf` so the "Download Resume" buttons work.
- **Projects** — fill the `PROJECTS` array in [src/components/Projects.tsx](src/components/Projects.tsx).
- **Experience** — fill the `EXPERIENCE` array in [src/components/Experience.tsx](src/components/Experience.tsx).
- **Achievements** — fill the `ACHIEVEMENTS` array in [src/components/Achievements.tsx](src/components/Achievements.tsx).
- **Certificates** — fill the `CERTIFICATES` array in [src/components/Certificates.tsx](src/components/Certificates.tsx).
- **Skills / nav / socials** — centralized in [src/lib/data.ts](src/lib/data.ts).

## Deployment

Deploy on [Vercel](https://vercel.com): import the repo, keep the defaults (Next.js is auto-detected), and deploy.
