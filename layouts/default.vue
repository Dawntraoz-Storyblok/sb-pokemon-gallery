<template>
  <main class="min-h-screen bg-[#1A0F25] text-white font-[Clarika]">
    <div class="container">
      <slot />
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Pokemon cards album',
  meta: [
    { name: 'description', content: 'The Pokemon album you were looking for with optimized images.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>