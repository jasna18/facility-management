<script setup lang="ts">
const values = [
  { icon: '✓', title: 'Accountability', text: 'One contract, one point of contact, and SLAs we report against openly.' },
  { icon: '⚡', title: 'Responsiveness', text: '24/7 cover with rapid mobilisation for planned and reactive work.' },
  { icon: '🌍', title: 'Sustainability', text: 'Energy-efficient operations and responsible sourcing across every site.' },
  { icon: '👥', title: 'People first', text: 'Trained, vetted and fairly-paid teams who take pride in the work.' }
]

useHead({ title: 'About — ProFacility' })
</script>

<template>
  <div>
    <section class="section page-head">
      <div class="container narrow">
        <span class="eyebrow">About ProFacility</span>
        <h1>Keeping buildings running for nearly two decades.</h1>
        <p class="lead">
          Founded in 2008, ProFacility began as a small commercial cleaning crew and
          grew into a full integrated facility management provider. Today we look after
          more than 500 sites — offices, retail, healthcare, logistics and industrial
          plants — with the same hands-on care we started with.
        </p>
      </div>
    </section>

    <hr class="divider" />

    <section class="section">
      <div class="container">
        <div class="grid grid-2 split">
          <div>
            <span class="eyebrow">Our mission</span>
            <h2>Make facilities effortless for the people who run them.</h2>
            <p>
              Managing a building means juggling dozens of suppliers, contracts and
              emergencies. We replace that complexity with a single accountable
              partner — coordinating every trade, schedule and report so our clients
              can focus on their core business.
            </p>
            <p>
              We invest in our teams and in technology that gives clients full
              visibility of what’s happening on their sites, when it happens.
            </p>
          </div>
          <div class="panel">
            <div class="metric"><strong>500+</strong><span>Sites under management</span></div>
            <div class="metric"><strong>1,200+</strong><span>Trained team members</span></div>
            <div class="metric"><strong>98%</strong><span>Client retention rate</span></div>
          </div>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">What we stand for</span>
          <h2>Our values</h2>
        </div>
        <div class="grid grid-4">
          <div v-for="v in values" :key="v.title" class="card value">
            <span class="value-icon">{{ v.icon }}</span>
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.narrow { max-width: 760px; }
.page-head { padding-bottom: 40px; }
.split { align-items: center; gap: 48px; }
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px;
}
.metric {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 22px;
  border-bottom: 1px solid var(--border);
}
.metric:last-child { border-bottom: none; }
.metric strong { font-size: 2rem; color: var(--accent-text); }
.metric span { color: var(--muted); font-size: 0.92rem; }
.value-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--accent-text);
  font-size: 1.2rem;
  margin-bottom: 14px;
}
</style>
