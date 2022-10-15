<template>
  <picture v-editable="blok">
    <template v-if="art_direction">
      <source
        v-for="{ image, media_condition, width, height } in art_direction"
        :media="media_condition"
        :srcset="createImage(image.filename, width, height, image.focus)"
        :width="width"
        :height="height"
      >
    </template>
    <nuxt-img
      provider="storyblok"
      :src="filename"
      :width="width"
      :height="height"
      v-bind:[srcset]="srcsetValue"
      :sizes="widthsPerSize"
      :modifiers="{ filters: { focal: focus } }"
      :loading="loading"
      :alt="alt"
      :class="{ 'rounded-xl': rounded }"
      class="shadow-lg w-full"
    />
  </picture>
</template>

<script setup>
const props = defineProps({ blok: Object })

const { width, height, rounded, loading, responsive_widths } = props.blok
const { art_direction } = props.blok

const { filename, alt, focus } = props.blok.original_image

const createImage = (original, width, height, focal = focus) => {
  return `${original}/m/${width}x${height}/filters:focal(${focal})`
};


let srcset = responsive_widths ? '' : 'srcset'
let srcsetValue = ref('')

// Responsive images by density
const { density_2x, density_3x } = props.blok

if (density_2x || density_3x) {
  let densitiesSrcset = `${createImage(filename, width, height)} 1x`
  densitiesSrcset += density_2x ? `, ${createImage(filename, width * 2, height * 2)} 2x` : ''
  densitiesSrcset += density_3x ? `, ${createImage(filename, width * 3, height * 3)} 3x` : ''

  srcsetValue.value = densitiesSrcset
}

// Responsive images by width
let widthsPerSize = ''

if (responsive_widths) {
  const sizes = ['sm', 'md', 'lg', 'xl']
  widthsPerSize = responsive_widths.split(',').map((w, i) => `${sizes[i]}:${w}px`).join(' ')
}
</script>