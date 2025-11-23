<template>
  <div class="search-bar">
    <Input
      type="text"
      placeholder="Ürün ara..."
      v-model="searchQuery"
      @update:modelValue="handleSearch"
    />
    <IconButton icon="🔍" @click="handleSearch" />
  </div>
</template>

<script>
import Input from '../atoms/Input.vue'
import IconButton from '../atoms/IconButton.vue'

export default {
  name: 'SearchBar',
  components: {
    Input,
    IconButton
  },
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery)
    }
  },
  emits: ['search']
}
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 400px;
}
</style>

