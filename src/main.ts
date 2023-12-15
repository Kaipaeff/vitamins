import { createPinia } from 'pinia';
import { createApp } from 'vue'
import './scss/settings/normalize.scss';
import './scss/style.scss'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
