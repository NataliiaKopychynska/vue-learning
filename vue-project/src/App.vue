<script setup>
// import FormLesson from "./components/Form/FormLesson.vue";
import WeatherChart from "./components/WeatherChart/WeatherChart.vue";
// import FirstLesson from "./components/FirstLesson.vue";
</script>

<template>
  <body>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/weather">Weather</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/crypto">Crypto</router-link>
    </nav>
    <router-view />
  </body>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 16px;
  padding: 20px;
}
a {
  text-decoration: none;
  color: #4f46e5;
  font-weight: 600;
}
</style>
