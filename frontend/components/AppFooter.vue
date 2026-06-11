<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="grid grid-4 top">
        <div>
          <NuxtLink to="/" class="logo">
            <span class="logo-mark">P</span>
            <span>Pro<strong>Facility</strong></span>
          </NuxtLink>
          <p class="blurb">
            Integrated facility management for commercial and industrial clients —
            one partner for a building that runs flawlessly.
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <NuxtLink to="/services">Cleaning</NuxtLink>
          <NuxtLink to="/services">Maintenance</NuxtLink>
          <NuxtLink to="/services">HVAC & Energy</NuxtLink>
          <NuxtLink to="/services">Security</NuxtLink>
        </div>

        <div>
          <h4>Company</h4>
          <NuxtLink to="/about">About us</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>

        <div>
          <h4>Get in touch</h4>
          <a href="mailto:hello@profacility.com">hello@profacility.com</a>
          <a href="tel:+18005551234">+1 (800) 555-1234</a>
          <span class="addr">221 Industrial Ave, Suite 4<br />Springfield, USA</span>
        </div>
      </div>

      <hr class="divider" />

      <div class="bottom">
        <span>© {{ year }} ProFacility. All rights reserved.</span>
        <span>Built with Nuxt 3</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 64px 0 28px;
  margin-top: auto;
}
.top { margin-bottom: 40px; }
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  margin-bottom: 14px;
}
.logo-mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
  background: var(--accent);
  color: var(--accent-ink);
  font-weight: 800;
}
.logo strong { color: var(--accent); }
.blurb { font-size: 0.92rem; }

h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text);
  margin-bottom: 16px;
}
.footer a,
.addr {
  display: block;
  color: var(--muted);
  font-size: 0.92rem;
  margin-bottom: 10px;
  transition: color var(--transition);
}
.footer a:hover { color: var(--accent); }

.bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 24px;
  font-size: 0.85rem;
  color: var(--muted);
}
</style>
