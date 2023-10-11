import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'

import  createVuetify  from '@/plugins/vuetify'

import { createPinia } from 'pinia'

import VueTheMask from 'vue-the-mask'

const pinia = createPinia()

const vuetify = createVuetify

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(VueTheMask as any)
  .mount('#app')
