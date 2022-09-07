<template>
  <main>
    <new-package-modal v-if="showModal" @save="createPackage" @close="showModal = false" />

    <page-header title="Packages">
      <div>
        <search-input @search="search" />
      </div>
      <action-button @click.prevent="showModal = true">
        <plus-icon class="-ml-1 mr-2 h-5 w-5" /> Create Package
      </action-button>
    </page-header>

    <div class="lg:max-w-full px-4 sm:px-0 py-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" v-if="filterPackages.length > 0">
        <package-card :key="pkg.id" v-for="pkg in filterPackages" :pkg="pkg" />
      </div>
      <div v-else-if="hasSearch">
        Nothing was found...
      </div>
      <div v-else class="text-center h-96 flex flex-col items-center justify-center">
        <folder-add-icon class="h-8 w-8 text-gray-500 stroke-1" />

        <h3 class="text-lg font-extrabold my-1">No Packages</h3>
        <span class="text-gray-500">Get started by creating a new package.</span>
        <div class="mt-6">
          <action-button @click.prevent="showModal = true">
            <plus-icon class="-ml-1 mr-2 h-5 w-5" /> Create Package
          </action-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import PackageCard from '~/components/Packages/PackageCard';
import { PlusIcon, FolderAddIcon, } from '@vue-hero-icons/outline';
import NewPackageModal from '~/components/Packages/NewPackageModal';
export default {
  name: 'PackagesPage',
  components: {
    PlusIcon,
    FolderAddIcon,
    PackageCard,
    NewPackageModal
  },
  computed: {
    ...mapGetters("packages", [
      'filterPackages',
    ]),
    hasSearch() {
      return this.$route.query.search;
    }
  },
  beforeDestroy() {
    this.$store.dispatch("packages/filterSearch", '');
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    search(value) {
      this.$store.dispatch("packages/filterSearch", value);
    },
    createPackage(name) {
      this.$store.dispatch("packages/createPackage", name);
    }
  }
}
</script>
