<script setup lang="ts">
const open = ref(false)        // mobile menu
const dropdown = ref(false)    // services dropdown (mobile click / desktop fallback)

interface NavLink {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const links: NavLink[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'All Services', to: '/services' },
      { label: 'MEP', to: '/mep' },
      { label: 'Civil & Fit-out', to: '/civil-fitout' }
    ]
  },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
]

// Close menus whenever the route changes
const route = useRoute()
watch(
  () => route.path,
  () => {
    open.value = false
    dropdown.value = false
  }
)

// Close the dropdown when clicking anywhere outside a dropdown trigger
function onDocClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (!target.closest('.has-dropdown')) {
    dropdown.value = false
  }
}
onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <header class="header">
    <div class="container bar">
      <NuxtLink to="/" class="logo" aria-label="ProFacility home">
        <span class="logo-mark">P</span>
        <span class="logo-text">Pro<strong>Facility</strong></span>
      </NuxtLink>

      <nav class="nav" :class="{ 'nav--open': open }">
        <template v-for="link in links" :key="link.to">
          <!-- Link with dropdown -->
          <div v-if="link.children" class="has-dropdown">
            <button
              class="nav-link nav-trigger"
              :class="{ 'is-open': dropdown }"
              :aria-expanded="dropdown"
              @click.stop="dropdown = !dropdown"
            >
              {{ link.label }}
              <svg class="caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" />
              </svg>
            </button>
            <div class="dropdown" :class="{ 'dropdown--open': dropdown }">
              <NuxtLink
                v-for="child in link.children"
                :key="child.to"
                :to="child.to"
                class="dropdown-item"
                active-class="dropdown-item--active"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Plain link -->
          <NuxtLink
            v-else
            :to="link.to"
            class="nav-link"
            active-class="nav-link--active"
          >
            {{ link.label }}
          </NuxtLink>
        </template>

        <NuxtLink to="/contact" class="btn btn-primary nav-cta">Get a Quote</NuxtLink>
      </nav>

      <button
        class="burger"
        :class="{ 'is-open': open }"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>
    </div>

    <!-- Backdrop behind the mobile drawer -->
    <div class="backdrop" :class="{ 'backdrop--show': open }" @click="open = false" />
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  /* No backdrop-filter: it would make the header the containing block for
     the fixed-position mobile drawer and clip it to the header height. */
  background: rgba(70, 70, 72, 0.96);
  border-bottom: 1px solid var(--border);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  position: relative;
  z-index: 2;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.15rem;
}
.logo-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: var(--accent);
  color: var(--accent-ink);
  font-weight: 800;
}
.logo-text strong { color: var(--accent-text); }

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav-link {
  color: var(--muted);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color var(--transition);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
}
.nav-link:hover,
.nav-link--active { color: var(--text); }
.nav-link--active { color: var(--accent-text); }
.nav-cta { margin-left: 8px; }

/* Dropdown */
.has-dropdown { position: relative; }
.nav-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.caret { transition: transform var(--transition); }
.has-dropdown:hover .caret,
.nav-trigger.is-open .caret { transform: rotate(180deg); }

/* Invisible bridge so hovering across the gap keeps the menu open */
.has-dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 16px;
}

.dropdown {
  position: absolute;
  top: calc(100% + 14px);
  left: 0;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow);
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: opacity var(--transition), transform var(--transition);
  z-index: 60;
}
/* Open via click (JS) or hover (desktop) */
.dropdown--open,
.has-dropdown:hover .dropdown {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.dropdown-item {
  padding: 10px 12px;
  border-radius: 6px;
  color: var(--text);
  font-size: 0.92rem;
  transition: background var(--transition), color var(--transition);
}
.dropdown-item:hover { background: var(--surface-2); }
.dropdown-item--active { color: var(--accent-text); }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  position: relative;
  z-index: 10;
}
.burger span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}
/* Animate hamburger into an X when open */
.burger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.is-open span:nth-child(2) { opacity: 0; }
.burger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Backdrop (mobile only) */
.backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition);
  z-index: 1;
}

@media (max-width: 860px) {
  .burger { display: flex; }
  .backdrop { display: block; }
  .backdrop--show {
    opacity: 1;
    pointer-events: auto;
  }

  /* Slide-in drawer from the right */
  .nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(82vw, 320px);
    height: 100vh;
    height: 100dvh;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 96px 24px 28px;
    background: var(--surface);
    border-left: 1px solid var(--border);
    transform: translateX(100%);
    pointer-events: none;
    overflow-y: auto;
    transition: transform 280ms ease;
    z-index: 5;
  }
  .nav--open {
    transform: translateX(0);
    pointer-events: auto;
  }
  .nav-cta { margin-left: 0; }

  /* On mobile the dropdown renders inline and is collapsed until tapped */
  .has-dropdown { width: 100%; }
  .dropdown {
    position: static;
    transform: none;
    pointer-events: auto;
    box-shadow: none;
    margin-top: 0;
    background: var(--surface-2);
    display: none;        /* hidden until the Services button is tapped */
    opacity: 1;
  }
  .dropdown--open {
    display: flex;
    margin-top: 10px;
  }
}
</style>
