<template>
  <div class="search-input">
    <TextField
      type="text"
      placeholder="Ürün ara..."
      v-model="searchQuery"
      @update:modelValue="handleSearch"
    />
    <IconAction icon="🔍" @click="handleSearch" />
  </div>
</template>

<script>
import TextField from '../atoms/TextField.vue'
import IconAction from '../atoms/IconAction.vue'

export default {
  name: 'SearchInput',
  components: {
    TextField,
    IconAction
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
.search-input {
  display: flex;
  gap: 10px;
  align-items: center;
  max-width: 400px;
}
</style>

