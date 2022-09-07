<template>
  <div>
    <div class="h-96 w-full border-2 border-transparent">
      <img class="object-cover h-full w-full rounded-lg" :src="images[currentImageIndex]">
    </div>
    <div class="flex mt-8 gap-4">
      <button
        :key="index"
        v-for="(image, index) in images"
        @click.prevent="currentImageIndex = index"
        :class="{ 'border-indigo-500': currentImageIndex === index }"
        class="rounded-lg border-2 p-1 border-transparent h-24 w-24"
      >
        <img :src="image" class="object-cover rounded h-full w-full" loading="lazy">
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentImageIndex: 0,
    }
  },
}
</script>
