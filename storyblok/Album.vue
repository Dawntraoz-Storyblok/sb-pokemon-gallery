<template>
  <div
    v-editable="blok"
    class="container grid grid-cols-[repeat(auto-fit,332px)] justify-center gap-10 py-12"
  >
    <StoryblokComponent
      v-for="blok in blok.cards"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>