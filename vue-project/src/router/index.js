import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import Weather from "../views/Weather.vue";
import Crypto from "../views/Crypto.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/form", component: Form },
  { path: "/weather", component: Weather },
  { path: "/crypto", component: Crypto },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
