import { defineNuxtConfig } from 'nuxt'

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
  ]
})
