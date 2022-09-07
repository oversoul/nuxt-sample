<template>
  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2" :class="colorClass"  v-on="$listeners">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'indigo'
    }
  },

  computed: {
    colorClass() {
      if (this.color === 'white') {
        return 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50';
      }
      return `bg-${this.color}-600 hover:bg-${this.color}-700 focus:ring-${this.color}-500`;
    }
  }
}
</script>
