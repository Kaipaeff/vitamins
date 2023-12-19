import { createPinia } from 'pinia';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import App from './App.vue';

import './scss/settings/normalize.scss';
import 'element-plus/dist/index.css'
import './scss/style.scss';

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app
  .use(ElementPlus)
  .use(createPinia())
  .mount('#app')
