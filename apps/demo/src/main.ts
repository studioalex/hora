import { createApp } from 'vue'
import HoraGrid from '@studioalex/horagrid'
import App from './App.vue'

import '@studioalex/horagrid/style.css'

createApp(App)
  .use(HoraGrid)
  .mount('#app')
