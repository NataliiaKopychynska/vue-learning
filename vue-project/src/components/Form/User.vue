<script setup>
import { defineProps } from "vue";
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete"]);
</script>
<template>
  <div class="user-card">
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Password:</strong> {{ user.password }}</p>

    <button @click="emit('delete')">Delete</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.user-card {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
}
</style>
