import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createPinia } from 'pinia'

import VueTheMask from 'vue-the-mask'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .use(pinia)
  .use(VueTheMask as any)
  .mount('#app')
