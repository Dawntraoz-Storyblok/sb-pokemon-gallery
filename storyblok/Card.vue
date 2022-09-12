<template>
  <article class="bg-[#271B46] rounded-xl p-4">
    <h3>{{ blok.title }}</h3>
  </article>
</template>

<script setup>
defineProps({ blok: Object })
</script>