import { createWebHistory, createRouter } from "vue-router";
// import Home from "./App.vue";
import Mollies from "@/views/Mollies.vue"
import Tomcats from "@/views/Tomcats.vue"

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
  {
    path: "/tomcats",
    name: "Tomcats",
    component: Tomcats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;