<template>
  <main>

    <div class="py-24 px-4 grid grid-cols-1 gap-y-16 gap-x-8 sm:py-32 lg:max-w-7xl lg:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{{ pkg.name }}</h2>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Number of Products</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ pkg.products.length }}</dd>
          </div>

          <div class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">Price</dt>
            <dd class="mt-2 text-sm text-gray-500">$ {{ pkg.totalPrice }}</dd>
          </div>
        </dl>
        <div class="mt-10">
          <alert type="success" class="py-4" v-if="wasAdded">Package was added to your cart.</alert>
          <action-button color="green" class="py-3 px-6" @click.prevent="orderPackage" v-if="canOrderPackage">
            <shopping-cart-icon class="mr-4" /> Order Package
          </action-button>
          <action-button color="red" class="py-3 px-6" @click.prevent="deletePackage">
            <trash-icon class="mr-4" /> Delete Package
          </action-button>
        </div>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <screen-card
          :id="screen.id"
          :key="screen.id"
          :city="screen.city"
          :size="screen.size"
          :name="screen.name"
          :image="screen.image"
          v-for="screen in pkg.products"
        />
      </div>
    </div>

  </main>
</template>

<script>
import ScreenCard from '~/components/Screens/ScreenCard';
import { TrashIcon, ShoppingCartIcon } from '@vue-hero-icons/outline';

export default {
  name: 'PackagePage',
  components: {
    ScreenCard,
    TrashIcon,
    ShoppingCartIcon,
  },
  asyncData({ params }) {
    return { id: params.id }
  },
  fetch() {
    this.$store.dispatch("packages/getById", this.id);
  },
  computed: {
    pkg() {
      return this.$store.state.packages.currentPackage;
    },
    canOrderPackage() {
      return !this.wasAdded && this.pkg.products.length > 0;
    }
  },
  data() {
    return {
      wasAdded: false,
    }
  },
  methods: {
    orderPackage() {
      this.pkg.products.forEach(product => this.$store.dispatch("cart/addProductToCart", product));
      this.wasAdded = true;
    },
    deletePackage() {
      this.$store.dispatch("packages/removePackage", this.id);
      this.$router.push('/packages');
    }
  }
}
</script>
