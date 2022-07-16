import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HoraGrid from '@studioalex/horagrid'
import Gridder from './Gridder.vue'

import '@studioalex/horagrid/style.css'
import './style.css'

createApp(Gridder)
  .use(HoraGrid)
  .use(createPinia())
  .mount('#gridder')
