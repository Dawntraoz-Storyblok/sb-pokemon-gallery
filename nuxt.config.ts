// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    [
      '@storyblok/nuxt',
      { accessToken: process.env.STORYBLOK_TOKEN }
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
  ],
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  }
})
