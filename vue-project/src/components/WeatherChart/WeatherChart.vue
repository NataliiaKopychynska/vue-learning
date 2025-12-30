<script setup>
import axios from "axios";
import { computed, ref } from "vue";

const city = ref("");
const error = ref(null);
const weatherData = ref(null);

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_URL = import.meta.env.VITE_WEATHER_API_URL;

const cityName = computed(() => {
  return "'" + city.value + "'";
});

const getWeather = async () => {
  if (city.value.trim().length < 6) {
    error.value = "City name is too short.";
    return false;
  }
  error.value = null;
  //   axios
  //     .get(`${API_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       weatherData.value = response.data;
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching weather data:", error);
  //     });

  try {
    const response = await axios.get(
      `${API_URL}?q=${city.value}&units=metric&appid=${API_KEY}`
    );
    console.log(response.data);
    weatherData.value = response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
</script>

<template>
  <div class="wrapper">
    <h2>Weather Chart for {{ cityName == "''" ? "your city" : cityName }}</h2>
    <p>Weather data will be displayed here.</p>
    <input v-model="city" type="text" placeholder="Enter city" />
    <button v-if="city !== ''" @click="getWeather">Get Weather</button>
    <button disabled v-else>Get Weather</button>
    <p v-if="error" class="errorMessage">{{ error }}</p>

    <div v-if="weatherData !== null">
      <p>Temperature: {{ weatherData.main.temp }}</p>
      <p>Feels like: {{ weatherData.main.feels_like }}</p>
      <p>Humidity: {{ weatherData.main.humidity }}</p>
    </div>

    <!-- <input
      v-model="city"
      v-on:input="this.city = $event.target.value"
      type="text"
      placeholder="Enter city"
    /> -->
    <!-- <button v-show="city !== ''">Get Weather</button> -->
  </div>
</template>

<style scoped>
.wrapper {
  width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  border: 1px solid #ccc;
  padding: 32px;
  border-radius: 8px;
  max-width: 600px;
  background-color: rgb(120, 123, 209);
}
.wrapper h2 {
  text-align: center;
  font-weight: 400;
  text-align: center;
  /* height: 40px; */
  line-height: 40px;
  margin-bottom: 8px;
  color: #ffffff;
}
.wrapper p {
  text-align: center;
  font-weight: 300;

  margin-bottom: 32px;
  color: #ffffff;
}

.wrapper input {
  width: calc(100% - 110px);
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  /* border-radius: 6px; */
  margin-right: 8px;
  background-color: transparent;
  border: transparent;
  color: #ffffff;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: #e0e0e0;
  }

  &:focus {
    border-bottom: 2px solid #43407e;
  }
}
</style>
