<script setup lang="ts">
const { featured } = useServices()
const services = featured(3)

const stats = [
  { value: '100+', label: 'Sites managed' },
  { value: '99.98%', label: 'Service uptime' },
  { value: '24/7', label: 'Response cover' },
  { value: '1yrs', label: 'In operation' }
]

const steps = [
  { n: '01', title: 'Assess', text: 'We audit your site, systems and service needs to build a clear baseline.' },
  { n: '02', title: 'Plan', text: 'A tailored facility plan with schedules, SLAs and transparent pricing.' },
  { n: '03', title: 'Deliver', text: 'Trained teams mobilise, supported by real-time reporting and a single point of contact.' }
]

useHead({ title: 'ProFacility — Integrated Facility Management' })
</script>

<template>
  <div>
    <HeroSection
      eyebrow="Integrated Facility Management"
      title="One partner for a building that runs flawlessly."
      subtitle="ProFacility combines maintenance, HVAC and energy services into a single, accountable contract — so you can focus on your business."
    />

    <!-- Stats -->
    <section class="section--tight section--alt">
      <div class="container">
        <div class="grid grid-4 stats">
          <StatCounter
            v-for="s in stats"
            :key="s.label"
            :value="s.value"
            :label="s.label"
          />
        </div>
      </div>
    </section>

    <!-- Featured services -->
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What we do</span>
          <h2>Everything your facility needs, under one roof.</h2>
          <p class="lead">
            Bundle the services you need today and scale up later — all coordinated
            by one dedicated account team.
          </p>
        </div>

        <div class="grid grid-3">
          <ServiceCard v-for="s in services" :key="s.id" :service="s" />
        </div>

        <div class="more">
          <NuxtLink to="/services" class="btn btn-ghost">View all services →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">How it works</span>
          <h2>A simple path to a better-run building.</h2>
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

    <ClientLogos />

    <CtaBanner />
  </div>
</template>

<style scoped>
.stats { align-items: stretch; }
.more { margin-top: 36px; }
.step-n {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--accent-text);
  margin-bottom: 10px;
}
</style>
