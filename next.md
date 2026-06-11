# Next Steps — ProFacility

Things to do next, grouped by priority. Check items off as they're done.

## 🔼 High priority
- [ ] Replace placeholder copy with real company name, services and contact details
- [ ] Add real images for each service card and the projects/portfolio page
- [ ] Wire the contact form to a real destination (email service, form API, or a backend)
- [ ] Add a real logo (replace the "P" mark in header/footer)
- [ ] Set correct meta description, Open Graph tags and a social share image

## 🆕 New pages / sections
- [ ] **Pricing / Packages** page (single service vs. bundled IFM)
- [ ] **Careers** page with open roles
- [ ] **Testimonials** section or page (client quotes + logos)
- [ ] **FAQ** page
- [ ] **Blog / News** (optional — needs content collection or CMS)

## 🎨 Design & UX
- [ ] Keep hero image visible on mobile (currently the side badge hides under 860px)
- [ ] Add subtle scroll/entrance animations (e.g. `@vueuse/motion`)
- [ ] Light-mode variant of the gray + fluorescent-yellow theme
- [ ] Accessibility pass: focus states, color contrast, alt text on all images

## ⚙️ Technical
- [ ] Add `vue-tsc` + `nuxi typecheck` script for CI type checking
- [ ] Add ESLint + Prettier config
- [ ] Add a sitemap and robots.txt (`@nuxtjs/sitemap`, `@nuxtjs/robots`)
- [ ] Optimise images (consider `@nuxt/image` and `assets/images/`)
- [ ] Set up deployment (Netlify / Vercel / static `npm run generate`)

## 📦 Content data
- [ ] Move `useServices` data to a CMS or markdown if content changes often
- [ ] Add structured data (JSON-LD) for local business SEO

---

### How to run / build
```bash
cd frontend
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run generate   # static site (for static hosting)
```

> See [task.md](task.md) for what's already been built.
