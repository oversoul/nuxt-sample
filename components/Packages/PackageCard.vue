<template>
  <nuxt-link :to="`/packages/${pkg.id}`" class="rounded-lg bg-white border border-gray-300 shadow-sm">
    <div class="px-6 py-4 flex justify-between items-center">
      <h3 class="text-xl uppercase">{{ pkg.name }}</h3>
      <span class="text-3xl font-extrabold text-indigo-500">
        <small>$</small> {{ pkg.totalPrice }}
      </span>
    </div>

    <div class="border-t text-sm font-semibold flex justify-between items-center px-6 py-3 bg-gray-100">
      <span class="text-blue-500">{{ pkg.productCount }} product(s)</span>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    pkg: {
      type: Object
    }
  }
}
</script>
