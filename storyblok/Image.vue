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
    <img
      :src="createImage(filename, width, height)"
      :width="width"
      :height="height"
      :srcset="srcset"
      :sizes="responsive_conditions"
      :alt="alt"
      :loading="loading"
      class="shadow-lg w-full"
      :class="{ 'rounded-xl': rounded }"
    />
  </picture>
</template>

<script setup>
const props = defineProps({ blok: Object })

const { width, height, rounded, loading } = props.blok
const { art_direction } = props.blok

const { filename, alt, focus } = props.blok.original_image

const createImage = (original, width, height, focal = focus) => {
  return `${original}/m/${width}x${height}/filters:focal(${focal})`
};


let srcset = ref('')

// Responsive images by density
const { density_2x, density_3x } = props.blok

if (density_2x || density_3x) {
  let densitiesSrcset = `${createImage(filename, width, height)} 1x`
  densitiesSrcset += density_2x ? `, ${createImage(filename, width * 2, height * 2)} 2x` : ''
  densitiesSrcset += density_3x ? `, ${createImage(filename, width * 3, height * 3)} 3x` : ''

  srcset.value = densitiesSrcset
}

// Responsive images by width
const { responsive_widths, responsive_conditions } = props.blok

if (responsive_widths) {
  const aspectRatio = width / height
  const responsiveImages = responsive_widths.split(',')

  let widthsSrcset = ''
  responsiveImages.map(imageWidth => {
    widthsSrcset += `${createImage(filename, imageWidth, Math.round(imageWidth / aspectRatio))} ${imageWidth}w,`
    return true
  })

  srcset.value = widthsSrcset
}
</script>