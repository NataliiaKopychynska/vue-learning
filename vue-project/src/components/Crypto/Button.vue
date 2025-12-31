<script setup>
const emit = defineEmits(["convertedAmount"]);
</script>
<template>
  <button @click="emit('convertedAmount')" class="custom-button">
    <slot />
  </button>
</template>
<style scoped>
.custom-button {
  margin-top: 24px;
  height: 40px;
  background-color: #f5c748;
  color: #d16822;
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 1.1em;
  cursor: pointer;
}
</style>
