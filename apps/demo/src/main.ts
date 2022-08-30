import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HoraGrid from '@studioalex/hora-grid'
import DemoApp from './DemoApp.vue'

import '@studioalex/hora-grid/style.css'
import './style.css'

createApp(DemoApp)
  .use(HoraGrid)
  .use(createPinia())
  .mount('#demo-app')
