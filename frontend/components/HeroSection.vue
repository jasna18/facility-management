<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="hero">
    <!-- Full-width background image + overlays -->
    <img class="hero-bg" src="/images/hero.png" alt="" aria-hidden="true" />
    <div class="hero-overlay" aria-hidden="true" />
    <div class="orb" aria-hidden="true" />

    <div class="container hero-inner">
      <div class="hero-copy">
        <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="lead">{{ subtitle }}</p>
        <div class="hero-actions">
          <NuxtLink to="/contact" class="btn btn-primary">Request a Quote</NuxtLink>
          <NuxtLink to="/services" class="btn btn-ghost">Explore Services</NuxtLink>
        </div>
      </div>

      <div class="panel-card">
        <div class="dot" /> Facilities online
        <strong>99.98%</strong>
        <span>uptime across managed sites</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  min-height: clamp(460px, 72vh, 720px);
  display: flex;
  align-items: center;
}

/* Full-bleed background image */
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Dark gradient so the copy stays readable over any image */
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(232, 232, 234, 0.95) 0%, rgba(232, 232, 234, 0.78) 45%, rgba(232, 232, 234, 0.30) 100%),
    linear-gradient(0deg, rgba(232, 232, 234, 0.90) 0%, transparent 42%);
}
.orb {
  position: absolute;
  z-index: 1;
  width: 420px;
  height: 420px;
  right: -120px;
  top: -140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 255, 0, 0.30), transparent 65%);
  filter: blur(10px);
}

.hero-inner {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  padding: 96px 24px;
}
.hero-copy { max-width: 640px; }
.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
}

.panel-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px;
  border-radius: var(--radius-sm);
  background: rgba(244, 244, 246, 0.78);
  border: 1px solid var(--border);
  backdrop-filter: blur(6px);
  font-size: 0.85rem;
  color: var(--muted);
}
.panel-card strong {
  font-size: 1.8rem;
  color: var(--accent-text);
}
.dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  margin-right: 6px;
  box-shadow: 0 0 8px var(--accent);
}

@media (max-width: 860px) {
  .hero-inner {
    padding: 56px 24px;
    flex-direction: column;
    align-items: flex-start;
  }
  /* Keep the badge visible on mobile — it wraps below the copy */
  .panel-card { align-self: flex-start; }
}
</style>
