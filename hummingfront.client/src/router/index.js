import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Mollies from "@/views/Mollies.vue"
import Tomcats from "@/views/Tomcats.vue"
import Castrates from "@/views/Castrates.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
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
  {
    path: "/castrates",
    name: "Castrates",
    component: Castrates,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;