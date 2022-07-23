import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HoraGrid from '@studioalex/horagrid'
import DemoApp from './DemoApp.vue'

import '@studioalex/horagrid/style.css'
import './style.css'

createApp(DemoApp)
  .use(HoraGrid)
  .use(createPinia())
  .mount('#demo-app')
