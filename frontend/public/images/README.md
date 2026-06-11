# Images

Drop image files (`.jpg`, `.png`, `.webp`, `.svg`) into this folder.

Anything in `public/` is served from the site root, so a file here:

```
frontend/public/images/hero.jpg
```

...is referenced in templates **without** the `public/` prefix:

```vue
<img src="/images/hero.jpg" alt="..." />
```

or as a CSS background:

```css
background-image: url('/images/hero.jpg');
```

## public/ vs assets/
- **`public/images/`** (this folder) — files are copied as-is, keep their URL, and are
  good for photos, logos, favicons and anything referenced by a fixed path.
- **`assets/images/`** — files are processed/optimised by the build and must be imported
  or referenced with `~/assets/...`. Use this when you want bundling/optimisation.
