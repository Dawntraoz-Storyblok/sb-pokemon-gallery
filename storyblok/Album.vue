<template>
  <div
    v-editable="blok"
    class="container grid grid-flow-col auto-cols-max gap-8 py-12"
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