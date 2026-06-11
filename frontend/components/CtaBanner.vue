<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    text?: string
  }>(),
  {
    title: 'Ready to hand over the running of your building?',
    text: 'Get a tailored facility management proposal — usually within 48 hours.'
  }
)
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="cta">
        <div class="cta-orb" aria-hidden="true" />
        <div class="cta-copy">
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
        </div>
        <NuxtLink to="/contact" class="btn btn-primary">Request a Quote</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
  padding: 44px;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid rgba(212, 255, 0, 0.4);
}
.cta-copy { max-width: 60ch; }
.cta-copy h2 { margin-bottom: 8px; }
.cta-copy p { margin: 0; }
.cta-orb {
  position: absolute;
  width: 360px;
  height: 360px;
  right: -120px;
  top: -160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212, 255, 0, 0.18), transparent 65%);
}
</style>
