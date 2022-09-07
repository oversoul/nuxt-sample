<template>
  <nuxt-link :to="`/screens/${id}`">
    <div v-if="image">
      <img :src="image" loading="lazy" class="h-64 w-full rounded-lg object-cover" />
    </div>
    <div class="my-3">
      <div class="mb-2 text-xs font-semibold text-gray-600 uppercase flex justify-between">
        <p>{{ city }}</p>
        <p class="">{{ size }} m<sup>2</sup></p>
      </div>
      <div class="inline-block mb-3 text-black transition-colors duration-200 hover:text-purple-700">
        <p class="font-semibold leading-5">{{ name }}</p>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    id: String,
    city: String,
    size: Number,
    name: String,
    image: String|null,
  }
}
</script>
