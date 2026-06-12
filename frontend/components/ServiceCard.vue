<script setup lang="ts">
import type { Service } from '~/composables/useServices'

defineProps<{ service: Service }>()
</script>

<template>
  <article class="card service" :class="{ 'service--media': service.image }">
    <!-- Image banner (if the service has an image) -->
    <div v-if="service.image" class="media">
      <img :src="service.image" :alt="service.title" loading="lazy" />
      <span class="media-badge">{{ service.icon }}</span>
    </div>
    <!-- Fallback icon tile -->
    <div v-else class="icon">{{ service.icon }}</div>

    <div class="body">
      <h3>{{ service.title }}</h3>
      <p>{{ service.summary }}</p>
      <ul class="features">
        <li v-for="f in service.features" :key="f">{{ f }}</li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.service { display: flex; flex-direction: column; height: 100%; }

/* Media (image) cards: full-bleed banner, padding moves to .body */
.service--media { padding: 0; overflow: hidden; }
.media {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--surface-2);
}
.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.media-badge {
  position: absolute;
  left: 16px;
  bottom: 16px;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  font-size: 1.25rem;
  border-radius: 10px;
  background: rgba(58, 58, 60, 0.78);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
}
.body { display: flex; flex-direction: column; flex: 1; }
.service--media .body { padding: 22px 24px 26px; }

.icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
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
