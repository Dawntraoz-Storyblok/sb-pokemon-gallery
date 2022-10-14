<script setup>
const { slug } = useRoute().params;
const url = slug || 'home';
 
const story = await useAsyncStoryblok(url, { version: 'draft' });
</script>
 
<template>
  <div class="container">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>