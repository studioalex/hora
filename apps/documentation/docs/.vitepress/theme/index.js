import DefaultTheme from 'vitepress/theme'
import HoraLayout from './HoraLayout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: HoraLayout
}
