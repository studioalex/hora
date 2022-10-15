# Hora Grid

Vue 3 Data Grid component driven by pure [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
helps to display data delivered from API's.

[GitHub](https://github.com/studioalex/hora) | [Documentation](https://hora.studioalex.tech/)

## Adding Hora Grid to your Project

With npm

```bash
npm install -D @studioalex/hora-grid
or with yarn
```

or with yarn

```bash
yarn add -D @studioalex/hora-grid
or with pnpm
```

or with pnpm

```bash
pnpm add -D @studioalex/hora-grid
```

## Using Hora Grid in your Component

Example for Vue Composition API using sugar syntax.

```vue
<script setup>
import { HoraGrid } from '@studioalex/hora-grid'
import '@studioalex/hora-grid/style.css'
...
</script>

<template>
  ...
  <hora-grid
    :data="..."
    :fields="...">
  </hora-grid>
  ...
</template>
```

## Configure Hora Grid for the Project

Installing Hora Grid for the whole Project. The example use [vite](https://vitejs.dev) and [Vue 3](https://vuejs.org).

**src/main.js**

```javascript
import { createApp } from 'vue'
import HoraGrid from '@studioalex/hora-grid'
import '@studioalex/hora-grid/style.css'
import './style.css'
import App from './App.vue'

createApp(App)
  .use(HoraGrid)
  .mount('#app')
```

## License

[MIT](./LICENSE) License © 2022-Present [Alexander Sedeke](https://github.com/alexsedeke)
