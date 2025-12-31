import { defineProps } from 'vue';
<script setup>
const modalValue = defineModel();
</script>

<template>
  <input
    min="0"
    type="number"
    placeholder="Write number"
    :value="modalValue"
    @input="modalValue = $event.target.value"
  />
</template>

<style scoped>
input {
  margin-top: 24px;
  background-color: rgba(240, 248, 255, 0.42);
  width: 100px;
  height: 40px;
  font-size: 1.2em;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
  letter-spacing: 0.06em;
  color: #fbf8ff;

  &:focus {
    border-color: #9077fe;
    outline: none;
    box-shadow: 0 0 8px rgba(144, 119, 254, 0.6);
  }
  &::placeholder {
    color: #fbf8ff;
    font-style: italic;
    font-weight: 200;
  }
}
</style>
