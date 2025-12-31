<script setup>
import { ref } from "vue";
import { getConverter } from "../components/Crypto/cryptoConvert";
import Input from "../components/Crypto/Input.vue";
import SelectorDiv from "../components/Crypto/SelectorDiv.vue";
import Button from "../components/Crypto/Button.vue";

const selectedCryptoFirst = ref(null);
const selectedCryptoSecond = ref(null);
const amount = ref(0);
const resultConverting = ref(null);

const convertedAmount = async () => {
  if (
    !selectedCryptoFirst.value ||
    !selectedCryptoSecond.value ||
    !amount.value
  ) {
    alert("Please select both cryptocurrencies and enter an amount.");
    return;
  }

  try {
    const convert = await getConverter();

    const from = selectedCryptoFirst.value.toUpperCase();
    const to = selectedCryptoSecond.value.toUpperCase();

    resultConverting.value = convert[from][to](amount.value);
  } catch (error) {
    console.error("Conversion error:", error);
  }
};
</script>

<template>
  <div class="container2">
    <h1>Crypto</h1>
    <p>This is the Crypto view.</p>
    <section class="crypto-section">
      <!-- <Selector v-model="selectedCryptoFirst" /> -->
      <SelectorDiv v-model="selectedCryptoFirst" />
      <SelectorDiv v-model="selectedCryptoSecond" />
    </section>
    <section class="crypto-section">
      <Input v-model="amount" />
      <Button @convertedAmount="convertedAmount">Convert</Button>
      <!-- <Selector v-model="selectedCryptoSecond" /> -->
    </section>
    <div v-if="resultConverting !== null" class="crypto-section">
      <h2>
        Result: <strong>{{ resultConverting }}</strong>
      </h2>
    </div>
  </div>
</template>
<style scoped>
.container2 {
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100ch;
  height: 100vh;
  padding: 20px;
  background-color: #9077fe;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
}

h1 {
  /* color: #322c50; */
  font-family: "Nabla", sans-serif;
  font-size: 5em;
  font-weight: bold;
}
h2 {
  /* color: #322c50; */
  font-family: "Nabla", sans-serif;
  font-size: 3em;
}
p {
  color: #e8d291;
  font-size: 1.5em;
  margin-bottom: 16px;
}

.crypto-section {
  display: flex;
  gap: 16px;
  justify-content: start;
}
</style>
