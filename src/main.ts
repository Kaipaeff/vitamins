import { createPinia } from 'pinia';
import { createApp } from 'vue'

import App from './App.vue'

import './scss/settings/normalize.scss';
import './scss/style.scss'

createApp(App).use(createPinia()).mount('#app')
