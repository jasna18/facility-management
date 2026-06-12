<script setup lang="ts">
// Client logos shown in an auto-scrolling marquee.
// Drop real logos into public/images/clients/ and update this list.
const logos = [
  { src: '/images/clients/meridian.svg', name: 'Meridian' },
  { src: '/images/clients/northwind.svg', name: 'Northwind' },
  { src: '/images/clients/vertex.svg', name: 'Vertex' },
  { src: '/images/clients/hexagon.svg', name: 'Hexagon' },
  { src: '/images/clients/summit.svg', name: 'Summit' },
  { src: '/images/clients/orbit.svg', name: 'Orbit' },
  { src: '/images/clients/pinnacle.svg', name: 'Pinnacle' },
  { src: '/images/clients/lumen.svg', name: 'Lumen' }
]
</script>

<template>
  <section class="clients section--tight">
    <div class="container">
      <p class="clients-eyebrow">Trusted by teams that run demanding facilities</p>
    </div>

    <!-- Marquee: the track holds two identical sets for a seamless loop -->
    <div class="marquee">
      <div class="track">
        <img
          v-for="(logo, i) in logos"
          :key="'a' + i"
          class="logo"
          :src="logo.src"
          :alt="logo.name"
          loading="lazy"
        />
        <img
          v-for="(logo, i) in logos"
          :key="'b' + i"
          class="logo"
          :src="logo.src"
          :alt="logo.name"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  /* Light grey band (a touch darker) */
  background: linear-gradient(180deg, #d9d9dc, #cccccf);
}
.clients-eyebrow {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.74rem;
  font-weight: 700;
  color: #6b6b70;
  margin: 0 0 28px;
}

.marquee {
  position: relative;
  overflow: hidden;
  /* Soft fade at both edges */
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
.track {
  display: flex;
  align-items: center;
  gap: 64px;
  width: max-content;
  padding: 0 32px;
  animation: scroll 38s linear infinite;
}
.marquee:hover .track {
  animation-play-state: paused;
}

.logo {
  height: 30px;
  width: auto;
  flex: 0 0 auto;
  /* Logos are light-grey SVGs — darken them to read on the light band */
  filter: brightness(0) saturate(100%);
  opacity: 0.55;
  transition: opacity var(--transition), transform var(--transition);
}
.logo:hover {
  opacity: 1;
  transform: translateY(-2px);
}

/* Move exactly one set width (half the track) for a seamless loop */
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .track { animation: none; }
}
</style>
