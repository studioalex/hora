# Headline

Add an optional title to your table via the property `titel` or the named slot `headline`.
The **Headline** is also used to display additionally functionally like Field [Settings](./settings.md).

## Property description

| Property          | Type              | Description                                               |
| ----------------- | ----------------- | --------------------------------------------------------- |
| title             | String            | Set the Grid heasline title                               |

## Example of property title

<HeadlineExample />

```vue
<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
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
</script>

<template>
  <hora-grid
    title="Grid Title"
    :fields="fieldList"
    :data="dataExample"></hora-grid>
</template>
```

## Example of slot title

Using the slot `headline` replace the default set Grid headline.

<HeadlineSlotExample />

```vue
<script setup>
  import { ref } from 'vue'
  import { HoraGrid } from '@studioalex/hora-grid'
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
</script>

<template>
  <hora-grid
    :fields="fieldList"
    :data="dataExample">
    <template #headline>
      <strong>Replace the default Headline</strong>
    </template>
  </hora-grid>
</template>
```

<script setup>
  import HeadlineExample from './examples/HeadlineExample.vue'
  import HeadlineSlotExample from './examples/HeadlineSlotExample.vue'
</script>
