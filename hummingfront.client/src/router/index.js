import { createWebHistory, createRouter } from "vue-router";
// import Home from "./App.vue";
import Mollies from "@/views/Mollies.vue"

const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
  {
    path: "/mollies",
    name: "Mollies",
    component: Mollies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;