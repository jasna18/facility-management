// Generates a printable HTML document containing the full source ("syntax")
// of the ProFacility site, ready to be converted to PDF.
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

// Ordered list of files to include in the document.
const files = [
  'task.md',
  'frontend/package.json',
  'frontend/nuxt.config.ts',
  'frontend/tsconfig.json',
  'frontend/app.vue',
  'frontend/assets/css/main.css',
  'frontend/composables/useServices.ts',
  'frontend/layouts/default.vue',
  'frontend/components/AppHeader.vue',
  'frontend/components/AppFooter.vue',
  'frontend/components/HeroSection.vue',
  'frontend/components/ServiceCard.vue',
  'frontend/components/StatCounter.vue',
  'frontend/components/CtaBanner.vue',
  'frontend/pages/index.vue',
  'frontend/pages/services.vue',
  'frontend/pages/about.vue',
  'frontend/pages/projects.vue',
  'frontend/pages/contact.vue',
  'frontend/public/favicon.svg'
]

const langOf = (f) => {
  if (f.endsWith('.vue')) return 'Vue SFC'
  if (f.endsWith('.ts')) return 'TypeScript'
  if (f.endsWith('.css')) return 'CSS'
  if (f.endsWith('.json')) return 'JSON'
  if (f.endsWith('.md')) return 'Markdown'
  if (f.endsWith('.svg')) return 'SVG'
  return 'Text'
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

let sections = ''
let toc = ''
files.forEach((f, i) => {
  let content
  try {
    content = readFileSync(join(root, f), 'utf8')
  } catch {
    content = '/* file not found */'
  }
  const id = 'f' + i
  const num = String(i + 1).padStart(2, '0')
  toc += `<li><span class="toc-num">${num}</span><a href="#${id}">${f}</a><span class="toc-lang">${langOf(f)}</span></li>`
  sections += `
    <section class="file" id="${id}">
      <div class="file-head">
        <span class="file-num">${num}</span>
        <h2>${f}</h2>
        <span class="badge">${langOf(f)}</span>
      </div>
      <pre><code>${esc(content)}</code></pre>
    </section>`
})

const now = new Date().toISOString().slice(0, 10)

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>ProFacility — Source Syntax Reference</title>
<style>
  :root {
    --bg: #121212; --surface: #1e1e1e; --border: #333;
    --text: #e6e6e6; --muted: #9a9a9a; --accent: #d4ff00; --ink: #121212;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: #fff; color: #1a1a1a;
    font-family: 'Segoe UI', system-ui, Arial, sans-serif;
    font-size: 12px; line-height: 1.5;
  }
  /* Cover */
  .cover {
    background: var(--bg); color: var(--text);
    padding: 90px 60px; min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center;
    page-break-after: always;
  }
  .cover .mark {
    display: inline-grid; place-items: center; width: 64px; height: 64px;
    border-radius: 16px; background: var(--accent); color: var(--ink);
    font-weight: 800; font-size: 32px; margin-bottom: 28px;
  }
  .cover h1 { font-size: 40px; margin: 0 0 8px; letter-spacing: -1px; }
  .cover h1 span { color: var(--accent); }
  .cover .sub { color: var(--muted); font-size: 16px; max-width: 60ch; }
  .cover .meta { margin-top: 40px; color: var(--muted); font-size: 13px; }
  .cover .meta b { color: var(--accent); }
  .swatches { display: flex; gap: 10px; margin-top: 28px; }
  .sw { width: 54px; height: 54px; border-radius: 8px; border: 1px solid #444; }

  /* TOC */
  .toc { padding: 50px 60px; page-break-after: always; }
  .toc h2 { font-size: 22px; border-bottom: 2px solid var(--accent); padding-bottom: 10px; }
  .toc ul { list-style: none; padding: 0; margin: 20px 0 0; }
  .toc li { display: flex; align-items: center; gap: 12px; padding: 7px 0; border-bottom: 1px dotted #ccc; }
  .toc-num { color: #999; font-variant-numeric: tabular-nums; font-weight: 700; }
  .toc a { color: #1a1a1a; text-decoration: none; flex: 1; }
  .toc-lang { color: #888; font-size: 11px; }

  /* Files */
  .files { padding: 30px 40px; }
  .file { page-break-inside: avoid; margin-bottom: 26px; }
  .file-head {
    display: flex; align-items: center; gap: 12px;
    border-left: 4px solid var(--accent); padding: 6px 12px;
    background: #f4f4f4; border-radius: 0 6px 6px 0;
  }
  .file-num { color: #999; font-weight: 800; font-variant-numeric: tabular-nums; }
  .file-head h2 { font-size: 15px; margin: 0; font-family: 'Consolas', monospace; flex: 1; }
  .badge {
    font-size: 10px; text-transform: uppercase; letter-spacing: .08em;
    background: var(--ink); color: var(--accent); padding: 3px 9px; border-radius: 999px;
  }
  pre {
    background: #1e1e1e; color: #e6e6e6; border-radius: 8px;
    padding: 16px 18px; overflow-x: auto; margin: 10px 0 0;
    font-family: 'Consolas', 'Courier New', monospace; font-size: 10.5px; line-height: 1.55;
    white-space: pre-wrap; word-break: break-word;
  }
  code { font-family: inherit; }
  @page { margin: 14mm 10mm; }
</style>
</head>
<body>
  <div class="cover">
    <div class="mark">P</div>
    <h1>Pro<span>Facility</span></h1>
    <div class="sub">Complete source syntax reference for the facility management
      website — every config, component, page and style used to build the site.</div>
    <div class="swatches">
      <div class="sw" style="background:#121212" title="--bg"></div>
      <div class="sw" style="background:#1e1e1e" title="--surface"></div>
      <div class="sw" style="background:#2a2a2a" title="--surface-2"></div>
      <div class="sw" style="background:#9a9a9a" title="--muted"></div>
      <div class="sw" style="background:#d4ff00" title="--accent"></div>
    </div>
    <div class="meta">
      Stack: <b>Nuxt 3 · Vue 3 · CSS</b> &nbsp;|&nbsp;
      Theme: <b>Gray + Fluorescent Yellow</b> &nbsp;|&nbsp;
      Files: <b>${files.length}</b> &nbsp;|&nbsp;
      Generated: <b>${now}</b>
    </div>
  </div>

  <div class="toc">
    <h2>Contents</h2>
    <ul>${toc}</ul>
  </div>

  <div class="files">${sections}</div>
</body>
</html>`

writeFileSync(join(root, 'syntax-reference.html'), html, 'utf8')
console.log('Wrote syntax-reference.html (' + files.length + ' files)')
