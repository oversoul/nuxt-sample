<template>
  <text-input placeholder="Search..." v-model="searchValue" />
</template>
<script>
export default {
  created() {
    this.searchValue = this.$route.query.search;
  },
  watch: {
    searchValue(search) {
      this.$emit('search', search);

      let query = {};
      if (search !== '') {
        query = { search };
      }

      this.$router.push({path: this.$route.path, query });
    },
  },
  data() {
    return {
      searchValue: '',
    }
  }
}
</script>
