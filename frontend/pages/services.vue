<script setup lang="ts">
const { all } = useServices()
const services = all()

const subjects = [
  {
    to: '/mep',
    icon: '⚙️',
    title: 'MEP',
    text: 'Mechanical, electrical and plumbing — design, installation and maintenance for fully integrated building services.',
    cta: 'Explore MEP'
  },
  {
    to: '/civil-fitout',
    icon: '🏗️',
    title: 'Civil & Fit-out',
    text: 'Civil works and interior fit-out — from structural repairs to turnkey office and retail fit-outs.',
    cta: 'Explore Civil & Fit-out'
  },
  {
    to: '#all-services',
    icon: '🌿',
    title: 'Landscaping',
    text: 'Professional grounds care that keeps external spaces healthy, safe and welcoming all year round.',
    cta: 'See all services'
  }
]

useHead({ title: 'Services — ProFacility' })
</script>

<template>
  <div>
    <!-- Full-width hero with MEP image -->
    <section class="svc-hero">
      <img class="svc-hero__bg" src="/images/service-hero-mep.png" alt="" aria-hidden="true" />
      <div class="svc-hero__overlay" aria-hidden="true" />
      <div class="container svc-hero__inner">
        <span class="eyebrow">Our Services</span>
        <h1>Complete facility management, tailored to your site.</h1>
        <p class="lead">
          Pick a single service or a fully bundled contract. Every engagement is
          backed by measurable SLAs, trained teams and transparent reporting.
        </p>
        <div class="svc-hero__actions">
          <NuxtLink to="/mep" class="btn btn-primary">Explore MEP</NuxtLink>
          <NuxtLink to="/civil-fitout" class="btn btn-ghost">Civil &amp; Fit-out</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Specialist subjects -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Specialist divisions</span>
          <h2>Three core disciplines for your built environment.</h2>
        </div>
        <div class="grid grid-3">
          <NuxtLink v-for="s in subjects" :key="s.title" :to="s.to" class="card subject">
            <span class="subject-icon">{{ s.icon }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
            <span class="subject-link">{{ s.cta }} →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- All services -->
    <section id="all-services" class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">All services</span>
          <h2>Everything your facility needs, under one roof.</h2>
        </div>
        <div class="grid grid-3">
          <ServiceCard v-for="s in services" :key="s.id" :service="s" />
        </div>
      </div>
    </section>

    <CtaBanner
      title="Not sure which services you need?"
      text="Tell us about your site and we’ll recommend the right mix."
    />
  </div>
</template>

<style scoped>
/* Full-width image hero */
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

/* Subject cards */
.subject { display: flex; flex-direction: column; height: 100%; }
.subject-icon {
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
.subject-link {
  margin-top: auto;
  padding-top: 14px;
  font-weight: 600;
  color: var(--accent-text);
}
.subject:hover .subject-link { text-decoration: underline; }
</style>
