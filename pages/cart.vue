<template>
  <main>
    <new-package-modal @save="saveAsPackage" @close="showModal = false" v-if="showModal" />

    <page-header title="Shopping Cart" />

    <div class="mt-8 grid lg:grid-cols-2 px-4 md:px-0 gap-8 items-start" v-if="cartCount > 0">
      <div>
        <ul role="list" class="divide-y divide-gray-200">
          <cart-item v-for="item in cartItems" :key="item.id" :item="item" />
        </ul>
      </div>
      <div class="bg-gray-100 rounded-lg py-4 px-6">
        <h2 class="text-xl font-bold">Order Summary</h2>

        <div class="flex border-gray-200 py-4">
          <span class="text-gray-500">Sub total</span>
          <span class="ml-auto text-gray-900">$ {{ cartTotalPrice }}</span>
        </div>

        <div class="mt-6">
          <action-button class="flex w-full justify-center py-3 mb-4">Checkout</action-button>
          <action-button
            color="white"
            @click.prevent="showModal = true"
            class="flex w-full justify-center py-3"
          >Save as Package</action-button>
        </div>
      </div>
    </div>
    <div v-else class="text-center h-96 flex flex-col items-center justify-center">
      <shopping-bag-icon class="h-8 w-8 text-gray-500 stroke-1" />

      <h3 class="text-lg font-extrabold my-1">Cart empty</h3>
      <span class="text-gray-500">Get started by adding a few products.</span>
      <div class="mt-6">
        <nuxt-link to="/screens">
          <action-button><collection-icon class="-ml-1 mr-2 h-5 w-5" /> Products</action-button>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import NewPackageModal from '~/components/Packages/NewPackageModal';
import { CollectionIcon, ShoppingBagIcon, } from '@vue-hero-icons/outline';
export default {
  name: 'CartPage',
  components: {
    CollectionIcon,
    ShoppingBagIcon,
    NewPackageModal,
  },
  computed: {
    ...mapGetters("cart", [
      'cartItems',
      'cartCount',
      'cartTotalPrice',
    ])
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    saveAsPackage(name) {
      this.$store.dispatch("packages/cartToPackage", {
        name,
        products: this.cartItems
      });
    }
  }
}
</script>
