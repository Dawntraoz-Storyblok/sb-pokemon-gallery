<template>
  <div
    v-editable="blok"
    class="container grid grid-cols-[repeat(auto-fit,332px)] justify-center gap-10 py-12"
  >
    <StoryblokComponent
      v-for="card in blok.cards"
      :key="card._uid"
      :blok="card"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>