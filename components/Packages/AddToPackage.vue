<template>
  <div>
    <modal v-if="showModal">
      <h3 class="mb-4 font-semibold">Select Package to add product to:</h3>
      <ul v-if="hasPackages">
        <li
          :key="pkg.id"
          v-for="pkg in packagesList"
          @click.prevent="selectedPackageId = pkg.id"
          class="border-2 p-3 mb-1 rounded-lg hover:border-gray-600 transition"
          :class="{'border-indigo-500': pkg.id === selectedPackageId }"
        >{{ pkg.name }}</li>
      </ul>
      <div v-else>
        <alert type="default">No packages yet.</alert>
      </div>

      <template slot="footer">
        <action-button @click.prevent="apply" v-if="hasPackages">Apply</action-button>
        <action-button
          color="white"
          @click.prevent="closeModal"
          class="text-gray-700 border border-gray-300"
        >Close</action-button>
      </template>
    </modal>
    <action-button @click.prevent="showModal = true">
      Add To Package
    </action-button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      showModal: false,
      selectedPackageId: '',
    }
  },
  computed: {
    ...mapGetters("packages", [
      'packagesList',
    ]),
    hasPackages() {
      return this.packagesList.length > 0;
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.selectedPackageId = '';
    },
    apply() {
      this.$store.dispatch("packages/addProductToPackage", {
        packageId: this.selectedPackageId,
        product: { ...this.product, quantity: 1 }
      });
      this.closeModal();
    }
  }
}
</script>
