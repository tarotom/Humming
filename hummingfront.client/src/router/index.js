import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Mollies from "@/views/Mollies.vue"
import Tomcats from "@/views/Tomcats.vue"
import Castrates from "@/views/Castrates.vue"
import InMemoriam from "@/views/InMemoriam.vue"
import News from "@/views/News.vue"
import KittenBasket from "@/views/KittenBasket.vue"
import KittenInfo from "@/views/KittenInfo.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Mollies",
    name: "Mollies",
    component: Mollies,
  },
  {
    path: "/Tomcats",
    name: "Tomcats",
    component: Tomcats,
  },
  {
    path: "/Castrates",
    name: "Castrates",
    component: Castrates,
  },
  {
    path: "/InMemoriam",
    name: "InMemoriam",
    component: InMemoriam,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/KittenBasket",
    name: "KittenBasket",
    component: KittenBasket,
  },
  {
    path: "/KittenInfo",
    name: "KittenInfo",
    component: KittenInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;