<script setup>
const { slug } = useRoute().params;
 
const { data } = await useAsyncData('count', () => useStoryblokApi().get(`cdn/stories/${slug ? slug : 'home'}`, {
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