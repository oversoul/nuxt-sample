<template>
  <main class="my-10">

    <div class="flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:h-auto">
        <image-list :images="screen.images" />
      </div>

      <div class="lg:w-1/2 w-full lg:pl-10 mb-6 lg:mb-0">
        <div class="mb-6 text-right">
          <add-to-package :product="productObject" />
        </div>

        <h1 class="text-gray-900 text-2xl title-font font-medium mb-8">{{ screen.name }}</h1>

        <p class="leading-relaxed mb-4">{{ screen.description }}</p>

        <div class="flex border-t border-gray-200 py-4">
          <span class="text-gray-500">Address</span>
          <span class="ml-auto text-gray-900">{{ screen.address }} / {{ screen.postalCode }}</span>
        </div>

        <div class="flex border-t border-gray-200 py-4">
          <span class="text-gray-500">City</span>
          <span class="ml-auto text-gray-900">{{ screen.city }}</span>
        </div>

        <div class="flex border-t border-b mb-6 border-gray-200 py-4">
          <span class="text-gray-500">Size</span>
          <span class="ml-auto text-gray-900">{{ screen.size }} m<sup>2</sup></span>
        </div>

        <div class="flex mt-10">
          <span class="title-font font-medium text-2xl text-gray-900">$ {{ screen.pricePerWeek }}</span>
          <action-button @click.prevent="addToCart" class="ml-auto">Add To Cart</action-button>
        </div>
      </div>
    </div>

    <div class="h-96 mt-16 rounded-lg overflow-hidden">
      <google-map id="map" :center="position" :zoom="15">
        <google-map-marker :position="position" />
      </google-map>
    </div>

  </main>
</template>

<script>
import ImageList from '~/components/Screens/ImageList';
import AddToPackage from '~/components/Packages/AddToPackage';

export default {
  name: 'ScreenPage',
  components: {
    ImageList,
    AddToPackage,
  },
  asyncData({ params }) {
    return { id: params.id }
  },
  fetch() {
    this.$store.dispatch("screens/getById", this.id);
  },
  computed: {
    screen() {
      return this.$store.state.screens.currentScreen;
    },
    position() {
      return {
        lat: this.screen.latitude,
        lng: this.screen.longitude
      };
    },
    productObject() {
      // simple caster.
      return {
        id: this.screen.id,
        name: this.screen.name,
        city: this.screen.city,
        size: this.screen.size,
        image: this.screen.images[0],
        price: this.screen.pricePerWeek,
      }
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addProductToCart", this.productObject);
    }
  }
}
</script>
