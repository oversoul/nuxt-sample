<template>
  <div>
    <nuxt-link
      exact
      :key="key"
      :to="item.path"
      :class="{ block: isMobile }"
      v-for="(item, key) in menuLinks"
      class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >{{ item.label }}</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      menuLinks: [
        { label: 'Home', path: '/' },
        { label: 'Screens', path: '/screens' },
        { label: 'Packages', path: '/packages'},
        { label: 'Cart', path: '/cart' },
      ],
    }
  }
}
</script>
