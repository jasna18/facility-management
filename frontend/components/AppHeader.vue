<script setup lang="ts">
const open = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' }
]

// Close the mobile menu whenever the route changes
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<template>
  <header class="header">
    <div class="container bar">
      <NuxtLink to="/" class="logo" aria-label="ProFacility home">
        <span class="logo-mark">P</span>
        <span class="logo-text">Pro<strong>Facility</strong></span>
      </NuxtLink>

      <nav class="nav" :class="{ 'nav--open': open }">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="nav-link--active"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn btn-primary nav-cta">Get a Quote</NuxtLink>
      </nav>

      <button
        class="burger"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(80, 80, 82, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
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
}
.nav-link:hover,
.nav-link--active { color: var(--text); }
.nav-link--active { color: var(--accent-text); }
.nav-cta { margin-left: 8px; }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

@media (max-width: 860px) {
  .burger { display: flex; }
  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition), transform var(--transition);
  }
  .nav--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .nav-cta { margin-left: 0; }
}
</style>
