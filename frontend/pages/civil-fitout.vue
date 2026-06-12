<script setup lang="ts">
const services = [
  {
    icon: '🧱',
    title: 'Civil Works',
    text: 'Structural repairs, concrete works, screeding and remedial building works carried out safely and to spec.',
    points: ['Structural repairs', 'Concrete & screeding', 'Waterproofing', 'External works']
  },
  {
    icon: '🪟',
    title: 'Interior Fit-out',
    text: 'Turnkey office, retail and hospitality fit-outs — partitions, ceilings, joinery and finishes.',
    points: ['Partitions & ceilings', 'Flooring & finishes', 'Joinery & millwork', 'Glazing & doors']
  },
  {
    icon: '📐',
    title: 'Design & Build',
    text: 'A single point of responsibility from concept and design through to handover and snagging.',
    points: ['Space planning', 'MEP coordination', 'Project management', 'Handover & snagging']
  }
]

const steps = [
  { n: '01', title: 'Survey & design', text: 'Site survey, space planning and a costed design proposal.' },
  { n: '02', title: 'Build', text: 'Coordinated civil, fit-out and MEP works delivered on programme.' },
  { n: '03', title: 'Handover', text: 'Snag-free handover with full documentation and warranties.' }
]

useHead({ title: 'Civil & Fit-out — ProFacility' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="svc-hero">
      <img class="svc-hero__bg" src="/images/hero.png" alt="" aria-hidden="true" />
      <div class="svc-hero__overlay" aria-hidden="true" />
      <div class="container svc-hero__inner">
        <span class="eyebrow">Civil &amp; Fit-out Division</span>
        <h1>Civil works &amp; interior fit-out.</h1>
        <p class="lead">
          From structural repairs to turnkey office and retail fit-outs — delivered
          design-and-build with one accountable team and a snag-free handover.
        </p>
        <div class="svc-hero__actions">
          <NuxtLink to="/contact" class="btn btn-primary">Request a Quote</NuxtLink>
          <NuxtLink to="/services" class="btn btn-ghost">← All Services</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What we do</span>
          <h2>Civil and fit-out, end to end.</h2>
        </div>
        <div class="grid grid-3">
          <article v-for="s in services" :key="s.title" class="card disc">
            <span class="disc-icon">{{ s.icon }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <ul class="features">
              <li v-for="p in s.points" :key="p">{{ p }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">How it works</span>
          <h2>A simple design-and-build path.</h2>
        </div>
        <div class="grid grid-3">
          <div v-for="step in steps" :key="step.n" class="card step">
            <span class="step-n">{{ step.n }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Planning a fit-out or civil project?"
      text="Tell us about your space and we’ll put together a design-and-build proposal."
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
.step-n {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--accent-text);
  margin-bottom: 10px;
}
</style>
