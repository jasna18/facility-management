<script setup lang="ts">
defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div class="stat">
    <span class="value">{{ value }}</span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat {
  text-align: center;
  padding: 24px 16px;
}
.value {
  display: block;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.02em;
}
.label {
  display: block;
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.9rem;
}
</style>
