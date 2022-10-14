<template>
  <article v-editable="blok" class="bg-[#271B46] rounded-xl p-4 pb-6">
    <StoryblokComponent v-if="blok.image[0]" :blok="blok.image[0]" />
    <header class="pt-4 flex gap-4 items-center">
      <div class="rounded-full w-8 h-8" :style="`background-color: ${blok.color.color}`"></div>
      <h3 class="flex flex-col">
        {{ blok.title }}
        <span class="font-sans font-thin text-xs">{{ blok.subtitle }}</span>
      </h3>
      <button class="ml-auto bg-purple-900 rounded-full px-4 py-1">{{ blok.button_text }}</button>
    </header>
  </article>
</template>

<script setup>
defineProps({ blok: Object })
</script>