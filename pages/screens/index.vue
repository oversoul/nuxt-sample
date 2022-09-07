<template>
  <main>

    <page-header title="Screens">
      <div>
        <search-input @search="search" />
      </div>
    </page-header>

    <div class="lg:max-w-full px-4 sm:px-0">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3" v-if="filterScreens.length > 0">
        <screen-card
          :id="screen.id"
          :key="screen.id"
          :city="screen.city"
          :size="screen.size"
          :name="screen.name"
          v-for="screen in filterScreens"
          :image="screen.images.length > 0 ? screen.images[0] : null"
        />
      </div>
      <div v-else class="text-center h-96 flex items-center justify-center">
        <h3 class="text-4xl font-extrabold">No Screens...</h3>
      </div>
    </div>

  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import ScreenCard from '~/components/Screens/ScreenCard';

export default {
  name: 'IndexPage',
  components: {
    ScreenCard,
  },
  computed: {
    ...mapGetters("screens", [
      'filterScreens',
    ]),
  },
  created() {
    this.$store.dispatch("screens/loadAll");
  },
  methods: {
    search(value) {
      this.$store.dispatch("screens/filterSearch", value);
    },
  },
}
</script>
