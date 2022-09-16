<script setup>
const { slug } = useRoute().params;
const url = slug || 'home';
 
const { data } = await useAsyncData(url, () => useStoryblokApi().get(`cdn/stories/${url}`, {
  version: 'draft',
}));

const story = ref(data.value.data.story);

onMounted(() => {
  useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
});
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>