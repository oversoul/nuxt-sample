<template>
  <button
    type="button"
    class="bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex items-center"
  >
    <shopping-cart-icon class="h-6 w-6" />

    <span class="inline-block h-6 w-6 rounded bg-gray-900 ml-2">{{ cartCount }}</span>
  </button>
</template>
<script>
import { mapGetters } from 'vuex';
import { ShoppingCartIcon } from '@vue-hero-icons/outline';
export default {
  components: {
    ShoppingCartIcon,
  },
  computed: {
    ...mapGetters("cart", [
      'cartCount',
    ])
  }
}
</script>
