<template>
  <modal>
      <alert type="danger" v-if="packageName === ''">Package name cannot be empty</alert>
      <label for="price" class="block text-sm font-medium text-gray-700 mb-2">Package name</label>
      <div>
        <text-input v-model="packageName" placeholder="Package name" />
      </div>
      <template slot="footer">
        <action-button color="indigo":disabled="packageName === ''"@click.prevent="save">Save</action-button>
        <action-button
          color="white"
          @click.prevent="$emit('close')"
          class="text-gray-700 border border-gray-300"
        >Cancel</action-button>
      </template>
    </modal>
</template>
<script>
export default {
  data() {
    return {
      packageName: '',
    }
  },
  methods: {
    save() {
      this.$emit('save', this.packageName);
      this.$emit('close');
    }
  }
}
</script>
