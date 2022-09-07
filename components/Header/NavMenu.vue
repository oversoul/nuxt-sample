<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <cube-transparent-icon class="h-8 w-8 text-indigo-500" />
          </div>
          <div class="hidden md:block">
            <nav-links class="ml-10 flex items-baseline space-x-4" />
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <cart-button @click.native="openCart" />
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button type="button" @click.prevent="menuOpen = !menuOpen" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

            <x-icon v-if="menuOpen" class="block h-6 w-6" />
            <menu-icon v-else class="block h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <div class="md:hidden" id="mobile-menu" v-if="menuOpen">
      <nav-links :is-mobile="true" class="px-2 pt-2 pb-3 space-y-1 sm:px-3" />
      <div class="pt-4 pb-3 border-t border-gray-700 flex items-center px-5">
        <cart-button @click.native="openCart" />
      </div>
    </div>
  </nav>
</template>
<script>
import NavLinks from "./NavLinks";
import CartButton from "~/components/Cart/CartButton";
import { XIcon, MenuIcon, CubeTransparentIcon } from '@vue-hero-icons/outline';

export default {
  components: {
    XIcon,
    MenuIcon,
    NavLinks,
    CartButton,
    CubeTransparentIcon,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    openCart() {
      this.$emit('open-cart');
    }
  }
}
</script>
