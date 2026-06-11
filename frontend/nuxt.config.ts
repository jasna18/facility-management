// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Global stylesheet (design system: gray + fluorescent yellow)
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'ProFacility — Integrated Facility Management',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'ProFacility delivers integrated facility management: cleaning, maintenance, security, HVAC and energy services for commercial and industrial clients.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
