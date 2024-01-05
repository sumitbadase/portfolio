// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-icon'],
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'emerald',
      }
    }
  },
  googleFonts: {
    families: {
      'Inika': true,
      'Poppins': true,
    }
  },
})
