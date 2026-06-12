<script setup lang="ts">
const disciplines = [
  {
    icon: '🔧',
    title: 'Mechanical',
    text: 'HVAC, ventilation, pumps and mechanical plant — installed, balanced and maintained for peak efficiency.',
    points: ['HVAC systems', 'Chillers & boilers', 'Ventilation & ductwork', 'Pumps & pipework']
  },
  {
    icon: '⚡',
    title: 'Electrical',
    text: 'Power distribution, lighting and life-safety systems delivered to standard and kept compliant.',
    points: ['LV power distribution', 'Lighting & controls', 'Fire alarm & detection', 'Generators & UPS']
  },
  {
    icon: '🚿',
    title: 'Plumbing',
    text: 'Water supply, drainage and sanitary systems designed for reliability and low running costs.',
    points: ['Water supply & storage', 'Drainage & sanitary', 'Pumps & boosters', 'Leak detection']
  }
]

const stats = [
  { value: '500+', label: 'MEP projects delivered' },
  { value: '24/7', label: 'Reactive maintenance' },
  { value: '-22%', label: 'Typical energy saving' },
  { value: '100%', label: 'Compliance record' }
]

useHead({ title: 'MEP Services — ProFacility' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="svc-hero">
      <img class="svc-hero__bg" src="/images/service-hero-mep.png" alt="" aria-hidden="true" />
      <div class="svc-hero__overlay" aria-hidden="true" />
      <div class="container svc-hero__inner">
        <span class="eyebrow">MEP Division</span>
        <h1>Mechanical, Electrical &amp; Plumbing.</h1>
        <p class="lead">
          Fully integrated building services — designed, installed and maintained by
          one accountable team. From new fit-outs to ongoing planned maintenance.
        </p>
        <div class="svc-hero__actions">
          <NuxtLink to="/contact" class="btn btn-primary">Request a Quote</NuxtLink>
          <NuxtLink to="/services" class="btn btn-ghost">← All Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Disciplines -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What we cover</span>
          <h2>Three disciplines, one coordinated contract.</h2>
        </div>
        <div class="grid grid-3">
          <article v-for="d in disciplines" :key="d.title" class="card disc">
            <span class="disc-icon">{{ d.icon }}</span>
            <h3>{{ d.title }}</h3>
            <p>{{ d.text }}</p>
            <ul class="features">
              <li v-for="p in d.points" :key="p">{{ p }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Stats band -->
    <section class="section--tight section--alt">
      <div class="container">
        <div class="grid grid-4">
          <StatCounter v-for="s in stats" :key="s.label" :value="s.value" :label="s.label" />
        </div>
      </div>
    </section>

    <CtaBanner
      title="Planning an MEP project or maintenance contract?"
      text="Talk to our MEP team for a tailored scope and quote."
    />
  </div>
</template>

<style scoped>
.svc-hero {
  position: relative;
  overflow: hidden;
  min-height: clamp(360px, 56vh, 520px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}
.svc-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.svc-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(64, 64, 65, 0.94) 0%, rgba(64, 64, 65, 0.74) 45%, rgba(64, 64, 65, 0.28) 100%),
    linear-gradient(0deg, rgba(64, 64, 65, 0.88) 0%, transparent 45%);
}
.svc-hero__inner {
  position: relative;
  z-index: 2;
  padding: 72px 24px;
  max-width: 720px;
}
.svc-hero__actions {
  display: flex;
  gap: 14px;
  margin-top: 26px;
  flex-wrap: wrap;
}

.disc { display: flex; flex-direction: column; height: 100%; }
.disc-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  font-size: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(145deg, var(--surface-2), var(--gray-soft));
  border: 1px solid var(--border);
  margin-bottom: 18px;
}
.features {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: grid;
  gap: 8px;
}
.features li {
  position: relative;
  padding-left: 20px;
  font-size: 0.9rem;
  color: var(--muted);
}
.features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
}
</style>
