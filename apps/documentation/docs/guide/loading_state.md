# Loading State

**Hora Grid** provides a loading property that will flag the Grid as loading or active,
which you can set to true just before you query data, and then set it to false once you data loaded.

During the loading state, the grid will not be rendered. Instead a custom loading view is rendered.

You may optionally provide a `loading` **slot** to show a custom loading message or spinner whenever the Grid loading state is true.
The slot replace the Grid content and is display in full width and height of the Grid.

## Property description

| Property          | Type              | Description                                               |
| ----------------- | ----------------- | --------------------------------------------------------- |
| isLoading         | Boolean           | Show the loading item which indicate data loading status. |

## Example of Grid loading slot usage

<LoadingExample />

```vue
<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
  import { HoraButton } from '@studioalex/hora-elements'
  import '@studioalex/hora-grid/style.css'

  const dataExample = ref([
    { "first_name": "John", "last_name": "Slim", "age": 35, "gender": "male", "city": "London" },
    { "first_name": "Emma", "last_name": "Sutton", "age": 32, "gender": "female", "city": "Dublin" },
    { "first_name": "Freya", "last_name": "Brown", "age": 38, "gender": "female", "city": "Edinburgh" },
    { "first_name": "Tomas", "last_name": "Williams", "age": 31, "gender": "male", "city": "Cardiff" }
  ])

  const fieldList = ref([
    { "key": "first_name" },
    { "key": "last_name" },
    { "key": "age" },
    { "key": "gender"},
    { "key": "city" }
  ])

  const loading = ref(false)
</script>

<template>
  <div>
    <hora-button
      type="primary"
      @click="loading = !loading">
      {{loading ? 'Hide' : 'Show'}} loading state
    </hora-button>
  </div>
  <hora-grid
    :fields="fieldList"
    :data="dataExample"
    :is-loading="loading"></hora-grid>
</template>
```

<script setup>
  import LoadingExample from './examples/LoadingExample.vue'
</script>
