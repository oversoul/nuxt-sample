<template>
  <input :value="value" v-on="listeners" type="text" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full" />
</template>
<script>
export default {
  props: {
    value: {
      type: String|Number,
    },
  },
  data() {
    return {
      listeners: {
        ...this.$listeners,
        input: this.update,
      },
    };
  },
  methods: {
    update(event) {
      this.$emit('input', event.target.value);
    }
  }
}
</script>
