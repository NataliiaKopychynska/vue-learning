<script setup>
import { computed, ref } from "vue";

const modelValue = defineModel();
const options = [
  { value: "BTC", label: "BTC" },
  { value: "ETH", label: "ETH" },
  { value: "USD", label: "USD" },
];
const isOpen = ref(false);

const selectedLabel = computed(() => {
  const found = options.find((o) => o.value === modelValue.value);
  return found ? found.label : "Select crypto";
});

function selectOption(option) {
  modelValue.value = option.value;
  isOpen.value = false;
}
</script>
<template>
  <div class="custom-select">
    <p class="label">Select:</p>
    <div class="select-header" @click="isOpen = !isOpen">
      {{ selectedLabel }}
    </div>

    <ul v-if="isOpen" class="select-options">
      <li
        class="options"
        v-for="option in options"
        :key="option.value"
        @click.stop="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.label {
  margin-bottom: 8px;
  color: #e8d291;
  font-size: 1.1em;
}
.custom-select {
  position: relative;
  width: 320px;
  margin-top: 24px;
  font-size: 1.2em;
  color: #fbf8ff;
  /* padding: 12px; */
}

.select-header {
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background: rgba(240, 248, 255, 0.42);
  cursor: pointer;
  user-select: none;
}

/* 🔥 ГОЛОВНЕ */
.select-options {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  color: rgb(134, 85, 176);
  background: rgb(240, 248, 255);
  border-radius: 8px;
  padding: 8px 8px;
  margin: 0;

  list-style: none;
  z-index: 1000;
}

.option {
  padding: 10px 12px;
  cursor: pointer;
  color: #fbf8ff;
}

.option:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
