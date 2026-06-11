# Facility Management Company Website — Task Plan

## Project: "ProFacility" — Facility Management Services Website

A frontend website for a facility management company built with **Nuxt 3 (Vue 3)**.
Self-contained — no backend; data is served from a local composable.

---

## Tech Stack
- **Framework:** Nuxt 3 (Vue 3), file-based routing, layouts, components, scoped CSS
- **Styling:** Custom CSS design system — **gray base with fluorescent-yellow accent**
- **Data:** Local composable (`useServices`) — no API/backend
- **Tooling:** Node 24, npm

## Color Theme (gray + fluorescent yellow)
| Token            | Value      | Use                          |
|------------------|------------|------------------------------|
| `--bg`           | `#121212`  | Page background (dark gray)  |
| `--surface`      | `#1e1e1e`  | Cards / sections             |
| `--surface-2`    | `#2a2a2a`  | Raised surfaces / borders    |
| `--text`         | `#e6e6e6`  | Primary text (light gray)    |
| `--muted`        | `#9a9a9a`  | Secondary text               |
| `--accent`       | `#d4ff00`  | Fluorescent yellow accent    |
| `--accent-soft`  | `#eaff66`  | Hover / glow                 |

---

## Folder Structure
```
fm/
├── task.md
└── frontend/                 # Nuxt 3 app (standalone)
    ├── nuxt.config.ts
    ├── package.json
    ├── tsconfig.json
    ├── app.vue
    ├── public/favicon.svg
    ├── assets/css/main.css   # design system (gray + fluorescent yellow)
    ├── layouts/default.vue
    ├── components/
    │   ├── AppHeader.vue
    │   ├── AppFooter.vue
    │   ├── HeroSection.vue
    │   ├── ServiceCard.vue
    │   ├── StatCounter.vue
    │   └── CtaBanner.vue
    ├── composables/
    │   └── useServices.ts     # local services data
    └── pages/
        ├── index.vue          # Home
        ├── services.vue       # Services
        ├── about.vue          # About
        ├── projects.vue       # Projects / industries
        └── contact.vue        # Contact (local form handler)
```

---

## Pages
1. **Home (`/`)** — Hero, stats, featured services, CTA
2. **Services (`/services`)** — Full grid of services (from `useServices`)
3. **About (`/about`)** — Company story, values, approach
4. **Projects (`/projects`)** — Portfolio / industries served
5. **Contact (`/contact`)** — Contact form (client-side validation + success state)

## Components
- `AppHeader.vue` — sticky nav with logo + links + mobile toggle
- `AppFooter.vue` — footer with link columns
- `HeroSection.vue` — landing hero
- `ServiceCard.vue` — reusable service card
- `StatCounter.vue` — metric display
- `CtaBanner.vue` — call-to-action strip

---

## Build Steps
- [x] 1. Write task.md
- [x] 2. Scaffold `frontend/` Nuxt project (config + package.json)
- [x] 3. Build design system CSS (gray + fluorescent yellow)
- [x] 4. Build layout + shared components (Header, Footer, Hero, ServiceCard, StatCounter, CtaBanner)
- [x] 5. Build all pages (index, services, about, projects, contact)
- [x] 6. Add `useServices` composable (local data)
- [x] 7. Install dependencies, run dev server, verify (`npm run build` ✓, server returns HTTP 200)
- [x] 8. Generate **PDF** containing all source syntax/code → `ProFacility-Syntax-Reference.pdf`

---

## ✅ Project complete
- All pages, components, composable and styling built (gray + fluorescent-yellow theme).
- `npm install` + `npm run build` succeed; dev server serves all routes.
- Full source compiled into **`ProFacility-Syntax-Reference.pdf`** (20 files, cover + contents).

## How to Run
```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
```

> Note: `~ Backend removed per request — site is fully static/frontend-only.`
