<template>
  <picture v-editable="blok">
    <img
      :src="filename"
      :width="width"
      :height="height"
      :alt="alt"
      class="shadow-lg w-full"
      :class="{ 'rounded-xl': rounded }"
    />
  </picture>
</template>

<script setup>
const props = defineProps({ blok: Object })

const { width, height, rounded } = props.blok

const { filename, alt } = props.blok.original_image
</script>