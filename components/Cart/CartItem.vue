<template>
  <li class="flex py-6">
    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img :src="item.image" :alt="item.name" class="h-full w-full object-cover object-center">
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <nuxt-link activeClass="" :to="`/screens/${item.id}`">{{ item.name }}</nuxt-link>
          </h3>
          <p class="ml-4">$ {{ item.price }}</p>
        </div>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">Qty {{ item.quantity }}</p>

        <div class="flex">
          <button
            type="button"
            @click.prevent="removeFromCart(item.id)"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >Remove</button>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: Object
  },
  methods: {
    removeFromCart(product) {
      this.$store.dispatch('cart/removeProduct', product);
    }
  }
}
</script>
