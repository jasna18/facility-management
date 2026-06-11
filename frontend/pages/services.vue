<script setup lang="ts">
const { all } = useServices()
const services = all()

useHead({ title: 'Services — ProFacility' })
</script>

<template>
  <div>
    <section class="section page-head">
      <div class="container">
        <span class="eyebrow">Our Services</span>
        <h1>Complete facility management, tailored to your site.</h1>
        <p class="lead">
          Pick a single service or a fully bundled contract. Every engagement is
          backed by measurable SLAs, trained teams and transparent reporting.
        </p>
      </div>
    </section>

    <hr class="divider" />

    <section class="section">
      <div class="container">
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
.page-head { padding-bottom: 40px; }
</style>
