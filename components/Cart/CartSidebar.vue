<template>
  <div class="fixed inset-0 overflow-hidden z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="absolute inset-0 overflow-hidden">

      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">

        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Cart</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    @click.prevent="$emit('close-cart')"
                    class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <x-icon class="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200" v-if="!isCartEmpty">
                    <cart-item v-for="item in cartItems" :key="item.id" :item="item" />
                  </ul>
                  <div class="text-gray-600" v-else>Empty cart...</div>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$ {{ cartTotalPrice }}</p>
              </div>
              <div class="mt-6" v-if="!isCartEmpty">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >Checkout</a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  <button
                    type="button"
                    @click.prevent="$emit('close-cart')"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem';
import { XIcon } from '@vue-hero-icons/outline';
export default {
  components: {
    XIcon,
    CartItem,
  },
  computed: {
    ...mapGetters("cart", [
      'cartItems',
      'cartTotalPrice',
    ]),
    isCartEmpty() {
      return this.cartItems.length === 0;
    }
  },
}
</script>
