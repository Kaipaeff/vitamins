import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import App from './App.vue';

import Home from './pages/Home.vue';
import Favorites from './pages/Favorites.vue';
import Vitamin from './components/Vitamin.vue';

import './scss/settings/normalize.scss';
import 'element-plus/dist/index.css'
import './scss/style.scss';

const app = createApp(App);

const routes = [
  { path: '/vitamins/', name: 'Home', component: Home },
  { path: '/vitamins/favorites/', name: 'Favorites', component: Favorites },
  { path: '/vitamins/:id/', name: 'Vitamin', component: Vitamin },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
  .mount('#app')
