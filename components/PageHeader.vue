<template>
  <div class="border-b mb-6">
    <div class="lg:flex lg:items-center lg:justify-between py-4">
      <div class="flex-1 min-w-0">
        <h2 class="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">{{ title }}</h2>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4 gap-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  }
}
</script>
