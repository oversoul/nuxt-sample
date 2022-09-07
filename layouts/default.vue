<template>
  <div class="min-h-full">

    <nav-menu @open-cart="isCartOpen = true" />
    <cart-sidebar v-if="isCartOpen" @close-cart="isCartOpen = false" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nuxt />
    </div>

  </div>
</template>
<script>
import NavMenu from "~/components/Header/NavMenu";

export default {
  components: {
    NavMenu,
  },
  data() {
    return { isCartOpen: false }
  }
}
</script>
