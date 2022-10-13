<script setup>
const { slug } = useRoute().params;
const url = slug || 'home';
 
const story = await useAsyncStoryblok(url, { version: 'draft' });
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>