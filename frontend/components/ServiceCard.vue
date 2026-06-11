<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{ service: Service }>()
</script>

<template>
  <article class="card service">
    <div class="icon">{{ service.icon }}</div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.summary }}</p>
    <ul class="features">
      <li v-for="f in service.features" :key="f">{{ f }}</li>
    </ul>
  </article>
</template>

<style scoped>
.service { display: flex; flex-direction: column; height: 100%; }
.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  border-radius: 12px;
  background: var(--surface-2);
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
