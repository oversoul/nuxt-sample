<template>
  <div class="rounded px-4 py-2 text-sm font-semibold mb-4" :class="colorClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    colorClass() {
      if (this.type === 'default') {
        return 'bg-blue-100 text-blue-900';
      }
      if (this.type === 'danger') {
        return 'bg-red-100 text-red-900';
      }
      if (this.type === 'success') {
        return 'bg-green-100 text-green-800';
      }
      if (this.type === 'warning') {
        return 'bg-yellow-100 text-yellow-600';
      }
    }
  }
}
</script>
