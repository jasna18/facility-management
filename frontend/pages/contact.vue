<script setup lang="ts">
const { all } = useServices()
const serviceOptions = all()

interface Form {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const form = reactive<Form>({
  name: '',
  email: '',
  company: '',
  service: '',
  message: ''
})

const errors = reactive<Record<string, string>>({})
const submitted = ref(false)
const sending = ref(false)

function validate(): boolean {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Enter a valid email address.'
  if (!form.message.trim()) errors.message = 'Tell us a little about your needs.'
  return Object.keys(errors).length === 0
}

async function submit() {
  if (!validate()) return
  sending.value = true
  // No backend — simulate an async submit, then show success state.
  await new Promise((r) => setTimeout(r, 600))
  sending.value = false
  submitted.value = true
}

function reset() {
  Object.assign(form, { name: '', email: '', company: '', service: '', message: '' })
  submitted.value = false
}

useHead({ title: 'Contact — ProFacility' })
</script>

<template>
  <div>
    <section class="section page-head">
      <div class="container">
        <span class="eyebrow">Contact</span>
        <h1>Let’s talk about your facility.</h1>
        <p class="lead">
          Tell us about your site and what you need. We typically reply within one
          business day with a tailored proposal.
        </p>
      </div>
    </section>

    <hr class="divider" />

    <section class="section">
      <div class="container">
        <div class="grid grid-2 layout">
          <!-- Contact info -->
          <aside class="info">
            <div class="info-item">
              <h4>Email</h4>
              <a href="mailto:hello@profacility.com">hello@profacility.com</a>
            </div>
            <div class="info-item">
              <h4>Phone</h4>
              <a href="tel:+18005551234">+1 (800) 555-1234</a>
            </div>
            <div class="info-item">
              <h4>Office</h4>
              <p>221 Industrial Ave, Suite 4<br />Springfield, USA</p>
            </div>
            <div class="info-item">
              <h4>Hours</h4>
              <p>Mon–Fri 8am–6pm<br />24/7 emergency line for clients</p>
            </div>
          </aside>

          <!-- Form -->
          <div class="card form-card">
            <form v-if="!submitted" novalidate @submit.prevent="submit">
              <div class="field">
                <label for="name">Name *</label>
                <input id="name" v-model="form.name" type="text" placeholder="Jane Doe" />
                <small v-if="errors.name" class="err">{{ errors.name }}</small>
              </div>

              <div class="row">
                <div class="field">
                  <label for="email">Email *</label>
                  <input id="email" v-model="form.email" type="email" placeholder="jane@company.com" />
                  <small v-if="errors.email" class="err">{{ errors.email }}</small>
                </div>
                <div class="field">
                  <label for="company">Company</label>
                  <input id="company" v-model="form.company" type="text" placeholder="Company Ltd." />
                </div>
              </div>

              <div class="field">
                <label for="service">Service of interest</label>
                <select id="service" v-model="form.service">
                  <option value="">Select a service…</option>
                  <option v-for="s in serviceOptions" :key="s.id" :value="s.title">{{ s.title }}</option>
                  <option value="Bundled / Full IFM">Bundled / Full IFM</option>
                </select>
              </div>

              <div class="field">
                <label for="message">Message *</label>
                <textarea id="message" v-model="form.message" rows="5" placeholder="Tell us about your site and needs…" />
                <small v-if="errors.message" class="err">{{ errors.message }}</small>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="sending">
                {{ sending ? 'Sending…' : 'Send message' }}
              </button>
            </form>

            <!-- Success state -->
            <div v-else class="success">
              <div class="check">✓</div>
              <h3>Thanks, {{ form.name }}!</h3>
              <p>Your message has been received. Our team will be in touch within one business day.</p>
              <button class="btn btn-ghost" @click="reset">Send another message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-head { padding-bottom: 40px; }
.layout { gap: 48px; align-items: start; }

.info-item { margin-bottom: 28px; }
.info-item h4 {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 6px;
}
.info-item a, .info-item p { color: var(--text); margin: 0; }

.form-card { padding: 32px; }
.field { margin-bottom: 18px; display: flex; flex-direction: column; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
@media (max-width: 560px) { .row { grid-template-columns: 1fr; } }

label { font-size: 0.85rem; margin-bottom: 6px; color: var(--text); }
input, select, textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color var(--transition), box-shadow var(--transition);
}
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(212, 255, 0, 0.15);
}
textarea { resize: vertical; }
.err { color: #ff6b6b; font-size: 0.8rem; margin-top: 5px; }

.success { text-align: center; padding: 28px 8px; }
.check {
  width: 64px;
  height: 64px;
  margin: 0 auto 18px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 2rem;
  font-weight: 800;
}
.success p { margin-bottom: 22px; }
</style>
