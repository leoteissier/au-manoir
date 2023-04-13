import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import router from './router'

import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

const pinia = createPinia()
const app = createApp(App)

app.use(router)

app.use(pinia)
app.mount('#app')

