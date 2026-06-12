<script setup lang="ts">
const projects = [
  { tag: 'Commercial', title: 'Meridian Office Towers', text: 'Full IFM contract across three Grade-A towers — cleaning, maintenance, security and HVAC.', metric: '42,000 m²' },
  { tag: 'Healthcare', title: 'Northgate Medical Centre', text: 'Specialist hygiene and compliance-led cleaning with 24/7 reactive maintenance.', metric: '99.99% uptime' },
  { tag: 'Industrial', title: 'Harbour Logistics Hub', text: 'Grounds, security and plant maintenance for a 24-hour distribution facility.', metric: '24/7 cover' },
  { tag: 'Retail', title: 'Crescent Shopping Plaza', text: 'Daytime cleaning, waste management and landscaping across a busy retail centre.', metric: '60+ units' },
  { tag: 'Education', title: 'Riverside Campus', text: 'Integrated services for a multi-building university campus with seasonal scaling.', metric: '12 buildings' },
  { tag: 'Corporate', title: 'Apex Tech HQ', text: 'Energy optimisation and smart-building HVAC controls cutting running costs.', metric: '-22% energy' }
]

const industries = ['Offices', 'Healthcare', 'Industrial', 'Retail', 'Education', 'Logistics', 'Hospitality', 'Government']

useHead({ title: 'Projects — ProFacility' })
</script>

<template>
  <div>
    <section class="section page-head">
      <div class="container">
        <span class="eyebrow">Our Work</span>
        <h1>Trusted across industries and site types.</h1>
        <p class="lead">
          From single-building contracts to multi-site portfolios, here’s a sample of
          the facilities we keep running every day.
        </p>
      </div>
    </section>

    <hr class="divider" />

    <section class="section">
      <div class="container">
        <div class="grid grid-3">
          <article v-for="p in projects" :key="p.title" class="card project">
            <span class="tag">{{ p.tag }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.text }}</p>
            <span class="metric">{{ p.metric }}</span>
          </article>
        </div>
      </div>
    </section>

    <hr class="divider" />

    <section class="section--tight">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">Industries we serve</span>
          <h2>Sector expertise that travels.</h2>
        </div>
        <div class="chips">
          <span v-for="i in industries" :key="i" class="chip">{{ i }}</span>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<style scoped>
.page-head { padding-bottom: 40px; }
.project { display: flex; flex-direction: column; height: 100%; }
.tag {
  align-self: flex-start;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--accent-ink);
  background: var(--accent);
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 14px;
}
.project .metric {
  margin-top: auto;
  padding-top: 14px;
  font-weight: 700;
  color: var(--accent-text);
}
.chips { display: flex; flex-wrap: wrap; gap: 12px; }
.chip {
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--border);
  font-size: 0.92rem;
  transition: border-color var(--transition), color var(--transition);
}
.chip:hover { border-color: var(--accent-text); color: var(--accent-text); }
</style>
