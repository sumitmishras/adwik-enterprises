<!-- Copilot / AI agent instructions for sunsection-clone -->
# Quick Context

This is a Next.js app using the App Router (files live under `src/app`) and a component library in `src/components`. It was bootstrapped with create-next-app; package scripts are in `package.json` (see `dev`, `build`, `start`, `lint`).

Important: this repository pins `next` to `16.2.10` and includes a project-level note about incompatible/breaking Next.js behaviors (see `AGENTS.md`). Before making framework-level changes, consult `node_modules/next/dist/docs/` for the exact runtime behavior used here.

# Big picture (what to know quickly)
- App entry: `src/app/page.tsx` (main route) and `src/app/layout.tsx` (root layout).
- Global styling: `src/app/globals.css` (Tailwind + global rules).
- Reusable UI: `src/components/*` (Header, Hero, Footer, product components, etc.).
- Routes: pages live under `src/app/` including `about`, `blog`, `contact`, `products`.
- Build & dev: use `npm run dev` / `npm run build` / `npm run start`. Lint with `npm run lint`.

# Project-specific conventions
- App Router patterns: prefer colocated `page.tsx` + `layout.tsx` in folders for routes.
- Styling: Tailwind v4 + PostCSS; global Tailwind setup in `src/app/globals.css` and `postcss.config.mjs`.
- Components are simple functional React components in `src/components` (look at `Header.tsx`, `Hero.tsx`, `Footer.tsx` for examples).
- Keep markup semantics consistent with existing components (follow structure in `src/components/ProductRails.tsx` / `ProductClamps.tsx`).

# External dependencies & integration points
- `framer-motion` (animations) — used inside components for motion/transition patterns.
- `lucide-react` (icons) — components import icons directly.
- Tailwind CSS + PostCSS — styles depend on Tailwind utility classes.
- Next-specific features: `next/font` is used for font optimization (see `README.md`).

# Common dev workflows (concrete commands)
- Run dev server: `npm run dev` (also works with `yarn dev`, `pnpm dev`, `bun dev`).
- Build for production: `npm run build`.
- Start production server (after build): `npm run start`.
- Lint: `npm run lint`.

# Editing and PR guidance for agents
- When changing global layout or head elements, update `src/app/layout.tsx` (affects all routes).
- For route-level UI, modify `src/app/<route>/page.tsx` or that route's `layout.tsx`.
- To add a shared UI piece, create a new component under `src/components` and import it where needed.
- Preserve Tailwind utility class usage rather than adding new CSS modules unless necessary.

# Examples (explicit file references)
- Update header: edit `src/components/Header.tsx` and `src/app/layout.tsx` for placement.
- Add a product card: follow `src/components/ProductBrackets.tsx` and `src/components/ProductClamps.tsx` patterns.
- Update home content: edit `src/app/page.tsx` and `src/components/Hero.tsx`.

# Where to look for more context
- High-level project note: `AGENTS.md` (contains a Next.js compatibility warning the agent must obey).
- User-facing docs and local scripts: `README.md` and `package.json`.

# Tone & constraints for AI edits
- Make minimal, focused changes per PR. Prefer small commits that change one feature or component.
- Do NOT upgrade the `next` dependency or change major framework configs without explicit human approval — this repo pins a non-standard Next version.
- When adding or modifying routes, ensure layout and link navigation remain consistent with existing `Header` and `Footer` components.

If anything here is unclear or you want more examples from a particular area (routing, component patterns, or build details), tell me which files to expand and I will update this guidance.
