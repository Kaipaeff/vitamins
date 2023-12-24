import { RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import Vitamins from '../components/Vitamins.vue';
import Vitamin from '../components/Vitamin.vue';
import Favorites from '../pages/Favorites.vue';

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/vitamins",
    children: [
      { path: "/vitamins", name: "Vitamins", component: Vitamins },
      { path: "/vitamin/:id", name: "Vitamin", component: Vitamin },
      { path: "/favorites", name: "Favorites", component: Favorites }
    ],

  }
]

export default routes; 