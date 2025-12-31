<script setup>
const modelValue = defineModel();
</script>
<template>
  <select v-model="modelValue">
    <option value="elect Cryptocurrency" disabled selected>
      Select Cryptocurrency
    </option>
    <option value="bitcoin">Bitcoin</option>
    <option value="ethereum">ETH</option>
    <option value="litecoin">LTC</option>
  </select>
</template>
<style scoped>
select {
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-top: 24px;
  background-color: rgba(240, 248, 255, 0.42);
  /* width: 320px; */
  height: 40px;
  font-size: 1.2em;
  padding: 8px;
  color: #fbf8ff;

  &:focus {
    border-color: #9077fe;
    outline: none;
    box-shadow: 0 0 8px rgba(144, 119, 254, 0.6);
  }

  & option {
    background-color: #322c50;
    color: #fbf8ff;
  }

  /* &::placeholder {
    color: #fbf8ff;
    font-style: italic;
    font-weight: 200;
  } */
}
</style>
